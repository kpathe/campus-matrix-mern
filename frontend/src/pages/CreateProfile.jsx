import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { UploadCloud } from "lucide-react";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    department: "",
    bio: "",
    skills: "",
    interests: "",
    languages: "",
    gender: "",
    linkedin: "",
  });

  const [profileImageFile, setProfileImageFile] = useState(null);
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileUpload = async (file) => {
    const data = new FormData();
    data.append("image", file);
    const res = await axios.post("/api/upload", data, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" }
    });
    return res.data.imageUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      let profileImageUrl = "";
      let coverImageUrl = "";

      if (profileImageFile) {
         profileImageUrl = await handleFileUpload(profileImageFile);
      }
      if (coverImageFile) {
         coverImageUrl = await handleFileUpload(coverImageFile);
      }

      const res = await axios.post(
        "/api/profile/create-profile",
        {
          ...formData,
          profileImage: profileImageUrl,
          coverImage: coverImageUrl,
          skills: formData.skills.split(",").map((s) => s.trim()),
          interests: formData.interests.split(",").map((i) => i.trim()),
          languages: formData.languages.split(",").map((l) => l.trim()),
        },
        { withCredentials: true }
      );

      if (res.status === 200 || res.status === 201) {
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Profile creation failed:", err);
      alert("Failed to create profile. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-center px-4 py-12">
      <motion.form
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200"
      >
        <div className="mb-8 border-b border-slate-100 pb-6">
           <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">Profile Setup</h2>
           <p className="text-slate-500 mt-2 text-sm">Tell us about yourself to tailor your matchmaking experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Cover Image</label>
            <div className="border border-dashed border-slate-300 rounded-xl p-4 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors">
               <UploadCloud className="text-slate-400 mb-2" size={24} />
               <input
                 type="file"
                 accept="image/*"
                 onChange={(e) => setCoverImageFile(e.target.files[0])}
                 className="text-sm text-slate-600 w-full ml-12"
               />
               {coverImageFile && <p className="text-xs text-indigo-600 mt-2 font-medium">Selected: {coverImageFile.name}</p>}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Profile Avatar</label>
            <div className="border border-dashed border-slate-300 rounded-xl p-4 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors">
               <UploadCloud className="text-slate-400 mb-2" size={24} />
               <input
                 type="file"
                 accept="image/*"
                 onChange={(e) => setProfileImageFile(e.target.files[0])}
                 className="text-sm text-slate-600 w-full ml-12"
               />
               {profileImageFile && <p className="text-xs text-indigo-600 mt-2 font-medium">Selected: {profileImageFile.name}</p>}
            </div>
          </div>

          <div className="flex flex-col">
             <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Department *</label>
             <input
               type="text" name="department" value={formData.department} onChange={handleChange} required
               className="border border-slate-200 p-3 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all text-sm"
               placeholder="Computer Science"
             />
          </div>

          <div className="flex flex-col">
             <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Gender *</label>
             <select
               name="gender" value={formData.gender} onChange={handleChange} required
               className="border border-slate-200 p-3 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all text-sm"
             >
               <option value="">Select Gender</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Other">Other</option>
             </select>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col">
             <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Bio</label>
             <textarea
               name="bio" value={formData.bio} onChange={handleChange} rows="3"
               className="border border-slate-200 p-3 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all text-sm resize-none"
               placeholder="A brief description of yourself."
             />
          </div>

          <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="flex flex-col">
               <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Skills</label>
               <input
                 type="text" name="skills" value={formData.skills} onChange={handleChange}
                 className="border border-slate-200 p-3 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all text-sm"
                 placeholder="React, Node, Python"
               />
             </div>
             <div className="flex flex-col">
               <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Interests</label>
               <input
                 type="text" name="interests" value={formData.interests} onChange={handleChange}
                 className="border border-slate-200 p-3 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all text-sm"
                 placeholder="AI, Web3, Reading"
               />
             </div>
             <div className="flex flex-col">
               <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Languages</label>
               <input
                 type="text" name="languages" value={formData.languages} onChange={handleChange}
                 className="border border-slate-200 p-3 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all text-sm"
                 placeholder="English, Spanish"
               />
             </div>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col">
             <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">LinkedIn URL</label>
             <input
               type="url" name="linkedin" value={formData.linkedin} onChange={handleChange}
               className="border border-slate-200 p-3 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-800 transition-all text-sm"
               placeholder="https://linkedin.com/in/username"
             />
          </div>
        </div>

        <button
          type="submit"
          disabled={uploading}
          className="mt-8 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {uploading ? "Uploading Images & Saving..." : "Save Profile"}
        </button>
      </motion.form>
    </div>
  );
};

export default CreateProfile;
