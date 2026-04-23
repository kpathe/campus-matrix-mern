import { GoogleGenAI } from "@google/genai";
import Connection from "../models/Connection.js";
import Profile from "../models/Profile.js";
import User from "../models/User.js";
import { createNotification } from "../utils/notification.js";

const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
  : null;

const computeFallbackScore = (myProfile, candidateProfile) => {
  const skillOverlap = candidateProfile.skills.filter((skill) =>
    myProfile.skills.includes(skill)
  ).length;
  const interestOverlap = candidateProfile.interests.filter((interest) =>
    myProfile.interests.includes(interest)
  ).length;
  const languageOverlap = candidateProfile.languages.filter((language) =>
    myProfile.languages.includes(language)
  ).length;

  const score = Math.min(100, 35 + skillOverlap * 15 + interestOverlap * 10 + languageOverlap * 8);
  const reasonParts = [];

  if (skillOverlap) reasonParts.push("shared technical skills");
  if (interestOverlap) reasonParts.push("common interests");
  if (languageOverlap) reasonParts.push("similar language comfort");

  return {
    score,
    matchReason:
      reasonParts.length > 0
        ? `Strong fit because of ${reasonParts.join(", ")}.`
        : "Balanced profile match with complementary interests and experience.",
  };
};

export const getPotentialMatches = async (req, res) => {
  try {
    const { targetRole } = req.query;

    if (!["mentor", "mentee"].includes(targetRole)) {
      return res.status(400).json({ message: "A valid targetRole is required." });
    }

    const myProfile = await Profile.findOne({ user: req.user.id });
    if (!myProfile) {
      return res.status(400).json({ message: "You need to create a profile first." });
    }

    const potentialUsers = await User.find({
      roles: targetRole,
      _id: { $ne: req.user.id },
      hasProfile: true,
    });

    if (!potentialUsers.length) return res.status(200).json([]);

    const userIds = potentialUsers.map((user) => user._id);
    let theirProfiles = await Profile.find({ user: { $in: userIds } }).populate("user", "-password");

    if (myProfile.gender) {
      theirProfiles = theirProfiles.filter((profile) => !profile.gender || profile.gender === myProfile.gender);
    }

    const activeConnections = await Connection.find({
      $or: [{ mentor: req.user.id }, { mentee: req.user.id }],
    });

    const connectedIds = activeConnections.map((connection) =>
      connection.mentor.toString() === req.user.id
        ? connection.mentee.toString()
        : connection.mentor.toString()
    );

    theirProfiles = theirProfiles.filter(
      (profile) => profile.user && !connectedIds.includes(profile.user._id.toString())
    );

    if (!theirProfiles.length) return res.status(200).json([]);

    const myData = {
      department: myProfile.department,
      skills: myProfile.skills,
      interests: myProfile.interests,
      languages: myProfile.languages,
      bio: myProfile.bio,
    };

    let scoreLookup = new Map();

    if (ai) {
      try {
        const candidates = theirProfiles.map((profile) => ({
          id: profile._id.toString(),
          department: profile.department,
          skills: profile.skills,
          interests: profile.interests,
          languages: profile.languages,
          bio: profile.bio,
        }));

        const prompt = `
          I am a user looking for a ${targetRole}. My profile is:
          ${JSON.stringify(myData)}

          Here is a list of candidate profiles:
          ${JSON.stringify(candidates)}

          Evaluate the compatibility between me and each candidate. Return a JSON array of objects.
          Each object should have:
          - "id": the candidate's id
          - "score": an integer from 0 to 100
          - "matchReason": a short 1-sentence reason

          Respond ONLY with the raw JSON array.
        `;

        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
        });

        const resultText = response.text
          .replace(/```json\s*/g, "")
          .replace(/```\s*/g, "")
          .trim();

        const aiMatches = JSON.parse(resultText);
        scoreLookup = new Map(aiMatches.map((match) => [match.id, match]));
      } catch (error) {
        console.error("Gemini fallback engaged:", error);
      }
    }

    const matchScores = theirProfiles
      .map((profile) => {
        const aiScore = scoreLookup.get(profile._id.toString());
        const fallback = computeFallbackScore(myProfile, profile);

        return {
          profile,
          score: aiScore?.score ?? fallback.score,
          matchReason: aiScore?.matchReason ?? fallback.matchReason,
        };
      })
      .sort((a, b) => b.score - a.score);

    res.status(200).json(matchScores);
  } catch (err) {
    console.error("Matchmaking error:", err);
    res.status(500).json({ message: "Error fetching matches." });
  }
};

