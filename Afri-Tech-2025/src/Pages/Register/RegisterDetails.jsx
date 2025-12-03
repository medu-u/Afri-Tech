import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Components/useAuth/useAuth';
import { motion } from 'framer-motion';
function RegisterDetails() {
    const navigate = useNavigate();
    const { user, setUser } = useAuth();
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
      if (!user) navigate("/");
    }, [user, navigate]);

    const handleContinue = (e) => {
      e.preventDefault();
      if (!fullName || !phone || !country || !state || !city) {
        setError("Please fill all fields");
        return;
      }
      // Save details locally (in a simple users_details store)
      const details = {
        email: user.email,
        fullName,
        phone,
        country,
        state,
        city,
      };
      const all = JSON.parse(
        localStorage.getItem("afritech_user_details") || "[]"
      );
      const filtered = all.filter((d) => d.email !== user.email);
      filtered.push(details);
      localStorage.setItem("afritech_user_details", JSON.stringify(filtered));
      // attach name to user context
      setUser({ email: user.email, fullName });
      navigate("/courses");
    };

    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.form
          onSubmit={handleContinue}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Provide your details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Full name</label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm">Phone number</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm">Country</label>
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm">State</label>
              <input
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm">City</label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          {error && <div className="text-red-600 mt-3">{error}</div>}

          <div className="mt-6">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Continue
            </button>
          </div>
        </motion.form>
      </main>
    );
}

export default RegisterDetails
