import React, { useState, useRef, useEffect } from "react";
import "../styles/dashboard.css";
import Footer from "../components/Footer";   // ✅ new footer component

const tabIcons = {
  registrations: "📄",
  watchlist: "⭐",
  viewed: "👁️",
  rounds: "🎯",
};

export default function Dashboard() {
  const username = "Reshma Chowdary Kommi";
  const [activeTab, setActiveTab] = useState("registrations");

  const activityRef = useRef(null);
  const jobsRef = useRef(null);

  const [showActivityArrows, setShowActivityArrows] = useState(false);
  const [showJobArrows, setShowJobArrows] = useState(false);

  // decide when to show arrows
  const checkScroll = () => {
    if (activityRef.current) {
      const el = activityRef.current;
      setShowActivityArrows(el.scrollWidth > el.clientWidth + 5);
    }
    if (jobsRef.current) {
      const el = jobsRef.current;
      setShowJobArrows(el.scrollWidth > el.clientWidth + 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [activeTab]);

  const scrollActivities = (dir) => {
    const el = activityRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -el.offsetWidth : el.offsetWidth, behavior: "smooth" });
  };

  const scrollJobs = (dir) => {
    const el = jobsRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -el.offsetWidth : el.offsetWidth, behavior: "smooth" });
  };

  // job list used for both sections
  const allJobs = [
    { title: "Government Security Officer", company: "Ministry of Home Affairs", location: "Delhi", salary: "6 – 8 LPA", type: "In Office" },
    { title: "Traffic Management Supervisor", company: "Hyderabad Metro Rail", location: "Hyderabad", salary: "5 – 6 LPA", type: "In Office" },
    { title: "Corporate Security Manager", company: "Tata Steel", location: "Jamshedpur", salary: "7 – 9 LPA", type: "In Office" },
    { title: "Disaster Response Coordinator", company: "NDMA", location: "Pan India", salary: "6 – 8 LPA", type: "In Office" },
    { title: "Facilities Operations Head", company: "Infosys Campus Ops", location: "Bengaluru", salary: "5 – 7 LPA", type: "In Office" },
    { title: "Fire & Safety Officer", company: "Indian Oil Corporation", location: "Pan India", salary: "5 – 6 LPA", type: "In Office" },
    { title: "Satellite Operations Specialist", company: "ISRO", location: "Bengaluru", salary: "7 – 10 LPA", type: "In Office" },
    { title: "Interview Scheduled", company: "Bharat Electronics Limited", location: "Hyderabad", salary: "6 – 8 LPA", type: "In Office" },
  ];

  // extra registrations to force scroll arrows
  const activityData = {
    registrations: [
      { icon: "🏛️", title: "Applied for Government Security Officer", company: "Ministry of Home Affairs" },
      { icon: "🚦", title: "Applied for Traffic Management Supervisor", company: "Hyderabad Metro Rail" },
      { icon: "🛡️", title: "Applied for Corporate Security Manager", company: "Tata Steel" },
      { icon: "⚡", title: "Applied for Disaster Response Coordinator", company: "NDMA" },
      { icon: "🏢", title: "Applied for Facilities Operations Head", company: "Infosys Campus Ops" },
      { icon: "🚒", title: "Applied for Fire & Safety Officer", company: "Indian Oil Corporation" },
      { icon: "🛰️", title: "Applied for Satellite Operations Specialist", company: "ISRO" },
      { icon: "📞", title: "Applied for Interview Scheduled Role", company: "Bharat Electronics Limited" },
    ],
    watchlist: [
      { icon: "🎯", title: "Disaster Response Coordinator", company: "National Disaster Management Authority" },
      { icon: "🏢", title: "Facilities Operations Head", company: "Infosys Campus Operations" },
    ],
    viewed: [
      { icon: "🚒", title: "Fire & Safety Officer", company: "Indian Oil Corporation" },
      { icon: "🛰️", title: "Satellite Operations Specialist", company: "ISRO" },
    ],
    rounds: [
      { icon: "📞", title: "Interview Scheduled", company: "Bharat Electronics Limited" },
    ],
  };

  const tabs = [
    { key: "registrations", label: "Registrations" },
    { key: "watchlist", label: "Watchlist" },
    { key: "viewed", label: "Recently Viewed" },
    { key: "rounds", label: "My Rounds" },
  ];

  return (
    <div className="dashboard">
      {/* HERO */}
      <section className="dash-hero">
        <h1>Welcome, {username}</h1>
        <p className="dash-tagline">
          Ready to explore new opportunities beyond the uniform
        </p>
      </section>

      {/* MY ACTIVITY */}
      <section className="my-activity inner-box">
        <div className="section-header">
          <div className="header-left">
            <h2>My Activity</h2>
            <p className="activity-sub">
              Quickly revisit your recent actions and pick up right where you left off.
            </p>
          </div>
          <a href="/activity" className="view-all">View all ↗</a>
        </div>

        <div className="activity-tabs">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`activity-tab ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <span className="tab-icon">{tabIcons[tab.key]}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="activity-carousel-wrapper">
          {showActivityArrows && (
            <button className="jobs-arrow left" onClick={() => scrollActivities("left")}>‹</button>
          )}
          <div className="activity-cards no-scrollbar" ref={activityRef}>
            {activityData[activeTab].map((item, idx) => (
              <div key={idx} className="activity-item">
                <div className="activity-logo">{item.icon}</div>
                <div className="activity-info">
                  <h3>{item.title}</h3>
                  <p>{item.company}</p>
                </div>
              </div>
            ))}
          </div>
          {showActivityArrows && (
            <button className="jobs-arrow right" onClick={() => scrollActivities("right")}>›</button>
          )}
        </div>
      </section>

      {/* LATEST JOBS */}
      <section className="jobs-box">
        <div className="jobs-inner inner-box">
          <div className="section-header">
            <div className="header-left">
              <h2>Latest Jobs</h2>
              <p className="jobs-sub">Find jobs that fit your career aspirations.</p>
            </div>
            <a className="view-more" href="/jobs">View all ↗</a>
          </div>

          <div className="jobs-wrapper">
            {showJobArrows && (
              <button className="jobs-arrow left" onClick={() => scrollJobs("left")}>‹</button>
            )}
            <div className="jobs-carousel no-scrollbar" ref={jobsRef}>
              {allJobs.map((job, idx) => (
                <div className="job-slide" key={idx}>
                  <div className="job-top">
                    <span className="job-badge">{job.type}</span>
                    <span className="job-hiring">⚡ Actively Hiring</span>
                  </div>
                  <div className="job-body">
                    <h3>{job.title}</h3>
                    <p className="job-company">{job.company}</p>
                    <div className="job-meta">
                      <span>📍 {job.location}</span>
                      <span>₹ {job.salary}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {showJobArrows && (
              <button className="jobs-arrow right" onClick={() => scrollJobs("right")}>›</button>
            )}
          </div>
        </div>
      </section>

      {/* QUICK TOOLS */}
      <section className="quick-tools-box inner-box">
        <div className="section-header">
          <h2>Quick Tools</h2>
        </div>
        <div className="quick-grid">
          <a href="/resume" className="quick-card">
            <span className="quick-icon">📄</span>
            <h3>Resume Generator</h3>
            <p>Create professional resumes with one click.</p>
          </a>
          <a href="/recommendations" className="quick-card">
            <span className="quick-icon">🤖</span>
            <h3>Smart Job Match</h3>
            <p>AI powered job recommendations tailored to you.</p>
          </a>
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
