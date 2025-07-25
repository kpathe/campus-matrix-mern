// frontend/src/pages/Goals.jsx
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const fetchGoals = async () => {
    try {
      const res = await fetch("/api/goals", {
        credentials: "include",
      });
      const data = await res.json();
      setGoals(data);
    } catch (err) {
      toast.error("Failed to load goals.");
    }
  };

  const handleAddGoal = async (e) => {
    e.preventDefault(); // prevents page reload

    try {
      const res = await fetch("/api/goals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ title, description, deadline }),
      });

      if (res.ok) {
        toast.success("Goal added!");
        setTitle("");
        setDescription("");
        setDeadline("");
        fetchGoals();
      } else {
        toast.error("Failed to add goal.");
      }
    } catch (err) {
      toast.error("Server error.");
    }
  };

  const handleDeleteGoal = async (id) => {
    try {
      const res = await fetch(`/api/goals/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (res.ok) {
        toast.success("Goal deleted.");
        fetchGoals();
      }
    } catch (err) {
      toast.error("Error deleting goal.");
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      const res = await fetch(`/api/goals/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ completed: !completed }),
      });
      if (res.ok) fetchGoals();
    } catch (err) {
      toast.error("Failed to update goal.");
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🎯 Your Goals</h1>

      <div className="bg-white shadow p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-2">Add a Goal</h2>
        <form onSubmit={handleAddGoal}>
          <input
            className="border p-2 w-full mb-2"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="border p-2 w-full mb-2"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="date"
            className="border p-2 w-full mb-2"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            Add Goal
          </button>
        </form>
      </div>

      <div className="space-y-4">
        {goals.length === 0 && <p>No goals yet. Start by adding one!</p>}
        {goals.map((goal) => (
          <div
            key={goal._id}
            className={`p-4 rounded shadow ${
              goal.completed ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{goal.title}</h3>
              <button
                className="text-red-500 hover:text-red-700 cursor-pointer"
                onClick={() => handleDeleteGoal(goal._id)}
              >
                Delete Goal 🗑️
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-1">{goal.description}</p>
            {goal.deadline && (
              <p className="text-sm text-gray-500">
                Deadline: {new Date(goal.deadline).toLocaleDateString()}
              </p>
            )}
            <div className="mt-2">
              <button
                className={`px-3 py-1 rounded cursor-pointer text-sm ${
                  goal.completed
                    ? "bg-yellow-500 text-white"
                    : "bg-green-600 text-white"
                }`}
                onClick={() => toggleComplete(goal._id, goal.completed)}
              >
                {goal.completed ? "Mark as Incomplete" : "Mark as Completed"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
