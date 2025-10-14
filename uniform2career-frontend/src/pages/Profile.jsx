import React, { useState } from "react";
import "../styles/auth.css"; // reuse same white-box style

export default function Profile() {
  const [profile, setProfile] = useState({
    fullName: "",
    rank: "",
    serviceYears: "",
    regiment: "",
    skills: "",
    education: "",
    preferences: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(profile));
    alert("✅ Profile saved successfully!");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Complete Your Profile</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={profile.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="rank"
            placeholder="Last Held Rank"
            value={profile.rank}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="serviceYears"
            placeholder="Years of Service"
            value={profile.serviceYears}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="regiment"
            placeholder="Regiment/Branch"
            value={profile.regiment}
            onChange={handleChange}
          />
          <textarea
            name="skills"
            placeholder="Key Skills (comma separated)"
            value={profile.skills}
            onChange={handleChange}
            rows="3"
          />
          <textarea
            name="education"
            placeholder="Education & Certifications"
            value={profile.education}
            onChange={handleChange}
            rows="3"
          />
          <textarea
            name="preferences"
            placeholder="Job Preferences (location, sector, salary)"
            value={profile.preferences}
            onChange={handleChange}
            rows="3"
          />
          <button type="submit">Save Profile</button>
        </form>
      </div>
    </div>
  );
}
