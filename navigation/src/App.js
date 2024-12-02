import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Photos from './pages/Photos.js';
import Home from './pages/Home.js';
import ContactUs from './pages/Contact-us.js';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/photos" Component={Photos}/>
        <Route path="/contact-us" Component={ContactUs}/>
      </Routes>
    </Router>
    
  );
}

export default App;
