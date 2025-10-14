import React from "react"

export default function ReviewCard({ icon, name, review }) {
  return (
    <div className="review-card">
      <div className="feature-icon">{icon}</div>
      <p>"{review}"</p>
      <span>- {name}</span>
    </div>
  )
}
