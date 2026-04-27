import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import './LoginPage.css';

const LoginPage = () => {
  const [step, setStep] = useState(1); // 1: Info, 2: OTP
  const [isSignup, setIsSignup] = useState(false);
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNextStep = (e) => {
    e.preventDefault();
    if (mobile.length < 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    if (isSignup && !name) {
      setError('Please enter your full name');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === '12345') {
      login({ username: name || `User_${mobile.slice(-4)}`, mobile });
      const origin = location.state?.from?.pathname || '/';
      navigate(origin);
    } else {
      setError('Invalid OTP. Use 12345 to login.');
    }
  };

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setStep(1);
    setError('');
    setOtp('');
  };

  return (
    <div className="login-page">
      <motion.div 
        className="login-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="login-sidebar">
          <h1>{isSignup ? "Sign Up" : "Login"}</h1>
          <p>{isSignup ? "We recommend you to provide your real name for a better experience" : "Get access to your Orders, Wishlist and Recommendations"}</p>
          <div className="sidebar-image">
            <ShoppingBag size={120} strokeWidth={1} style={{ opacity: 0.3 }} />
          </div>
        </div>
        
        <div className="login-form-container">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.form 
                key="info-form"
                onSubmit={handleNextStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {isSignup && (
                  <div className="input-group">
                    <input 
                      type="text" 
                      placeholder="Enter Full Name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required 
                    />
                  </div>
                )}
                <div className="input-group">
                  <input 
                    type="tel" 
                    placeholder="Enter Mobile number" 
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ''))}
                    maxLength={10}
                    required 
                  />
                </div>
                
                {error && <p className="error-text">{error}</p>}
                
                <p className="terms-text">
                  By continuing, you agree to FluxCommerce's <span className="blue-txt">Terms of Use</span> and <span className="blue-txt">Privacy Policy</span>.
                </p>
                
                <button type="submit" className="login-submit-btn">
                  Continue
                </button>
              </motion.form>
            ) : (
              <motion.form 
                key="otp-form"
                onSubmit={handleVerifyOtp}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="otp-info">
                  Please enter the OTP sent to <b>+91 {mobile}</b>. 
                  <span className="change-btn" onClick={() => setStep(1)}>Change</span>
                </div>
                
                <div className="input-group">
                  <input 
                    type="text" 
                    placeholder="Enter 5-digit OTP" 
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                    maxLength={5}
                    required 
                    autoFocus
                  />
                </div>

                {error && <p className="error-text">{error}</p>}
                
                <button type="submit" className="login-submit-btn">
                  Verify & {isSignup ? "Signup" : "Login"}
                </button>
                
                <div className="resend-text">
                  Didn't receive OTP? <span className="blue-txt">Resend</span>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
          
          <div className="login-footer" onClick={toggleMode}>
            {isSignup ? "Existing User? Log in" : "New to FluxCommerce? Create an account"}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
