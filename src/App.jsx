import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Courses from './pages/Courses.jsx';
import Contact from './pages/Contact.jsx';
import AddCourse from './pages/AddCourse.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ThemeProvider from './components/ThemeContext.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/add-course" element={<AddCourse />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}


