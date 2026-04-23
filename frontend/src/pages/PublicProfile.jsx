import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link as LinkIcon, MessageSquare, UserPlus, UserRoundCheck } from "lucide-react";
import { toast } from "react-toastify";

const PublicProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`/api/profile/user/${username}`, { withCredentials: true });
      if (res.data.isOwnProfile) {
        navigate("/profile");
        return;
      }
      setData(res.data);
    } catch (err) {
      toast.error("Failed to load profile.");
      navigate("/connect");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [username]);

  const toggleFollow = async () => {
    if (!data) return;
    try {
      if (data.isFollowing) {
        await axios.delete(`/api/connect/follow/${data.user._id}`, { withCredentials: true });
      } else {
        await axios.post("/api/connect/follow", { userId: data.user._id }, { withCredentials: true });
      }

      setData((prev) => ({
        ...prev,
        isFollowing: !prev.isFollowing,
        followersCount: prev.followersCount + (prev.isFollowing ? -1 : 1),
      }));
    } catch (err) {
      toast.error("Failed to update follow state.");
    }
  };

  const startChat = async () => {
    try {
      await axios.post("/api/chat", { identifier: data.user.username }, { withCredentials: true });
      toast.success("Message request sent.");
      navigate("/messages");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to start chat.");
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-indigo-600" />
      </div>
    );
  }

  if (!data) return null;

  const { user, profile } = data;

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div
            className={`h-36 w-full ${!profile?.coverImage ? "bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-500" : ""}`}
            style={profile?.coverImage ? { backgroundImage: `url(${profile.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
          />

          <div className="flex flex-col gap-6 px-6 pb-8 md:flex-row md:items-start md:px-10">
            <div className="-mt-12 h-32 w-32 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-md">
              <img
                src={profile?.profileImage || "/avatar.png"}
                alt={user.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex-1 pt-2">
              <h1 className="text-3xl font-extrabold text-slate-800">{user.name}</h1>
              <p className="mt-1 text-sm font-medium text-slate-500">
                @{user.username} • {profile?.department || "Department not set"} • Year {user.year}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                {profile?.bio || "No bio added yet."}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {(profile?.skills || []).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 md:w-52">
              <button
                onClick={toggleFollow}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  data.isFollowing
                    ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  {data.isFollowing ? <UserRoundCheck size={16} /> : <UserPlus size={16} />}
                  {data.isFollowing ? "Following" : "Follow"}
                </span>
              </button>
              <button
                onClick={startChat}
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-indigo-300 hover:text-indigo-600"
              >
                <span className="inline-flex items-center gap-2">
                  <MessageSquare size={16} />
                  Send Message
                </span>
              </button>
              {profile?.linkedin && (
                <a
                  href={`https://linkedin.com/in/${profile.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-indigo-300 hover:text-indigo-600"
                >
                  <span className="inline-flex items-center gap-2">
                    <LinkIcon size={16} />
                    LinkedIn
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Points</p>
            <p className="mt-2 text-3xl font-bold text-indigo-600">{profile?.totalDynamicScore || profile?.gamificationPoints || 0}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Streak</p>
            <p className="mt-2 text-3xl font-bold text-amber-600">{profile?.combinedStreak || 0}d</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Followers</p>
            <p className="mt-2 text-3xl font-bold text-slate-800">{data.followersCount}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Following</p>
            <p className="mt-2 text-3xl font-bold text-slate-800">{data.followingCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;
