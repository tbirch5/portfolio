import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage.jsx';
import BlogPost from './pages/BlogPost.jsx';
import WhoopProject from './pages/WhoopProject.jsx';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
 
    return (
      <BrowserRouter>  
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/whoop" element={<WhoopProject />} />
      </Routes>
      </BrowserRouter>
    );
  }

  
