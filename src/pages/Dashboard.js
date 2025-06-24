import React from 'react';
import './Dashboard.css';
import ProgressBar from '../components/ProgressBar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Greeting */}
      <section className="greeting">
        <h2>Hi Anil 👋</h2>
        <p>You're doing great! Let’s keep the momentum going.</p>
      </section>

      {/* Progress + Streak */}
      <section className="progress-streak">
        <div className="progress-card">
  <h4>Weekly Goal Progress</h4>
  <ProgressBar percentage={60} color="#2ECC71" />
  <p>3 of 5 workouts completed</p>
</div>

        <div className="streak-card">
          <h4>Current Streak</h4>
          <p>🔥 4 days in a row</p>
        </div>
      </section>

      {/* Activity Summary Cards */}
      <section className="activity-summary">
        <div className="summary-card">
          <h5>Steps Today</h5>
          <p>7,845</p>
        </div>
        <div className="summary-card">
          <h5>Calories Burned</h5>
          <p>540 kcal</p>
        </div>
        <div className="summary-card">
          <h5>Workout Time</h5>
          <p>42 min</p>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="dashboard-actions">
        <button className="dashboard-btn">Log Activity</button>
        <button className="dashboard-btn secondary">Edit Goal</button>
      </section>

      {/* Motivational Quote */}
      <section className="quote-section">
        <blockquote>“It’s not about perfect. It’s about effort.”</blockquote>
      </section>
    </div>
  );
};

export default Dashboard;
