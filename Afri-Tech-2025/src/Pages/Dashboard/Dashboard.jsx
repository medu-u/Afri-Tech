import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Dashboard() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const studentName = extractNameFromEmail(user?.email);
  
    useEffect(() => {
      if (!user) navigate('/');
    }, [user, navigate]);
  
    return (
      <main className="max-w-5xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold">Welcome, {studentName} 👋</h2>
          <p className="text-gray-600 mt-2">Choose a course to begin.</p>
  
          <div className="mt-6">
            <div className="border rounded p-4 flex items-center justify-between">
              <div>
                <div className="font-semibold">Bassic full stuck website development</div>
                <div className="text-sm text-gray-500">A practical course to build modern web apps (beginner → intermediate)</div>
              </div>
              <div className="flex gap-3">
                <Link to="/course/1" className="px-4 py-2 bg-indigo-600 text-white rounded">Select</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    );
  }

export default Dashboard
