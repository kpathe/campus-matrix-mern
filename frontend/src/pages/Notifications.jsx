import { useEffect, useState } from "react";
import axios from "axios";
import { Bell, CheckCheck } from "lucide-react";
import { toast } from "react-toastify";

const formatTime = (dateString) =>
  new Date(dateString).toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const res = await axios.get("/api/notifications", { withCredentials: true });
      setNotifications(res.data);
    } catch (err) {
      toast.error("Failed to load notifications.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const markRead = async (id) => {
    try {
      await axios.put(`/api/notifications/${id}/read`, {}, { withCredentials: true });
      setNotifications((prev) =>
        prev.map((notification) =>
          notification._id === id ? { ...notification, read: true } : notification
        )
      );
    } catch (err) {
      toast.error("Failed to update notification.");
    }
  };

  const markAllRead = async () => {
    try {
      await axios.put("/api/notifications/read-all", {}, { withCredentials: true });
      setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })));
    } catch (err) {
      toast.error("Failed to mark all notifications as read.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
            <p className="text-slate-500 mt-1">
              Stay on top of mentor requests, task updates, and message approvals.
            </p>
          </div>
          <button
            onClick={markAllRead}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            <CheckCheck size={18} />
            Mark All Read
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900" />
          </div>
        ) : notifications.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center text-slate-500">
            <Bell size={28} className="mx-auto mb-3 text-slate-300" />
            No notifications yet.
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification._id}
                className={`bg-white border rounded-2xl p-5 shadow-sm transition-all ${
                  notification.read ? "border-slate-200" : "border-indigo-200 bg-indigo-50/30"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold text-slate-800">{notification.title}</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">{notification.body}</p>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      {notification.type.replace(/_/g, " ")} • {formatTime(notification.createdAt)}
                    </p>
                  </div>
                  {!notification.read && (
                    <button
                      onClick={() => markRead(notification._id)}
                      className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                      Mark read
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
