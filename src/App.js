import React  from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MatchingPage from './pages/MatchingPage';
import ProfileForm from './pages/ProfileForm';
import SignupForm from './pages/SignupForm';
import ForgotPasswordForm from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {
  const location = useLocation(); 

  
  return (
    <HelmetProvider>
      {/* Conditionally hide Navbar on the Home page */}
      {location.pathname !== '/' && <Navbar />}

      {/* Main Page Content */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Page title="Home"><Home /></Page>} />
          <Route path="/login" element={<Page title="Login"><Login /></Page>} />
          <Route path="/dashboard" element={<Page title="Dashboard"><Dashboard /></Page>} />
          <Route path="/matching" element={<Page title="Matching"><MatchingPage /></Page>} />
          <Route path="/profile" element={<Page title="Profile"><ProfileForm /></Page>} />
          <Route path="/signup" element={<Page title="Sign Up"><SignupForm /></Page>} />
          <Route path="/forgot-password" element={<Page title="Forgot Password"><ForgotPasswordForm /></Page>} />
          <Route path="/reset-password" element={<Page title="Reset Password"><ResetPassword /></Page>} />
          <Route path="*" element={<Page title="404"><NotFound /></Page>} />
        </Routes>
      </div>
    </HelmetProvider>
  );
};

// Dynamic Page Title Component
const Page = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{title} - Study Buddy</title>
      </Helmet>
      {children}
    </>
  );
};

export default App;
