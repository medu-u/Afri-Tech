import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Components/useAuth/UseAuth";
import { motion } from "framer-motion";
import './Home.css'

function Home() {
  const { register, signIn } = useAuth();
  const [mode, setMode] = useState("signin"); // signin | signup | register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => setError(null), [mode, email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === "signup") {
        await register(email.trim().toLowerCase(), password);
      } else {
        await signIn(email.trim().toLowerCase(), password);
      }
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <main className="auth-container">
      {/* Auth Card */}
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="auth-card"
      >
        <h2 className="auth-title">Welcome to Afri-Tech</h2>
        <p className="auth-subtitle">
          Learn tech skills designed for African youth. Start by signing in or
          creating an account.
        </p>

        {/* Mode Buttons */}
        <div className="auth-modes">
          <button
            onClick={() => setMode("signin")}
            className={`mode-button ${mode === "signin" ? "active" : ""}`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`mode-button ${mode === "signup" ? "active" : ""}`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setMode("register")}
            className={`mode-button ${mode === "register" ? "active" : ""}`}
          >
            Register to Class
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Choose a secure password"
            />
          </div>

          {error && <div className="error">{error}</div>}

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              {mode === "signup" ? "Create Account" : "Continue"}
            </button>
            <small className="form-note">
              Or sign in with your email to continue
            </small>
          </div>
        </form>

        <div className="privacy-note">
          By signing up you agree to our{" "}
          <Link to="/privacy" className="privacy-link">
            Privacy Policy
          </Link>
          .
        </div>
      </motion.section>

      {/* About Section */}
      <section className="about-section">
        <h3>About Afri-Tech</h3>
        <p>
          Afri-Tech is an educational platform aimed at young Africans who want
          practical, hands-on training in software and web development.
        </p>
      </section>
    </main>
  );
}

export default Home;
