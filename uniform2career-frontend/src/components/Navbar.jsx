import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getLoggedUser, logoutUser } from "../utils/auth"; 
import "../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const user = getLoggedUser();

  const handleLogout = () => {
    logoutUser();
    alert("✅ You have logged out successfully!");
    navigate("/"); // go back to Landing page after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Brand / Logo */}
        <div className="brand">
          <Link to="/">Uniform2Career</Link>
        </div>

        <div className="nav-spacer"></div>

        {/* Nav links */}
        <div className="nav-links">
          {!user ? (
            // If NOT logged in → show Register & Login
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          ) : (
            // If logged in → show dashboard features
            <>
              <span style={{ marginRight: "10px" }}>
                Hi, {user.name}
              </span>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/jobs">Jobs</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/tracker">Tracker</Link>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
