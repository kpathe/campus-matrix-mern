import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import io from "socket.io-client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const socket = io("http://localhost:5000", {
  withCredentials: true,
});

const Messages = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const scrollRef = useRef();

  // ✅ Get current logged-in user
  const getLoggedInUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/me", { withCredentials: true });
      setUser(res.data);
      socket.emit("addUser", res.data._id);
    } catch {
      toast.error("Failed to load user");
    }
  };

  // ✅ Fetch all chats and auto-select first
  const fetchChats = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/chat", { withCredentials: true });
      const fetchedChats = Array.isArray(res.data) ? res.data : [];
      setChats(fetchedChats);

      if (fetchedChats.length > 0 && !currentChat) {
        setCurrentChat(fetchedChats[0]);
      }
    } catch {
      toast.error("Failed to load chats");
    }
  };

  // ✅ Fetch messages for selected chat
  const fetchMessages = async (chatId) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/messages/${chatId}`,
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
    socket.on("receiveMessage", (msg) => {
      if (msg.chat === currentChat?._id) {
        setMessages((prev) => [...prev, msg]);
      }
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [currentChat]);

  const sendMessage = async () => {
    if (!message.trim() || !currentChat?._id) return;

    try {
      const res = await axios.post(
        "http://localhost:5000/api/messages/send",
        {
          chatId: currentChat._id,
          content: message,
        },
        { withCredentials: true }
      );
      setMessage("");
      setMessages((prev) => [...prev, res.data]);
      socket.emit("sendMessage", res.data);
    } catch {
      toast.error("Failed to send message");
    }
  };

  const startNewChat = async () => {
    if (!email.trim()) return;
    try {
      const res = await axios.post(
        "http://localhost:5000/api/chat",
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
                {otherUser?.name || "Self"} ({otherUser?.role || user?.role})
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
              {
                currentChat.users.find((u) => u._id !== user?._id)?.name || "Self"
              }
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {messages.map((msg, index) => {
                const isSender =
                  msg.sender === user?._id || msg.sender?._id === user?._id;
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
                    {msg.content}
                  </div>
                );
              })}
            </div>
            <div className="p-2 border-t flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
