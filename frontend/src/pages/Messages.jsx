import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import io from "socket.io-client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const socket = io("", {
  withCredentials: true,
});

const Messages = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef();
  const typingTimeoutRef = useRef(null);

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getLoggedInUser = async () => {
    try {
      const res = await axios.get("/api/auth/me", {
        withCredentials: true,
      });
      setUser(res.data);
      socket.emit("addUser", res.data._id);
    } catch {
      toast.error("Failed to load user");
    }
  };

  const fetchChats = async () => {
    try {
      const res = await axios.get("/api/chat", {
        withCredentials: true,
      });
      const fetchedChats = Array.isArray(res.data) ? res.data : [];
      setChats(fetchedChats);

      if (fetchedChats.length > 0 && !currentChat) {
        setCurrentChat(fetchedChats[0]);
      }
    } catch {
      toast.error("Failed to load chats");
    }
  };

  const fetchMessages = async (chatId) => {
    try {
      const res = await axios.get(
        `/api/messages/${chatId}`,
        { withCredentials: true }
      );
      setMessages(res.data);
    } catch {
      toast.error("Failed to load messages");
    }
  };

  useEffect(() => {
    getLoggedInUser();
    fetchChats();
  }, []);

  useEffect(() => {
    if (currentChat?._id) {
      fetchMessages(currentChat._id);
      socket.emit("joinRoom", currentChat._id);
    }
  }, [currentChat]);

  useEffect(() => {
    const handleNewMessage = (msg) => {
      if (msg.chat._id === currentChat?._id) {
        setMessages((prev) => [...prev, msg]);
      }
      fetchChats(); // update last message preview
    };

    socket.on("newMessage", handleNewMessage);

    socket.on("typing", (chatId) => {
      if (chatId === currentChat?._id) {
        setIsTyping(true);
      }
    });

    socket.on("stopTyping", (chatId) => {
      if (chatId === currentChat?._id) {
        setIsTyping(false);
      }
    });

    return () => {
      socket.off("newMessage", handleNewMessage);
      socket.off("typing");
      socket.off("stopTyping");
    };
  }, [currentChat]);

  const handleTyping = (e) => {
    setMessage(e.target.value);
    socket.emit("typing", currentChat._id);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      socket.emit("stopTyping", currentChat._id);
    }, 2000);
  };

  const sendMessage = async () => {
    if (!message.trim() || !currentChat?._id) return;

    try {
      const res = await axios.post(
        "/api/messages/send",
        {
          chatId: currentChat._id,
          content: message,
        },
        { withCredentials: true }
      );
      setMessage("");
      setMessages((prev) => [...prev, res.data]);
      socket.emit("newMessage", res.data);
      socket.emit("stopTyping", currentChat._id);
    } catch {
      toast.error("Failed to send message");
    }
  };

  const startNewChat = async () => {
    if (!email.trim()) return;
    try {
      const res = await axios.post(
        "/api/chat",
        { email },
        { withCredentials: true }
      );
      setEmail("");
      setChats((prev) => {
        const exists = prev.find((chat) => chat._id === res.data._id);
        return exists ? prev : [res.data, ...prev];
      });
      setCurrentChat(res.data);
    } catch {
      toast.error("User not found or cannot start chat");
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const groupMessagesByDate = (messages) => {
    const groups = {};

    messages.forEach((msg) => {
      const date = new Date(msg.createdAt).toDateString();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(msg);
    });

    return groups;
  };

  const getRelativeDate = (dateStr) => {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (dateStr === today) return "Today";
    if (dateStr === yesterday) return "Yesterday";
    return dateStr;
  };

  return (
    <div className="h-screen flex flex-col sm:flex-row p-2 bg-gray-50">
      <ToastContainer />
      {/* Sidebar */}
      <div className="sm:w-1/4 w-full sm:pr-4 mb-4 sm:mb-0 border-r">
        <h2 className="text-lg font-semibold mb-2">Chats</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Start chat by email"
          className="w-full mb-2 px-3 py-2 border rounded"
        />
        <button
          onClick={startNewChat}
          className="w-full bg-blue-600 text-white px-3 py-2 mb-4 rounded cursor-pointer"
        >
          Start Chat
        </button>

        {chats.length === 0 ? (
          <p className="text-sm text-gray-500">No chats yet</p>
        ) : (
          chats.map((chat) => {
            const otherUser = chat.users.find((u) => u._id !== user?._id);
            return (
              <div
                key={chat._id}
                onClick={() => setCurrentChat(chat)}
                className={`cursor-pointer px-3 py-2 rounded mb-2 ${
                  currentChat?._id === chat._id
                    ? "bg-blue-200"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="font-medium">
                  {otherUser?.name || "Self"} ({otherUser?.role || user?.role})
                </div>
                {chat.latestMessage && (
                  <div className="text-xs text-gray-500 truncate">
                    {chat.latestMessage.content}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Chat window */}
      <div className="sm:w-3/4 w-full flex flex-col border rounded-md h-[85vh]">
        {currentChat ? (
          <>
            <div className="bg-blue-100 p-2 font-semibold rounded-t-md">
              Chat with{" "}
              {currentChat.users.find((u) => u._id !== user?._id)?.name ||
                "Self"}
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {Object.entries(groupMessagesByDate(messages)).map(
                ([date, msgs], idx) => (
                  <div key={idx}>
                    <div className="text-center text-sm text-gray-500 my-2">
                      {getRelativeDate(date)}
                    </div>
                    {msgs.map((msg, index) => {
                      const isSender =
                        msg.sender === user?._id ||
                        msg.sender?._id === user?._id;
                      const isRead = msg.readBy?.length > 1;

                      return (
                        <div
                          key={index}
                          ref={scrollRef}
                          className={`mb-2 px-4 py-2 rounded-lg max-w-[75%] break-words ${
                            isSender
                              ? "ml-auto bg-green-100 text-right w-fit"
                              : "mr-auto bg-yellow-100 text-left w-fit"
                          }`}
                        >
                          <div>{msg.content}</div>
                          <div className="text-xs text-gray-500 mt-1 flex justify-end gap-1">
                            {formatTime(msg.createdAt)}
                            {isSender && <span>{isRead ? "✓✓" : "✓"}</span>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )
              )}

              {isTyping && (
                <div className="text-sm italic text-gray-400 mb-2">
                  Typing...
                </div>
              )}
            </div>
            <div className="p-2 border-t flex gap-2">
              <input
                type="text"
                value={message}
                onChange={handleTyping}
                placeholder="Type your message"
                className="flex-1 px-3 py-2 border rounded"
              />
              <button
                onClick={sendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="m-auto text-gray-500">
            Select or start a chat to begin messaging.
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
