import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Components/useAuth/useAuth';

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
      <main className="max-w-5xl mx-auto px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-2">Welcome to Afri-Tech</h2>
          <p className="text-gray-600 mb-6">
            Learn tech skills designed for African youth. Start by signing in or
            creating an account.
          </p>

          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setMode("signin")}
              className={`px-4 py-2 rounded ${
                mode === "signin" ? "bg-indigo-600 text-white" : "bg-gray-100"
              }`}
            >
              Sign in
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`px-4 py-2 rounded ${
                mode === "signup" ? "bg-indigo-600 text-white" : "bg-gray-100"
              }`}
            >
              Sign up
            </button>
            <button
              onClick={() => setMode("register")}
              className={`px-4 py-2 rounded ${
                mode === "register" ? "bg-indigo-600 text-white" : "bg-gray-100"
              }`}
            >
              Register to Class
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border rounded px-3 py-2"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border rounded px-3 py-2"
                placeholder="Choose a secure password"
              />
            </div>

            {error && <div className="text-red-600">{error}</div>}

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold"
              >
                {mode === "signup" ? "Create account" : "Continue"}
              </button>
              <small className="text-gray-500">
                Or sign in with your email to continue
              </small>
            </div>
          </form>

          <div className="mt-8 text-sm text-gray-600">
            By signing up you agree to our{" "}
            <Link to="/privacy" className="underline">
              Privacy Policy
            </Link>
            .
          </div>
        </motion.section>

        <section className="mt-8 p-6 text-gray-700">
          <h3 className="text-xl font-semibold mb-2">About Afri-Tech</h3>
          <p>
            Afri-Tech is an educational platform aimed at young Africans who
            want practical, hands-on training in software and web development.
          </p>
        </section>
      </main>
    );
}

export default Home
