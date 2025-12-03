import React from 'react'
import {useAuth} from '../useAuth/useAuth';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    return (
      <header className="bg-indigo-600 text-white py-6 shadow-md">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            Afri-Tech
          </Link>
          <nav className="space-x-4">
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            {user ? (
              <>
                <button
                  onClick={() => {
                    signOut();
                    navigate("/");
                  }}
                  className="bg-white text-indigo-600 px-3 py-1 rounded-md font-semibold"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link
                to="/"
                className="bg-white text-indigo-600 px-3 py-1 rounded-md font-semibold"
              >
                Get Started
              </Link>
            )}
          </nav>
        </div>
      </header>
    );
}

export default Header
