import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MessageSquare, Search, UserPlus, UserRoundCheck } from "lucide-react";
import { toast } from "react-toastify";

const Connect = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [followingState, setFollowingState] = useState({});

  const fetchDirectory = async (search = "") => {
    try {
      const res = await axios.get(`/api/connect${search ? `?q=${encodeURIComponent(search)}` : ""}`, {
        withCredentials: true,
      });
      setStudents(res.data);
      setFollowingState(
        Object.fromEntries(res.data.map((student) => [student._id, student.isFollowing]))
      );
    } catch (err) {
      toast.error("Failed to load student directory.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDirectory();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchDirectory(query);
    }, 250);

    return () => clearTimeout(timeout);
  }, [query]);

  const toggleFollow = async (student) => {
    const isFollowing = followingState[student._id];
    try {
      if (isFollowing) {
        await axios.delete(`/api/connect/follow/${student._id}`, { withCredentials: true });
      } else {
        await axios.post("/api/connect/follow", { userId: student._id }, { withCredentials: true });
      }

      setFollowingState((prev) => ({ ...prev, [student._id]: !isFollowing }));
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update follow state.");
    }
  };

  const startChat = async (student) => {
    try {
      await axios.post("/api/chat", { identifier: student.username }, { withCredentials: true });
      toast.success("Message request sent.");
      navigate("/messages");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to start chat.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Connect</h1>
            <p className="mt-1 text-sm text-slate-500">
              Follow batchmates and seniors, explore their profiles, and send message requests.
            </p>
          </div>
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or username"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-10">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-indigo-600" />
          </div>
        ) : students.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500">
            No students found.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {students.map((student) => (
              <div
                key={student._id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <button
                  onClick={() => navigate(`/${student.username}`)}
                  className="w-full text-left"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <img
                      src={student.profileImage || "/avatar.png"}
                      alt={student.name}
                      className="h-14 w-14 rounded-2xl object-cover border border-slate-200"
                    />
                    <div>
                      <h2 className="font-semibold text-slate-800">{student.name}</h2>
                      <p className="text-sm text-slate-500">@{student.username}</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-slate-600">
                    <p>Branch: <span className="font-medium text-slate-800">{student.department || "Not set"}</span></p>
                    <p>Year: <span className="font-medium text-slate-800">{student.year}</span></p>
                    <p>
                      Mentor:{" "}
                      <span className="font-medium text-slate-800">
                        {student.roles?.includes("mentor") ? "Yes" : "No"}
                      </span>
                    </p>
                  </div>
                </button>

                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => toggleFollow(student)}
                    className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      followingState[student._id]
                        ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                  >
                    {followingState[student._id] ? (
                      <span className="inline-flex items-center gap-2">
                        <UserRoundCheck size={16} />
                        Following
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <UserPlus size={16} />
                        Follow
                      </span>
                    )}
                  </button>
                  <button
                    onClick={() => startChat(student)}
                    className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-indigo-300 hover:text-indigo-600"
                  >
                    <span className="inline-flex items-center gap-2">
                      <MessageSquare size={16} />
                      Chat
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Connect;
