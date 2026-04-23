import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Code2,
  Github,
  Link as LinkIcon,
  MailWarning,
  Send,
  Trash2,
  UserPen,
  X,
} from "lucide-react";
import axios from "axios";

const Profile = ({ setUser }) => {
  const [user, setLocalUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verifyingEmail, setVerifyingEmail] = useState(false);
  const [resendingOtp, setResendingOtp] = useState(false);
  const [savingHandles, setSavingHandles] = useState(false);
  const [otp, setOtp] = useState("");
  const [handles, setHandles] = useState({
    githubUsername: "",
    leetcodeUsername: "",
    gfgUsername: "",
  });
  const navigate = useNavigate();

  const integrationItems = useMemo(
    () =>
      [
        { key: "githubUsername", label: "GitHub", icon: Github },
        { key: "leetcodeUsername", label: "LeetCode", icon: Code2 },
        { key: "gfgUsername", label: "GeeksForGeeks", icon: Code2 },
      ].filter((item) => profile?.[item.key]),
    [profile]
  );

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

  useEffect(() => {
    fetchData();
  }, [navigate]);

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    if (!user?.email || !otp.trim()) return;

    setVerifyingEmail(true);
    try {
      const res = await axios.post(
        "/api/auth/verify-email",
        { email: user.email, otp },
        { withCredentials: true }
      );

      toast.success(res.data.message || "Email verified successfully.");
      setOtp("");

      const userRes = await axios.get("/api/auth/me", { withCredentials: true });
      setLocalUser(userRes.data);
      setUser?.(userRes.data);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to verify email.");
    } finally {
      setVerifyingEmail(false);
    }
  };

  const handleResendOtp = async () => {
    if (!user?.email) return;
    setResendingOtp(true);
    try {
      const res = await axios.post(
        "/api/auth/resend-verification-otp",
        { email: user.email },
        { withCredentials: true }
      );
      toast.success(res.data.message || "OTP resent successfully.");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to resend OTP.");
    } finally {
      setResendingOtp(false);
    }
  };

  const handleUpdateHandles = async (e) => {
    e.preventDefault();
    setSavingHandles(true);
    try {
      const res = await axios.put("/api/profile/handles", handles, { withCredentials: true });
      setProfile(res.data);
      setHandles({
        githubUsername: res.data.githubUsername || "",
        leetcodeUsername: res.data.leetcodeUsername || "",
        gfgUsername: res.data.gfgUsername || "",
      });
      toast.success("Integrations saved.");
    } catch (err) {
      toast.error("Failed to save integrations");
    } finally {
      setSavingHandles(false);
    }
  };

  const removeHandle = async (key) => {
    const nextHandles = {
      githubUsername: profile?.githubUsername || "",
      leetcodeUsername: profile?.leetcodeUsername || "",
      gfgUsername: profile?.gfgUsername || "",
      [key]: "",
    };

    try {
      const res = await axios.put("/api/profile/handles", nextHandles, { withCredentials: true });
      setProfile(res.data);
      setHandles({
        githubUsername: res.data.githubUsername || "",
        leetcodeUsername: res.data.leetcodeUsername || "",
        gfgUsername: res.data.gfgUsername || "",
      });
      toast.success("Integration removed.");
    } catch (err) {
      toast.error("Failed to remove integration.");
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
                <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noreferrer" className="p-2 bg-slate-50 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-slate-200 shadow-sm">
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
            <div
              className={`rounded-3xl p-6 shadow-sm border ${
                user.isEmailVerified
                  ? "bg-emerald-50 border-emerald-200"
                  : "bg-amber-50 border-amber-200"
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                {user.isEmailVerified ? (
                  <BadgeCheck className="text-emerald-600 mt-0.5" size={22} />
                ) : (
                  <MailWarning className="text-amber-600 mt-0.5" size={22} />
                )}
                <div>
                  <h2 className="text-lg font-bold text-slate-800">Email Verification</h2>
                  <p className="text-sm text-slate-600 mt-1">
                    {user.isEmailVerified
                      ? `Your email ${user.email} is verified.`
                      : `Your email ${user.email} is not verified yet. Enter the OTP sent to your inbox to verify it.`}
                  </p>
                </div>
              </div>

              {!user.isEmailVerified && (
                <form onSubmit={handleVerifyEmail} className="space-y-3">
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 6-digit OTP"
                    maxLength={6}
                    className="w-full px-4 py-3 bg-white border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 tracking-[0.3em]"
                    required
                  />
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={verifyingEmail}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-600 text-white hover:bg-amber-700 transition-colors disabled:opacity-70"
                    >
                      <BadgeCheck size={16} />
                      {verifyingEmail ? "Verifying..." : "Verify Email"}
                    </button>
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      disabled={resendingOtp}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors disabled:opacity-70"
                    >
                      <Send size={16} />
                      {resendingOtp ? "Sending..." : "Resend OTP"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-800">Contribution Metrics</h2>
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Saved from integrations
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Points</p>
                  <p className="text-2xl font-bold text-indigo-600">{profile?.totalDynamicScore || profile?.gamificationPoints || 0}</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <p className="text-xs text-amber-600/70 font-semibold uppercase tracking-wider mb-1">Cumulative Streak</p>
                  <p className="text-2xl font-bold text-amber-600">{profile?.combinedStreak || 0}d</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Branch</p>
                  <p className="text-2xl font-bold text-slate-800">{profile?.department || "-"}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Contribution Heatmap</h3>
                <div className="p-4 bg-white border border-slate-100 rounded-xl max-w-full overflow-x-auto shadow-inner">
                  {profile?.contributionGraph ? (
                    <div className="flex flex-wrap gap-1">
                      {Array.from({ length: 121 }).map((_, index) => {
                        const date = new Date(Date.now() - (120 - index) * 86400000)
                          .toISOString()
                          .split("T")[0];
                        const count = profile?.contributionGraph?.[date] || 0;
                        let colorClass = "bg-slate-100";
                        if (count > 0 && count < 3) colorClass = "bg-emerald-200";
                        else if (count >= 3 && count < 6) colorClass = "bg-emerald-400";
                        else if (count >= 6) colorClass = "bg-emerald-600";
                        return <div key={date} className={`h-3 w-3 rounded-sm ${colorClass}`} title={`${count} contributions on ${date}`} />;
                      })}
                    </div>
                  ) : (
                    <p className="text-sm text-slate-400 italic">Add coding handles once to populate your heatmap.</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-4">
                <LinkIcon size={18} className="text-indigo-600" />
                Coding Integrations
              </h2>

              {integrationItems.length === 0 ? (
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
                  <button type="submit" disabled={savingHandles} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-xl transition-colors mt-2 shadow-sm text-sm disabled:opacity-70">
                    {savingHandles ? "Saving..." : "Save Integrations"}
                  </button>
                </form>
              ) : (
                <div className="space-y-3">
                  {integrationItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.key} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Icon size={16} className="text-slate-500" />
                          <div>
                            <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                            <p className="text-xs text-slate-500">{profile?.[item.key]}</p>
                          </div>
                        </div>
                        <button onClick={() => removeHandle(item.key)} className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600">
                          <X size={16} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
