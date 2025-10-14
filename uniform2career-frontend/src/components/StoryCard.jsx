import React from "react"

export default function StoryCard({ icon, title, journey }) {
  return (
    <div className="story-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{journey}</p>
    </div>
  )
}
