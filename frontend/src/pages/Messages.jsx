// frontend/src/pages/Messages.jsx

import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const socket = io("http://localhost:5000", {
  withCredentials: true,
});

const Messages = () => {
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();

  // Fetch messages when a chat is selected
  useEffect(() => {
    if (currentChat?._id) {
      axios
        .get(`/api/messages/${currentChat._id}`, { withCredentials: true })
        .then((res) => {
          setMessages(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [currentChat]);

  // Join socket room
  useEffect(() => {
    if (currentChat?._id) {
      socket.emit("joinRoom", currentChat._id);
    }
  }, [currentChat]);

  // Listen for incoming messages
  useEffect(() => {
    socket.on("newMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, []);

  const handleSearch = async () => {
    if (!email.trim()) return;
    try {
      const res = await axios.post(
        "http://localhost:5000/api/messages/search",
        { email },
        { withCredentials: true }
      );
      setUsers([res.data]);
      setEmail("");
    } catch (error) {
      toast.error("User not found");
    }
  };

  const startChatWithUser = async (user) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/chats",
        { userId: user._id }, // 🔁 Send userId instead of email
        { withCredentials: true }
      );
      setSelectedUser(user);
      setCurrentChat(res.data); // Set the chat object
      setMessages([]);
    } catch (error) {
      toast.error("Failed to start chat.");
      console.log(error);
      
    }
  };

  const sendMessage = async () => {
    if (!message.trim() || !currentChat?._id) return;

    const msgData = {
      chatId: currentChat._id,
      content: message,
    };

    setMessage("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/messages/send",
        msgData,
        { withCredentials: true }
      );
      socket.emit("sendMessage", res.data);
      setMessages((prev) => [...prev, { ...res.data, fromSelf: true }]);
    } catch (err) {
      toast.error("Failed to send");
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-screen p-4 bg-gray-50">
      <ToastContainer />
      <div className="mb-4 flex gap-2">
        <input
          type="email"
          placeholder="Search user by email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 border rounded-md w-64"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 border-r pr-4">
          <h2 className="text-lg font-semibold mb-2">Users</h2>
          {users.map((user) => (
            <div key={user._id} className="mb-2">
              <div
                className={`cursor-pointer px-3 py-2 rounded ${
                  selectedUser?._id === user._id
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                }`}
              >
                <div>
                  {user.name} ({user.email})
                </div>
                <button
                  onClick={() => startChatWithUser(user)}
                  className="text-sm text-blue-600 underline"
                >
                  Start Chat
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Area */}
        <div className="w-3/4 pl-4 flex flex-col h-[80vh] border rounded-md">
          {selectedUser && currentChat ? (
            <>
              <div className="bg-blue-100 p-2 font-semibold">
                Chat with {selectedUser.name}
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    ref={scrollRef}
                    className={`mb-2 p-2 rounded max-w-[60%] ${
                      msg.sender?._id === selectedUser._id || msg.fromSelf
                        ? "ml-auto bg-green-100"
                        : "mr-auto bg-gray-200"
                    }`}
                  >
                    {msg.content}
                  </div>
                ))}
              </div>
              <div className="p-2 border-t flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 border px-3 py-2 rounded-md"
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <div className="text-center m-auto text-gray-500">
              Select or search a user to start chatting.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
