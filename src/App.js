import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Core pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

// Onboarding
import Step1 from './pages/Onboarding/Step1';
import Step2 from './pages/Onboarding/Step2';
import Step3 from './pages/Onboarding/Step3';
import Step4 from './pages/Onboarding/Step4';

// App pages
import Dashboard from './pages/Dashboard';
import LogActivity from './pages/LogActivity';
import Goals from './pages/Goals';
import ActivityHistory from './pages/ActivityHistory';
import Achievements from './pages/Achievements';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

// Optional: Layout wrapper with sidebar/footer if needed
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>

        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Onboarding steps */}
        <Route path="/onboarding/step-1" element={<Step1 />} />
        <Route path="/onboarding/step-2" element={<Step2 />} />
        <Route path="/onboarding/step-3" element={<Step3 />} />
        <Route path="/onboarding/step-4" element={<Step4 />} />

        {/* Main app (with sidebar/header/footer) */}
        <Route
          path="/dashboard"
          element={
            <>
              <Header />
              <Sidebar />
              <Dashboard />
              <Footer />
            </>
          }
        />
        <Route
          path="/log"
          element={
            <>
              <Header />
              <Sidebar />
              <LogActivity />
              <Footer />
            </>
          }
        />
        <Route
          path="/goals"
          element={
            <>
              <Header />
              <Sidebar />
              <Goals />
              <Footer />
            </>
          }
        />
        <Route
          path="/history"
          element={
            <>
              <Header />
              <Sidebar />
              <ActivityHistory />
              <Footer />
            </>
          }
        />
        <Route
          path="/achievements"
          element={
            <>
              <Header />
              <Sidebar />
              <Achievements />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Sidebar />
              <Profile />
              <Footer />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <Header />
              <Sidebar />
              <Settings />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
