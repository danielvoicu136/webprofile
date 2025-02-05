import './App.css';
import Profile from './components/Profile/Profile';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Navbar from './components/Navbar/Navbar';
import Experience from './pages/Experience/Experience';

function App() {
  return (
    <div className="App">
      <div className='grid_container'>
        <Profile className="item1"></Profile>
        <div className="item2">
            <Router basename="/webprofile">
              <Navbar></Navbar>
                  <Routes>
                    <Route path="/" element={<Experience />} />
                    <Route path="*" element={<Experience />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
            </Router>
        </div>
        
      </div>
    </div>
  );
}

export default App;
