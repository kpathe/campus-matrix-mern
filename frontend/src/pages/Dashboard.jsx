import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("/api/auth/me", {
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          navigate("/");
        }
      } catch (err) {
        console.error("Error fetching user:", err);
        navigate("/");
      }
    };

    getUser();
  }, [navigate]);

  if (!user) return <div className="p-4">Loading...</div>;

  if (!user.hasProfile) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold">Welcome, {user.name}!</h2>
        <p>Please complete your profile to get started.</p>
        <button
          onClick={() => navigate("/create-profile")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create Profile
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.name}!</h1>

      {/* Section 1: Mentor-Mentee Matching */}
      <section className="border p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition">
        <h2 className="text-xl font-semibold mb-2">🔗 Mentor-Mentee Matching</h2>
        <p>Find the perfect match to grow and learn together.</p>
        <button
          onClick={() => navigate("/matching")}
          className="cursor-pointer mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          {user.role === "mentor" ? "Find Mentees" : "Find Mentor"}
        </button>
      </section>

      {/* Section 2: Goal Tracking */}
      <section className="border p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition">
        <h2 className="text-xl font-semibold mb-2">🎯 Goal Tracker</h2>
        <p>Set, view, and track your academic or personal goals.</p>
        <button
          onClick={() => navigate("/goals")}
          className="cursor-pointer mt-3 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          View Goals
        </button>
      </section>

      {/* Section 3: Messages */}
      <section className="border p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition">
        <h2 className="text-xl font-semibold mb-2">💬 Messages</h2>
        <p>Communicate with your mentor or mentee here.</p>
        <button
          onClick={() => navigate("/messages")}
          className="cursor-pointer mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Messages
        </button>
      </section>

      {/* Section 4: Profile */}
      <section className="border p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition">
        <h2 className="text-xl font-semibold mb-2">👤 Profile</h2>
        <p>View your profile, rewards, and achievements.</p>
        <button
          onClick={() => navigate("/profile")}
          className="cursor-pointer mt-3 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          View Profile
        </button>
      </section>
    </div>
  );
};

export default Dashboard;
