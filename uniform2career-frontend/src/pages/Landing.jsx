import React from "react"
import StoryCard from "../components/StoryCard"
import FeatureCard from "../components/FeatureCard"
import ReviewCard from "../components/ReviewCard"
import "../styles/landing.css"

export default function Landing() {
  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <h1>Uniform2Career</h1>
        <p className="tagline">
          Your Service, Our Pride – Building Careers Beyond Uniform
        </p>
      </section>

      {/* Stories Section */}
      <section className="stories">
        <h2>
          <i
            className="fas fa-route"
            style={{ marginRight: "10px", color: "#1e3a8a" }}
          ></i>
          Inspiring Journeys
        </h2>
        <div className="story-grid">
          <StoryCard
            icon="📡"
            title="Signal Corps → Telecom Specialist"
            journey="From battlefield communication to leading telecom projects in the civilian world."
          />
          <StoryCard
            icon="📦"
            title="Logistics Officer → Operations Manager"
            journey="Transitioned military precision into managing large-scale supply chains."
          />
          <StoryCard
            icon="🏗️"
            title="Engineer → Project Consultant"
            journey="Applied problem-solving skills from service to drive successful IT implementations."
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <h2>Why Choose Uniform2Career?</h2>
        <div className="feature-grid">
          <FeatureCard
            icon="⚡"
            text="AI-driven job matching tailored for Ex-Servicemen"
          />
          <FeatureCard
            icon="📄"
            text="Automatic CV generation aligned with job roles"
          />
          <FeatureCard
            icon="🔍"
            text="Personalized career guidance and insights"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How This Works</h2>
        <div className="steps-flow">
          <div className="step">
            <div className="circle">1</div>
            <h3>Register</h3>
            <p>Create your profile with military background and preferences</p>
          </div>
          <span className="arrow">→</span>
          <div className="step">
            <div className="circle">2</div>
            <h3>AI Finds Jobs</h3>
            <p>Our AI analyzes your skills and matches suitable positions</p>
          </div>
          <span className="arrow">→</span>
          <div className="step">
            <div className="circle">3</div>
            <h3>Download CV & Apply</h3>
            <p>Generate resume and apply with one click</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews">
        <h2>
          <i
            className="fas fa-comments"
            style={{ marginRight: "10px", color: "#1e3a8a" }}
          ></i>
          What Our Users Say
        </h2>
        <div className="review-grid">
          <ReviewCard
            icon="👨‍✈️"
            name="Rajesh (Ex-Army)"
            review="Uniform2Career made my transition seamless. Got my first civilian job within a month!"
          />
          <ReviewCard
            icon="⚓"
            name="Anita (Ex-Navy)"
            review="The AI CV builder saved me hours. Recruiters loved the format!"
          />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links">
        <h2>Quick Links</h2>
        <div className="links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </section>
    </div>
  )
}