export const requestConnection = async (req, res) => {
  try {
    const { targetUserId, targetRole } = req.body;
    if (!targetUserId || !["mentor", "mentee"].includes(targetRole)) {
      return res.status(400).json({ message: "Target user and role are required." });
    }

    const targetUser = await User.findById(targetUserId).select("name roles");
    if (!targetUser) {
      return res.status(404).json({ message: "Target user not found." });
    }

    const existing = await Connection.findOne({
      $or: [
        { mentor: req.user.id, mentee: targetUserId },
        { mentor: targetUserId, mentee: req.user.id },
      ],
    });

    if (existing) {
      return res.status(400).json({ message: "Connection already exists or is pending." });
    }

    let mentorId;
    let menteeId;

    if (targetRole === "mentor") {
      mentorId = targetUserId;
      menteeId = req.user.id;
    } else {
      mentorId = req.user.id;
      menteeId = targetUserId;
    }

    const connection = await Connection.create({
      mentor: mentorId,
      mentee: menteeId,
      requestedBy: req.user.id,
    });

    await createNotification({
      user: targetUserId,
      type: "connection_request",
      title: "New mentorship request",
      body: `${req.user.name} sent you a mentorship connection request.`,
      link: "/dashboard",
      metadata: { connectionId: connection._id },
    });

    res.status(201).json({ message: "Connection requested", connection });
  } catch (err) {
    console.error("Request Connection Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getMyConnections = async (req, res) => {
  try {
    const allConnections = await Connection.find({
      $or: [{ mentor: req.user.id }, { mentee: req.user.id }],
    })
      .populate("mentor", "name email username roles")
      .populate("mentee", "name email username roles")
      .populate("requestedBy", "name email username")
      .sort({ updatedAt: -1 });

    const acceptedConnections = allConnections.filter((connection) => connection.status === "accepted");
    const incomingRequests = allConnections.filter(
      (connection) =>
        connection.status === "pending" && connection.requestedBy?._id?.toString() !== req.user.id
    );
    const outgoingRequests = allConnections.filter(
      (connection) =>
        connection.status === "pending" && connection.requestedBy?._id?.toString() === req.user.id
    );

    res.status(200).json({
      allConnections,
      acceptedConnections,
      incomingRequests,
      outgoingRequests,
    });
  } catch (error) {
    console.error("Get Connections Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateConnectionStatus = async (req, res) => {
  try {
    const { connectionId, status } = req.body;
    if (!["accepted", "declined"].includes(status)) {
      return res.status(400).json({ message: "Invalid connection status." });
    }

    const connection = await Connection.findById(connectionId)
      .populate("mentor", "name email username")
      .populate("mentee", "name email username");

    if (!connection) {
      return res.status(404).json({ message: "Connection not found" });
    }

    const currentUserId = req.user.id;
    const isRecipient =
      (connection.mentor._id.toString() === currentUserId ||
        connection.mentee._id.toString() === currentUserId) &&
      connection.requestedBy._id.toString() !== currentUserId;

    if (!isRecipient) {
      return res.status(403).json({ message: "You cannot update this request." });
    }

    connection.status = status;
    await connection.save();

    const otherUserId =
      connection.mentor._id.toString() === currentUserId ? connection.mentee._id : connection.mentor._id;

    await createNotification({
      user: otherUserId,
      type: "connection_update",
      title: `Mentorship request ${status}`,
      body: `${req.user.name} ${status} your mentorship request.`,
      link: "/dashboard",
      metadata: { connectionId: connection._id, status },
    });

    res.status(200).json(connection);
  } catch (err) {
    console.error("Update Connection Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
