import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          navigate("/");
        }
      } catch (err) {
        navigate("/");
      }
    };

    getUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  if (!user.hasProfile) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold">Welcome, {user.name}!</h2>
        <p>Please complete your profile to get started.</p>
        <button
          onClick={() => navigate("/create-profile")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        >
          Create Profile
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Hello, {user.name}! Here's your dashboard content.</p>
      {/* Add dashboard features like mentor/mentee list, goals, etc. */}
    </div>
  );
};

export default Dashboard;
