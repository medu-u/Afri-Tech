import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Components/useAuth/useAuth';

function CoursesLists() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const details =
    JSON.parse(localStorage.getItem("afritech_user_details") || "[]").find(
      (d) => d.email === user.email
    ) || {};

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  const handleSelect = (courseId) => {
    if (courseId === 1) {
      // functional -> redirect to Telegram
      window.location.href = "@medinegn";
    } else {
      // not implemented
      alert("This course is not available right now.");
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-2xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold">Courses</h2>
        <p className="text-gray-600 mt-2">
          Student: {details.fullName || extractNameFromEmail(user.email)}
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded p-4 flex flex-col justify-between">
            <div>
              <div className="font-semibold">
                Bassic full stuck web development
              </div>
              <div className="text-sm text-gray-500">Fee: 999 ETB</div>
            </div>
            <div className="mt-4">
              <button
                onClick={() => handleSelect(1)}
                className="px-4 py-2 bg-indigo-600 text-white rounded"
              >
                Continue
              </button>
            </div>
          </div>

          <div className="border rounded p-4 opacity-60 pointer-events-none">
            <div>
              <div className="font-semibold">
                Basics of software development
              </div>
              <div className="text-sm text-gray-500">Fee: 1499 ETB</div>
            </div>
            <div className="mt-4">
              <button className="px-4 py-2 bg-gray-400 text-white rounded">
                Not available
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default CoursesLists
