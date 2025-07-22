import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/button';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        credentials: 'include'
      });

      const data = await res.json();
      if (!res.ok) return setError(data.message || 'Login failed');
      navigate('/dashboard');
    } catch (err) {
      setError('Something went wrong. Try again.',err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">Campus Matrix</h2>
        <p className="text-lg text-center mb-6">Log in to your account</p>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email address"
          className="w-full p-3 border rounded mb-3"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
          className="w-full p-3 border rounded mb-4"
          required
        />
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700"
        >
          Log In
        </Button>
        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/auth/signup")}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}
