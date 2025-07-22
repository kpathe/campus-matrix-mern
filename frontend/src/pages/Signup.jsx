import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  Button  from '../components/ui/button';

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

      if (res.ok) navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold">Create Account</h2>
        <input
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="year"
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
          className="w-full p-2 border rounded"
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
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        >
          {parseInt(form.year) < 4 && <option value="mentor">Mentee</option>}
          {parseInt(form.year) >= 2 && <option value="mentor">Mentor</option>}
        </select>
        <Button type="submit" className="w-full">Sign Up</Button>
      </form>
    </div>
  );
}
