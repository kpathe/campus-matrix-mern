import { GoogleGenAI } from "@google/genai";
import User from "../models/User.js";
import Profile from "../models/Profile.js";
import Connection from "../models/Connection.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const getPotentialMatches = async (req, res) => {
  try {
    const { targetRole } = req.query; // targetRole = "mentor" or "mentee"
    
    const myProfile = await Profile.findOne({ user: req.user.id });
    if (!myProfile) return res.status(400).json({ message: "You need to create a profile first." });

    const potentialUsers = await User.find({ roles: targetRole, _id: { $ne: req.user.id } });
    if (!potentialUsers.length) return res.status(200).json([]);

    const userIds = potentialUsers.map(u => u._id);
    let theirProfiles = await Profile.find({ user: { $in: userIds } }).populate("user", "-password");

    // Strictly filter by gender
    theirProfiles = theirProfiles.filter(p => p.gender === myProfile.gender);

    const activeConnections = await Connection.find({
      $or: [
        { mentor: req.user.id },
        { mentee: req.user.id }
      ]
    });
    const connectedIds = activeConnections.map(c => 
      c.mentor.toString() === req.user.id ? c.mentee.toString() : c.mentor.toString()
    );

    theirProfiles = theirProfiles.filter(p => p.user && !connectedIds.includes(p.user._id.toString()));

    if (!theirProfiles.length) return res.status(200).json([]);

    const myData = {
      department: myProfile.department,
      skills: myProfile.skills,
      interests: myProfile.interests,
      bio: myProfile.bio
    };

    const candidates = theirProfiles.map(p => ({
      id: p._id.toString(),
      department: p.department,
      skills: p.skills,
      interests: p.interests,
      bio: p.bio
    }));

    const prompt = `
      I am a user looking for a ${targetRole}. My profile is:
      ${JSON.stringify(myData)}

      Here is a list of candidate profiles:
      ${JSON.stringify(candidates)}

      Evaluate the compatibility between me and each candidate. Return a JSON array of objects. 
      Each object should have:
      - "id": the candidate's id
      - "score": an integer from 0 to 100 representing compatibility
      - "matchReason": a short 1-sentence reason why this is a good match based on shared skills/interests.

      Respond ONLY with the raw JSON array. Do not include markdown blocks like \`\`\`json.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    let resultText = response.text;
    resultText = resultText.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();

    const aiMatches = JSON.parse(resultText);

    const matchScores = aiMatches.map(matchObj => {
      const profile = theirProfiles.find(p => p._id.toString() === matchObj.id);
      return {
        profile,
        score: matchObj.score,
        matchReason: matchObj.matchReason
      };
    }).filter(m => m.profile).sort((a, b) => b.score - a.score);

    res.status(200).json(matchScores);
  } catch (err) {
    console.error("Matchmaking error:", err);
    res.status(500).json({ message: "Error fetching matches from AI." });
  }
};

export const requestConnection = async (req, res) => {
  try {
    const { targetUserId, targetRole } = req.body;
    
    const existing = await Connection.findOne({
      $or: [
        { mentor: req.user.id, mentee: targetUserId },
        { mentor: targetUserId, mentee: req.user.id }
      ]
    });

    if (existing) return res.status(400).json({ message: "Connection already exists or is pending." });

    let mentorId, menteeId;
    if (targetRole === "mentor") {
       mentorId = targetUserId;
       menteeId = req.user.id;
    } else {
       mentorId = req.user.id;
       menteeId = targetUserId;
    }

    const conn = await Connection.create({ mentor: mentorId, mentee: menteeId });
    res.status(201).json({ message: "Connection requested", conn });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getMyConnections = async (req, res) => {
   try {
     const connections = await Connection.find({
        $or: [{ mentor: req.user.id }, { mentee: req.user.id }]
     }).populate("mentor", "name email").populate("mentee", "name email");
     res.status(200).json(connections);
   } catch (error) {
     res.status(500).json({ message: "Server error" });
   }
};

export const updateConnectionStatus = async (req, res) => {
    try {
      const { connectionId, status } = req.body;
      const conn = await Connection.findById(connectionId);
      if(!conn) return res.status(404).json({ message: "Connection not found" });

      conn.status = status;
      await conn.save();

      res.status(200).json(conn);
    } catch (err) {
      res.status(500).json({ message: "Server error" })
    }
}
