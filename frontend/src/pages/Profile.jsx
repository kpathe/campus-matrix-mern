import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Award, Code2, Github, Link as LinkIcon, RefreshCw, Trash2, UserPen } from "lucide-react";
import axios from "axios";

const Profile = ({ setUser }) => {
  const [user, setLocalUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [handles, setHandles] = useState({
    githubUsername: "",
    leetcodeUsername: "",
    gfgUsername: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get("/api/auth/me", { withCredentials: true });
        setLocalUser(userRes.data);

        const profileRes = await axios.get("/api/profile/me", { withCredentials: true });
        setProfile(profileRes.data);
        setHandles({
          githubUsername: profileRes.data.githubUsername || "",
          leetcodeUsername: profileRes.data.leetcodeUsername || "",
          gfgUsername: profileRes.data.gfgUsername || "",
        });
      } catch (err) {
        if (err.response?.status === 404) {
          navigate("/create-profile");
        } else {
          navigate("/");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleUpdateHandles = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("/api/profile/handles", handles, { withCredentials: true });
      setProfile(res.data);
      toast.success("External profiles linked!");
    } catch (err) {
      toast.error("Failed to link accounts");
    }
  };

  const handleRefreshStats = async () => {
    if (!profile) return;
    setRefreshing(true);
    try {
      const res = await axios.post("/api/profile/refresh-stats", {}, { withCredentials: true });
      setProfile(res.data.profile);
      toast.success("Coding statistics synced!");
    } catch (err) {
      toast.error("Error syncing platform data");
    } finally {
      setRefreshing(false);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "Delete your account permanently? This will remove your profile, tasks, chats, and notifications."
    );
    if (!confirmed) return;

    try {
      await axios.delete("/api/auth/account", { withCredentials: true });
      setUser?.(null);
      toast.success("Account deleted.");
      navigate("/auth/signup");
    } catch (err) {
      toast.error("Failed to delete account.");
    }
  };

  const renderContributionGraph = () => {
    if (!profile?.contributionGraph) return null;
    const blocks = [];
    for (let i = 120; i >= 0; i -= 1) {
      const date = new Date(Date.now() - i * 86400000).toISOString().split("T")[0];
      const count = profile.contributionGraph[date] || 0;
      let colorClass = "bg-slate-100";
      if (count > 0 && count < 3) colorClass = "bg-emerald-200";
      else if (count >= 3 && count < 6) colorClass = "bg-emerald-400";
      else if (count >= 6) colorClass = "bg-emerald-600";

      blocks.push(
        <div
          key={date}
          title={`${count} contributions on ${date}`}
          className={`w-3 h-3 rounded-sm ${colorClass} hover:ring-2 hover:ring-indigo-300 transition-all cursor-pointer`}
        />
      );
    }
    return <div className="flex flex-wrap gap-1">{blocks}</div>;
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div
            className={`w-full h-32 ${!profile?.coverImage ? "bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-500" : ""}`}
            style={profile?.coverImage ? { backgroundImage: `url(${profile.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
          />

          <div className="px-6 md:px-10 pb-8 relative z-10 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-32 h-32 bg-white rounded-2xl shadow-md flex-shrink-0 border-4 border-white overflow-hidden -mt-12 z-20 relative">
              <img src={profile?.profileImage || "/avatar.png"} alt="User" className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 mt-2 md:mt-4">
              <h1 className="text-3xl font-extrabold text-slate-800">{user.name}</h1>
              <p className="text-slate-500 font-medium text-sm mt-1">
                @{user.username || "user"} • {profile?.department?.toUpperCase() || "DEPARTMENT NOT SET"} • {user?.roles?.join(", ").toUpperCase()}
              </p>
              <p className="mt-3 text-slate-600 max-w-2xl text-sm leading-relaxed">
                {profile?.bio || "This user prefers to keep an air of mystery about them."}
              </p>

              <div className="flex gap-2 mt-4 flex-wrap">
                {profile?.skills?.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium border border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex gap-2 mt-4 md:mt-6">
              {profile?.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-slate-50 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-slate-200 shadow-sm">
                  <LinkIcon size={18} />
                </a>
              )}
              <button
                onClick={() => navigate("/create-profile?mode=edit")}
                className="p-2 bg-slate-50 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors border border-slate-200 shadow-sm"
              >
                <UserPen size={18} />
              </button>
              <button
                onClick={handleDeleteAccount}
                className="p-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors border border-red-100 shadow-sm"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-slate-800">Contribution Metrics</h2>
                <button onClick={handleRefreshStats} disabled={refreshing} className="text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2">
                  <RefreshCw size={14} className={refreshing ? "animate-spin" : ""} />
                  Sync Data
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Global Score</p>
                  <p className="text-2xl font-bold text-indigo-600">{profile?.totalDynamicScore || profile?.gamificationPoints || 0}</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <p className="text-xs text-amber-600/70 font-semibold uppercase tracking-wider mb-1">Streak</p>
                  <p className="text-2xl font-bold text-amber-600">{profile?.combinedStreak || 0}d</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Badges</p>
                  <p className="text-2xl font-bold text-slate-800">{profile?.badges?.length || 0}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Unified Heatmap (Last 120 Days)</h3>
                <div className="p-4 bg-white border border-slate-100 rounded-xl max-w-full overflow-x-auto shadow-inner">
                  {renderContributionGraph()}
                  {!profile?.contributionGraph && <p className="text-sm text-slate-400 italic">No external data synced yet.</p>}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-4">
                <LinkIcon size={18} className="text-indigo-600" />
                Link Profiles
              </h2>

              <form onSubmit={handleUpdateHandles} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-600 ml-1 flex items-center gap-1">
                    <Github size={12} />
                    GitHub Username
                  </label>
                  <input value={handles.githubUsername} onChange={(e) => setHandles({ ...handles, githubUsername: e.target.value })} type="text" className="mt-1 w-full text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. torvalds" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 ml-1 flex items-center gap-1">
                    <Code2 size={12} />
                    LeetCode Username
                  </label>
                  <input value={handles.leetcodeUsername} onChange={(e) => setHandles({ ...handles, leetcodeUsername: e.target.value })} type="text" className="mt-1 w-full text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. neetcode" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 ml-1 flex items-center gap-1">
                    <Code2 size={12} />
                    GeeksForGeeks Handle
                  </label>
                  <input value={handles.gfgUsername} onChange={(e) => setHandles({ ...handles, gfgUsername: e.target.value })} type="text" className="mt-1 w-full text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. sandeepjain" />
                </div>
                <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-xl transition-colors mt-2 shadow-sm text-sm">
                  Save Integrations
                </button>
              </form>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-sky-600 rounded-3xl p-6 shadow-sm text-white">
              <h2 className="text-lg font-bold flex items-center gap-2 mb-2">
                <Award size={18} />
                Trophy Cabinet
              </h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {profile?.badges?.map((badge) => (
                  <div key={badge} className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-lg text-sm font-semibold border border-white/10">
                    {badge}
                  </div>
                ))}
                {(!profile?.badges || profile?.badges.length === 0) && (
                  <p className="text-indigo-100 text-sm">Complete mentor tasks or sync strong coding stats to unlock badges.</p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
