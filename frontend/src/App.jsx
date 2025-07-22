import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Static UI components
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

// Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard"; // you should create this

function App() {
  const [user, setUser] = useState(null);
  const [checkedAuth, setCheckedAuth] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      } finally {
        setCheckedAuth(true);
      }
    };
    fetchUser();
  }, []);

  if (!checkedAuth) return null; // Avoid flicker while checking auth

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/dashboard" />
            ) : (
              <>
                <Landing />
                <Features />
                <Testimonials />
                <Footer />
              </>
            )
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
