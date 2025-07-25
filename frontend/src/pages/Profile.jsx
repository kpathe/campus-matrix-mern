import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user info
        const userRes = await fetch("/api/auth/me", {
          credentials: "include",
        });

        if (!userRes.ok) {
          navigate("/");
          return;
        }

        const userData = await userRes.json();
        setUser(userData);

        // Fetch profile info
        const profileRes = await fetch("/api/profile/me", {
          credentials: "include",
        });

        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setProfile(profileData);
        } else {
          setProfile(null); // if no profile yet
        }

      } catch (err) {
        console.error(err);
        navigate("/");
      }
    };

    fetchData();
  }, [navigate]);

  if (!user) return <div className="p-4">Loading user info...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">👤 {user.name}'s Profile</h1>

      <div className="space-y-2 mb-6">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>

      {profile ? (
        <>
          <div className="space-y-2 mb-6">
            <p><strong>Department:</strong> {profile.department}</p>
            <p><strong>Bio:</strong> {profile.bio || "Not added"}</p>
            <p><strong>Skills:</strong> {profile.skills.join(", ") || "None"}</p>
            <p><strong>Interests:</strong> {profile.interests.join(", ") || "None"}</p>
            <p><strong>Languages:</strong> {profile.languages.join(", ") || "None"}</p>
            <p><strong>Gender:</strong> {profile.gender}</p>
            {profile.linkedin && (
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View Profile
                </a>
              </p>
            )}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">🏅 Badges & Rewards</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>🎓 Profile Completed</li>
              <li>🤝 First Mentor/Mentee Matched</li>
              <li>✅ First Goal Achieved</li>
            </ul>
          </div>
        </>
      ) : (
        <p className="text-red-500">No profile data found. Please complete your profile.</p>
      )}
    </div>
  );
};

export default Profile;
