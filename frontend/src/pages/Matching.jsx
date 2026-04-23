import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Matching = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [matches, setMatches] = useState([]);
  const [connections, setConnections] = useState({
    acceptedConnections: [],
    incomingRequests: [],
    outgoingRequests: [],
  });
  const [activeTab, setActiveTab] = useState("");

  const fetchConnections = async () => {
    try {
      const res = await axios.get("/api/matches/my-connections", { withCredentials: true });
      setConnections(res.data);
    } catch (err) {
      toast.error("Failed to load connection requests.");
    }
  };

  const fetchMatches = async (targetRole) => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/matches/potential?targetRole=${targetRole}`, {
        withCredentials: true,
      });
      setMatches(res.data);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to load matches");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/api/auth/me", { withCredentials: true });
        setUser(res.data);
        const defaultTab = res.data.roles.includes("mentee") ? "mentor" : "mentee";
        setActiveTab(defaultTab);
        fetchMatches(defaultTab);
        fetchConnections();
      } catch (err) {
        toast.error("Failed to load matching context.");
      }
    };

    getUser();
  }, []);

  const requestConnection = async (targetUserId) => {
    try {
      await axios.post(
        "/api/matches/request",
        { targetUserId, targetRole: activeTab },
        { withCredentials: true }
      );
      toast.success("Request sent successfully!");
      setMatches((prev) => prev.filter((match) => match.profile.user._id !== targetUserId));
      fetchConnections();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send request");
    }
  };

  const updateConnectionStatus = async (connectionId, status) => {
    try {
      await axios.put(
        "/api/matches/status",
        { connectionId, status },
        { withCredentials: true }
      );
      toast.success(`Request ${status}.`);
      fetchConnections();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update request.");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Mentor-Mentee Matching</h1>
        <p className="text-slate-500">
          Discover strong matches, track pending requests, and support both mentor and mentee journeys.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-8">
        <div className="space-y-6">
          <div className="flex justify-center space-x-4">
            {user?.roles?.includes("mentee") && (
              <button className={`px-4 py-2 rounded-lg font-medium transition ${activeTab === "mentor" ? "bg-indigo-600 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`} onClick={() => { setActiveTab("mentor"); fetchMatches("mentor"); }}>
                Find a Mentor
              </button>
            )}
            {user?.roles?.includes("mentor") && (
              <button className={`px-4 py-2 rounded-lg font-medium transition ${activeTab === "mentee" ? "bg-indigo-600 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`} onClick={() => { setActiveTab("mentee"); fetchMatches("mentee"); }}>
                Find a Mentee
              </button>
            )}
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center min-h-[40vh]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600 border-solid mb-4" />
              <p className="text-xl font-medium text-gray-600">Calculating Compatibility...</p>
            </div>
          ) : matches.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              No matches found right now. Check back later or complete more fields in your profile!
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {matches.map((matchData) => {
                const profile = matchData.profile;
                const targetUser = profile.user;
                return (
                  <div key={profile._id} className="bg-white p-4 rounded-xl shadow-md border hover:shadow-xl transition transform hover:-translate-y-1">
                    <img src={targetUser?.image || "/avatar.png"} alt={targetUser?.name} className="w-20 h-20 mx-auto rounded-full mb-4 object-cover border-2 border-indigo-100" />
                    <h2 className="text-xl font-semibold text-center text-gray-800">{targetUser?.name}</h2>
                    <p className="text-center text-gray-500 text-sm mb-1">@{targetUser?.username}</p>
                    <p className="text-center text-gray-500 text-sm mb-2">{profile.department}</p>
                    <div className="bg-indigo-50 text-indigo-700 text-xs font-bold text-center py-1 rounded mb-3">
                      Match Score: {matchData.score}
                    </div>
                    <p className="text-xs text-slate-500 mb-4 text-center">{matchData.matchReason}</p>
                    <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition" onClick={() => requestConnection(targetUser._id)}>
                      Send Request
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <aside className="space-y-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">Incoming Requests</h3>
            {connections.incomingRequests?.length ? (
              <div className="space-y-3">
                {connections.incomingRequests.map((connection) => {
                  const requester =
                    connection.mentor?._id === user?._id || connection.mentor?._id === user?._id?.toString()
                      ? connection.mentee
                      : connection.mentor;

                  return (
                    <div key={connection._id} className="border border-slate-200 rounded-xl p-3">
                      <p className="font-medium text-slate-800">{requester?.name}</p>
                      <p className="text-xs text-slate-500">@{requester?.username}</p>
                      <div className="flex gap-2 mt-3">
                        <button onClick={() => updateConnectionStatus(connection._id, "accepted")} className="flex-1 bg-emerald-600 text-white rounded-lg py-2 text-sm font-semibold hover:bg-emerald-700">
                          Accept
                        </button>
                        <button onClick={() => updateConnectionStatus(connection._id, "declined")} className="flex-1 bg-red-50 text-red-600 rounded-lg py-2 text-sm font-semibold hover:bg-red-100">
                          Decline
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-slate-500">No incoming requests.</p>
            )}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">Outgoing Requests</h3>
            {connections.outgoingRequests?.length ? (
              <div className="space-y-3">
                {connections.outgoingRequests.map((connection) => {
                  const target =
                    connection.mentor?._id === user?._id || connection.mentor?._id === user?._id?.toString()
                      ? connection.mentee
                      : connection.mentor;

                  return (
                    <div key={connection._id} className="border border-slate-200 rounded-xl p-3">
                      <p className="font-medium text-slate-800">{target?.name}</p>
                      <p className="text-xs text-slate-500">@{target?.username}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-slate-500">No pending outgoing requests.</p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Matching;
