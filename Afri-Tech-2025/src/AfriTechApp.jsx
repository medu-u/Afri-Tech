import React from 'react'


import About from './Pages/About/About';
import Privacy from './Pages/Privacy/Privacy';
import Dashboard from './Pages/Dashboard/Dashboard';
import CourseIntro from './Pages/Course/CourseIntro';
import RegisterDetails from './Pages/Register/RegisterDetails';
import CoursesLists from './Pages/Courses/CoursesLists';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

export default function AfriTechApp() {
  return (
    <AuthProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/course/1" element={<CourseIntro />} />
            <Route path="/register-details" element={<RegisterDetails />} />
            <Route path="/courses" element={<CoursesLists/>} />
            <Route path="*" element={<Home />} />
          </Routes>

          <div className="mt-auto">
            <Footer />
          </div>
        </div>
    </AuthProvider>
  );
}


