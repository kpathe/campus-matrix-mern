import Notification from "../models/Notification.js";

export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .limit(100);

    res.status(200).json(notifications);
  } catch (err) {
    console.error("Get Notifications Error:", err);
    res.status(500).json({ message: "Failed to fetch notifications." });
  }
};

export const markNotificationRead = async (req, res) => {
  try {
    const notification = await Notification.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { read: true },
      { new: true }
    );

    if (!notification) {
      return res.status(404).json({ message: "Notification not found." });
    }

    res.status(200).json(notification);
  } catch (err) {
    console.error("Mark Notification Read Error:", err);
    res.status(500).json({ message: "Failed to update notification." });
  }
};

export const markAllNotificationsRead = async (req, res) => {
  try {
    await Notification.updateMany({ user: req.user.id, read: false }, { read: true });
    res.status(200).json({ message: "All notifications marked as read." });
  } catch (err) {
    console.error("Mark All Notifications Error:", err);
    res.status(500).json({ message: "Failed to update notifications." });
  }
};
