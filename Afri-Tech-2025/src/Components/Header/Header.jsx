import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../useAuth/UseAuth';
import './Header.css'

function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Afri-Tech
        </Link>

        <nav className="nav">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/privacy" className="nav-link">
            Privacy Policy
          </Link>

          {user ? (
            <button
              onClick={() => {
                signOut();
                navigate("/");
              }}
              className="btn"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/" className="btn">
              Get Started
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
