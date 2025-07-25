import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const dummyMentors = [
  { id: 1, name: "Anjali Sharma", year: "3rd Year", expertise: "Web Development", image: "/avatars/mentor1.png" },
  { id: 2, name: "Rahul Verma", year: "4th Year", expertise: "Machine Learning", image: "/avatars/mentor2.png" },
  { id: 3, name: "Neha Gupta", year: "Final Year", expertise: "UI/UX Design", image: "/avatars/mentor3.png" },
];

const dummyMentees = [
  { id: 1, name: "Amit Singh", branch: "CSE", interests: "Backend Dev", image: "/avatars/mentee1.png" },
  { id: 2, name: "Pooja Patel", branch: "ECE", interests: "Competitive Programming", image: "/avatars/mentee2.png" },
  { id: 3, name: "Karan Mehta", branch: "IT", interests: "AI/ML", image: "/avatars/mentee3.png" },
];

const Matching = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
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
          setTimeout(() => setLoading(false), 3000); // simulate matching
        } else {
          navigate("/");
        }
      } catch (err) {
        console.error(err);
        navigate("/");
      }
    };

    getUser();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <img src="/spinner.gif" alt="Loading..." className="w-72 h-72 mb-4" />
        <p className="text-xl font-medium text-gray-600">Matching...</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Mentor-Mentee Matching
      </h1>

      <div className="mb-4 text-center text-gray-500">
        Matching simulation powered by <strong>Campus Matrix</strong> ⚡
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {user?.role === "mentee"
          ? dummyMentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                />
                <h2 className="text-xl font-semibold text-center">{mentor.name}</h2>
                <p className="text-center text-gray-600">{mentor.year}</p>
                <p className="text-center text-blue-600 font-medium">
                  {mentor.expertise}
                </p>
                <button
                  className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                  onClick={() => toast.success("Mentor request sent!")}
                >
                  Request Mentor
                </button>
              </div>
            ))
          : dummyMentees.map((mentee) => (
              <div
                key={mentee.id}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={mentee.image}
                  alt={mentee.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                />
                <h2 className="text-xl font-semibold text-center">{mentee.name}</h2>
                <p className="text-center text-gray-600">{mentee.branch}</p>
                <p className="text-center text-purple-600 font-medium">
                  {mentee.interests}
                </p>
                <button
                  className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                  onClick={() => toast.info("Profile viewed")}
                >
                  View Profile
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Matching;
