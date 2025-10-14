import React from "react";

export default function FeatureCard({ icon, text }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <p>{text}</p>
    </div>
  );
}
