import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    status: {
      type: String,
      enum: ["pending", "accepted", "declined"],
      default: "pending",
    },
    requestedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    acceptedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Chat", chatSchema);
