import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info, MessageCircle, Search, Send, UserPlus, X } from "lucide-react";

const socket = io("", {
  withCredentials: true,
});

const Messages = () => {
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchTouched, setSearchTouched] = useState(false);
  const [chats, setChats] = useState([]);
  const [incomingRequests, setIncomingRequests] = useState([]);
  const [outgoingRequests, setOutgoingRequests] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isNewChatOpen, setIsNewChatOpen] = useState(false);
  const scrollRef = useRef();
  const typingTimeoutRef = useRef(null);

  const formatTime = (dateString) =>
    new Date(dateString).toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const fetchChats = async () => {
    try {
      const res = await axios.get("/api/chat", { withCredentials: true });
      const fetchedChats = Array.isArray(res.data) ? res.data : [];
      setChats(fetchedChats);
      if (fetchedChats.length > 0 && !currentChat) {
        setCurrentChat(fetchedChats[0]);
      }
    } catch {
      toast.error("Failed to load chats");
    }
  };

  const fetchChatRequests = async () => {
    try {
      const res = await axios.get("/api/chat/requests", { withCredentials: true });
      setIncomingRequests(res.data.incoming || []);
      setOutgoingRequests(res.data.outgoing || []);
    } catch {
      toast.error("Failed to load chat requests");
    }
  };

  const getLoggedInUser = async () => {
    try {
      const res = await axios.get("/api/auth/me", { withCredentials: true });
      setUser(res.data);
      socket.emit("addUser", res.data._id);
    } catch {
      toast.error("Failed to load user");
    }
  };

  const fetchMessages = async (chatId) => {
    try {
      const res = await axios.get(`/api/messages/${chatId}`, { withCredentials: true });
      setMessages(res.data);
    } catch {
      toast.error("Failed to load messages");
    }
  };

  useEffect(() => {
    getLoggedInUser();
    fetchChats();
    fetchChatRequests();
  }, []);

  useEffect(() => {
    if (currentChat?._id) {
      fetchMessages(currentChat._id);
      socket.emit("joinRoom", currentChat._id);
    }
  }, [currentChat]);

  useEffect(() => {
    const handleNewMessage = (incomingMessage) => {
      if (incomingMessage.chat._id === currentChat?._id) {
        setMessages((prev) => {
          if (prev.some((msg) => msg._id === incomingMessage._id)) return prev;
          return [...prev, incomingMessage];
        });
      }
      fetchChats();
    };

    socket.on("newMessage", handleNewMessage);
    socket.on("typing", (chatId) => {
      if (chatId === currentChat?._id) setIsTyping(true);
    });
    socket.on("stopTyping", (chatId) => {
      if (chatId === currentChat?._id) setIsTyping(false);
    });

    return () => {
      socket.off("newMessage", handleNewMessage);
      socket.off("typing");
      socket.off("stopTyping");
    };
  }, [currentChat]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (!query.trim()) {
        setSuggestions([]);
        setSearching(false);
        return;
      }

      try {
        setSearching(true);
        const res = await axios.get(`/api/chat/search?q=${encodeURIComponent(query)}`, {
          withCredentials: true,
        });
        setSuggestions(res.data);
      } catch {
        setSuggestions([]);
      } finally {
        setSearching(false);
      }
    }, 250);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSearchSubmit = async (e) => {
    e?.preventDefault();
    if (!query.trim()) return;
    await startNewChat(query.trim());
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);
    socket.emit("typing", currentChat._id);

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      socket.emit("stopTyping", currentChat._id);
    }, 2000);
  };

  const sendMessage = async (e) => {
    e?.preventDefault();
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
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send message");
    }
  };

  const startNewChat = async (identifier) => {
    if (!identifier.trim()) return;
    try {
      const res = await axios.post(
        "/api/chat",
        { identifier },
        { withCredentials: true }
      );

      setQuery("");
      setSuggestions([]);
      setIsNewChatOpen(false);

      if (res.data.status === "accepted") {
        setChats((prev) => {
          const exists = prev.find((chat) => chat._id === res.data._id);
          return exists ? prev : [res.data, ...prev];
        });
        setCurrentChat(res.data);
      } else {
        toast.success("Message request sent. You can chat after it is accepted.");
        fetchChatRequests();
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "User not found or cannot start chat");
    }
  };

  const updateRequestStatus = async (chatId, status) => {
    try {
      const res = await axios.put(
        `/api/chat/${chatId}/request-status`,
        { status },
        { withCredentials: true }
      );

      toast.success(`Request ${status}.`);
      setIncomingRequests((prev) => prev.filter((request) => request._id !== chatId));

      if (status === "accepted") {
        setChats((prev) => [res.data, ...prev.filter((chat) => chat._id !== res.data._id)]);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update request.");
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col md:flex-row bg-slate-50 overflow-hidden font-sans">
      <div className="w-full md:w-96 flex flex-col border-r border-slate-200 bg-white shadow-sm z-10 shrink-0">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">Inbox</h2>
          <button onClick={() => setIsNewChatOpen(!isNewChatOpen)} className="p-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors cursor-pointer focus:outline-none" title="Start new chat">
            <UserPlus size={18} />
          </button>
        </div>

        <AnimatePresence>
          {isNewChatOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="bg-slate-50 border-b border-slate-200 px-4 py-3 overflow-hidden space-y-3">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSearchTouched(true);
                  }}
                  placeholder="Search by username or email..."
                  className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md text-slate-400 hover:text-indigo-600 hover:bg-slate-100 transition-colors"
                  title="Search and send request"
                >
                  <Search size={16} />
                </button>
              </form>
              {searching && (
                <p className="text-xs text-slate-500">Searching users...</p>
              )}
              {suggestions.length > 0 && (
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion._id}
                      onClick={() => startNewChat(suggestion.username || suggestion.email)}
                      className="w-full text-left px-4 py-3 hover:bg-slate-50 border-b last:border-b-0 border-slate-100"
                    >
                      <div className="font-medium text-slate-800">{suggestion.name}</div>
                      <div className="text-xs text-slate-500">@{suggestion.username} • {suggestion.email}</div>
                    </button>
                  ))}
                </div>
              )}
              {searchTouched && query.trim() && !searching && suggestions.length === 0 && (
                <p className="text-xs text-slate-500">
                  No suggestions found. Press Enter or click the search icon to try the exact username/email.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {(incomingRequests.length > 0 || outgoingRequests.length > 0) && (
          <div className="p-4 border-b border-slate-100 space-y-3 bg-slate-50">
            {incomingRequests.map((request) => {
              const requester = request.requestedBy;
              return (
                <div key={request._id} className="bg-white rounded-xl border border-slate-200 p-3">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold">{requester?.name}</span> wants to chat.
                  </p>
                  <p className="text-xs text-slate-500 mt-1">@{requester?.username}</p>
                  <div className="flex gap-2 mt-3">
                    <button onClick={() => updateRequestStatus(request._id, "accepted")} className="px-3 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700">
                      <Check size={14} className="inline mr-1" />
                      Accept
                    </button>
                    <button onClick={() => updateRequestStatus(request._id, "declined")} className="px-3 py-2 rounded-lg bg-red-50 text-red-600 text-xs font-semibold hover:bg-red-100">
                      <X size={14} className="inline mr-1" />
                      Decline
                    </button>
                  </div>
                </div>
              );
            })}

            {outgoingRequests.map((request) => {
              const otherUser = request.users.find((item) => item._id !== user?._id);
              return (
                <div key={request._id} className="bg-white rounded-xl border border-slate-200 p-3">
                  <p className="text-sm text-slate-700">Waiting for <span className="font-semibold">{otherUser?.name}</span> to accept your request.</p>
                  <p className="text-xs text-slate-500 mt-1">@{otherUser?.username}</p>
                </div>
              );
            })}
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          {chats.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-slate-400">
              <MessageCircle size={32} className="mb-2 opacity-50" />
              <p className="text-sm">No active conversations yet</p>
            </div>
          ) : (
            chats.map((chat) => {
              const otherUser = chat.users.find((item) => item._id !== user?._id);
              const isSelected = currentChat?._id === chat._id;
              return (
                <div key={chat._id} onClick={() => setCurrentChat(chat)} className={`cursor-pointer px-4 py-4 border-b border-slate-50 transition-all ${isSelected ? "bg-indigo-50 border-l-4 border-l-indigo-600" : "bg-white hover:bg-slate-50 border-l-4 border-l-transparent"}`}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-slate-800 text-sm truncate pr-2">
                      {otherUser?.name || "Self"}
                    </h3>
                    {chat.latestMessage && (
                      <span className="text-[10px] text-slate-400 shrink-0">
                        {formatTime(chat.latestMessage.createdAt)}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500 truncate">
                    {chat.latestMessage ? chat.latestMessage.content : "No messages yet"}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-[#F8FAFC] relative">
        {currentChat ? (
          <>
            <div className="h-16 px-6 border-b border-slate-200 bg-white flex items-center justify-between shadow-sm z-10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold">
                  {currentChat.users.find((item) => item._id !== user?._id)?.name?.charAt(0) || "S"}
                </div>
                <div>
                  <h2 className="font-semibold text-slate-800 leading-tight">
                    {currentChat.users.find((item) => item._id !== user?._id)?.name || "Self"}
                  </h2>
                  <p className="text-xs text-slate-500">@{currentChat.users.find((item) => item._id !== user?._id)?.username || "user"}</p>
                </div>
              </div>
              <button className="text-slate-400 hover:text-slate-600 transition">
                <Info size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {messages.map((msg) => {
                const isSender = msg.sender === user?._id || msg.sender?._id === user?._id;
                return (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={msg._id} className={`flex mb-3 ${isSender ? "justify-end" : "justify-start"}`}>
                    <div className={`relative max-w-[75%] sm:max-w-[60%] px-4 py-2.5 rounded-2xl shadow-sm text-sm ${isSender ? "bg-indigo-600 text-white rounded-br-sm" : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm"}`}>
                      <div className="whitespace-pre-wrap break-words">{msg.content}</div>
                      <div className={`text-[10px] mt-1 text-right ${isSender ? "text-indigo-200" : "text-slate-400"}`}>
                        {formatTime(msg.createdAt)}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 text-sm ml-2" ref={scrollRef}>
                  <div className="flex gap-1.5 bg-white p-3 rounded-2xl rounded-bl-sm border border-slate-200 shadow-sm w-fit">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={scrollRef} className="h-1" />
            </div>

            <div className="p-4 bg-white border-t border-slate-200 flex-shrink-0">
              <form onSubmit={sendMessage} className="flex gap-2 max-w-4xl mx-auto items-center bg-slate-50 border border-slate-200 rounded-full px-2 py-1.5 shadow-inner focus-within:ring-2 focus-within:ring-indigo-500">
                <input
                  type="text"
                  value={message}
                  onChange={handleTyping}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent px-4 py-2 focus:outline-none text-slate-700 text-sm placeholder-slate-400"
                />
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white p-2.5 rounded-full transition-colors cursor-pointer flex items-center justify-center shadow-sm"
                >
                  <Send size={18} className="ml-0.5" />
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-400 bg-slate-50/50">
            <div className="w-24 h-24 bg-white rounded-full shadow-sm flex items-center justify-center mb-6">
              <MessageCircle size={48} className="text-indigo-200" />
            </div>
            <h2 className="text-xl font-semibold text-slate-700 mb-2">Your Messages</h2>
            <p className="text-slate-500 text-sm max-w-xs text-center">
              Start a new request by searching a username, then chat after the other student accepts.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
