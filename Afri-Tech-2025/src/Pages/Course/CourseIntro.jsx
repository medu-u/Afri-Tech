import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Components/useAuth/useAuth';

function CourseIntro() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  const start = () => {
    navigate("/register-details", { state: { courseId: 1 } });
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-2xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold">
          Bassic full stuck website development
        </h2>
        <p className="text-gray-600 mt-2">
          You will provide some details to register for this course.
        </p>
        <div className="mt-6">
          <button
            onClick={start}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Continue
          </button>
        </div>
      </motion.div>
    </main>
  );
}

export default CourseIntro
