import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    type: {
      type: String,
      enum: [
        "connection_request",
        "connection_update",
        "chat_request",
        "chat_update",
        "task_assigned",
        "task_updated",
        "task_completed",
        "system",
      ],
      default: "system",
    },
    title: { type: String, required: true },
    body: { type: String, required: true },
    link: { type: String, default: "" },
    metadata: { type: Object, default: {} },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Notification", notificationSchema);
