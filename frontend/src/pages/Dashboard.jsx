import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Bell, MailWarning, MessageSquare, Target, UserCircle, Users } from "lucide-react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [connections, setConnections] = useState({
    acceptedConnections: [],
    incomingRequests: [],
    outgoingRequests: [],
  });
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const [userRes, connectionRes, notificationRes] = await Promise.all([
          axios.get("/api/auth/me", { withCredentials: true }),
          axios.get("/api/matches/my-connections", { withCredentials: true }),
          axios.get("/api/notifications", { withCredentials: true }),
        ]);

        setUser(userRes.data);
        setConnections(connectionRes.data);
        setNotifications(notificationRes.data.slice(0, 5));
      } catch (err) {
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
      </div>
    );
  }

  if (!user?.hasProfile) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white max-w-md w-full p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <UserCircle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Welcome, {user?.name}!</h2>
          <p className="text-slate-500 mb-8">
            Your journey begins with setting up your profile. Tell us about your goals and interests to find the perfect matches.
          </p>
          <button onClick={() => navigate("/create-profile")} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-xl font-medium transition-colors shadow-sm">
            Complete Profile Setup
          </button>
        </motion.div>
      </div>
    );
  }

  const cards = [
    {
      title: "Network Hub",
      value: connections.acceptedConnections?.length || 0,
      description: "Accepted mentor-mentee connections",
      icon: Users,
      color: "bg-blue-50 text-blue-600",
      path: "/matching",
    },
    {
      title: "Pending Requests",
      value: connections.incomingRequests?.length || 0,
      description: "Requests waiting for your response",
      icon: Bell,
      color: "bg-amber-50 text-amber-600",
      path: "/matching",
    },
    {
      title: "Messages",
      value: "Inbox",
      description: "Approval-based chat requests and conversations",
      icon: MessageSquare,
      color: "bg-purple-50 text-purple-600",
      path: "/messages",
    },
    {
      title: "Tasks",
      value: user.roles?.includes("mentor") ? "Assign" : "Track",
      description: user.roles?.includes("mentor")
        ? "Assign tasks to connected mentees"
        : "Stay on top of mentor-assigned work",
      icon: Target,
      color: "bg-emerald-50 text-emerald-600",
      path: "/goals",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-50/40 to-blue-50/40 rounded-full blur-3xl opacity-50 -z-10 -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
            <p className="text-slate-500 mt-1">
              Welcome back, <span className="font-medium text-indigo-600">{user.name}</span>. Here&apos;s the current pulse of your mentorship workspace.
            </p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => navigate("/notifications")} className="bg-white border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2 cursor-pointer">
              <Bell size={16} />
              Notifications
            </button>
          </div>
        </motion.div>

        {!user.isEmailVerified && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex items-start gap-3">
              <MailWarning className="text-amber-600 mt-0.5" size={22} />
              <div>
                <h2 className="text-base font-semibold text-slate-800">Verify your email</h2>
                <p className="text-sm text-slate-600 mt-1">
                  Your account is active, but <span className="font-medium">{user.email}</span> is still unverified.
                  Verify it from your profile page to finish setup.
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate("/profile")}
              className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-700 transition-colors"
            >
              Open Profile
            </button>
          </motion.div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} whileHover={{ y: -2 }} className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-300 transition-all cursor-pointer hover:shadow-md" onClick={() => navigate(card.path)}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.color}`}>
                  <Icon size={24} />
                </div>
                <h2 className="text-lg font-semibold text-slate-800 mb-1">{card.title}</h2>
                <p className="text-2xl font-bold text-slate-900 mb-2">{card.value}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Pending Requests</h2>
            {connections.incomingRequests?.length ? (
              <div className="space-y-3">
                {connections.incomingRequests.map((connection) => {
                  const requester =
                    connection.mentor?._id === user._id ? connection.mentee : connection.mentor;
                  return (
                    <div key={connection._id} className="border border-slate-200 rounded-xl p-4">
                      <p className="font-medium text-slate-800">{requester?.name}</p>
                      <p className="text-sm text-slate-500">@{requester?.username}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-slate-500">No pending requests right now.</p>
            )}
          </section>

          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Latest Notifications</h2>
            {notifications.length ? (
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification._id} className="border border-slate-200 rounded-xl p-4">
                    <p className="font-medium text-slate-800">{notification.title}</p>
                    <p className="text-sm text-slate-500 mt-1">{notification.body}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500">No notifications yet.</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
