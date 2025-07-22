import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Avatar from "../components/ui/avatar";
import Button from "../components/ui/button";
import DropdownMenu from "../components/ui/dropdown-menu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dummy user for now (simulate session)
  const [user, setUser] = useState(null); // Replace this with actual auth state later
  const isLoading = false;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    // Replace with actual logout logic
    setUser(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">
            Campus Matrix
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {user?.role === "mentor" && (
              <Link to="/mentees" className="text-gray-700 hover:text-blue-600">
                My Mentees
              </Link>
            )}
            {user?.role === "mentee" && (
              <Link to="/mentors" className="text-gray-700 hover:text-blue-600">
                Find Mentors
              </Link>
            )}

            <Link to="/goals" className="text-gray-700 hover:text-blue-600">
              Goals
            </Link>
            <Link to="/resources" className="text-gray-700 hover:text-blue-600">
              Resources
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600">
              Events
            </Link>

            {isLoading ? (
              <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
            ) : user ? (
              <DropdownMenu
                trigger={<Avatar src={user.image} alt={user.name} />}
                items={[
                  { label: "Profile", link: "/profile" },
                  { label: "Settings", link: "/settings" },
                  { label: "Logout", action: handleLogout, danger: true },
                ]}
              />
            ) : (
              <div className="flex space-x-4">
                <Button variant="outline">
                  <Link to="/auth/login">Login</Link>
                </Button>
                <Button>
                  <Link to="/auth/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full p-6 space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">Campus Matrix</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="h-6 w-6 text-gray-700 hover:text-blue-600" />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {user?.role === "mentor" && (
              <Link
                to="/mentees"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-gray-700 hover:text-blue-600"
              >
                My Mentees
              </Link>
            )}
            {user?.role === "mentee" && (
              <Link
                to="/mentors"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-gray-700 hover:text-blue-600"
              >
                Find Mentors
              </Link>
            )}
            <Link
              to="/goals"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-gray-700 hover:text-blue-600"
            >
              Goals
            </Link>
            <Link
              to="/resources"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-gray-700 hover:text-blue-600"
            >
              Resources
            </Link>
            <Link
              to="/events"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg text-gray-700 hover:text-blue-600"
            >
              Events
            </Link>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-200">
            {isLoading ? (
              <div className="w-full h-10 bg-gray-200 animate-pulse rounded" />
            ) : user ? (
              <div className="space-y-4">
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Avatar src={user.image} alt={user.name} size="8" />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-left text-lg text-red-600 w-full"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  <Link to="/auth/login" onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button className="w-full">
                  <Link to="/auth/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}
