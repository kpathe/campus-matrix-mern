import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/button';

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'mentee',
    year: '1'
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        credentials: 'include'
      });

      if (res.ok) navigate('/auth/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">Join Campus Matrix</h2>
        <p className="text-lg text-center mb-6">Create your account</p>

        <input
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Full Name"
          className="w-full p-3 border rounded mb-3"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="w-full p-3 border rounded mb-3"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
          className="w-full p-3 border rounded mb-3"
          required
        />

        <select
          name="year"
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
          className="w-full p-3 border rounded mb-3"
          required
        >
          <option value="1">First Year</option>
          <option value="2">Second Year</option>
          <option value="3">Third Year</option>
          <option value="4">Fourth Year</option>
        </select>

        <select
          name="role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full p-3 border rounded mb-4"
          required
        >
          {parseInt(form.year) < 4 && <option value="mentee">Mentee</option>}
          {parseInt(form.year) >= 2 && <option value="mentor">Mentor</option>}
        </select>

        <Button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700"
        >
          Sign Up
        </Button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/auth/login")}
          >
            Log In
          </span>
        </p>
      </form>
    </div>
  );
}
