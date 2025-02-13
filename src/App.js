import './App.css';
import Profile from './components/Profile/Profile';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import Questions from "./pages/Questions/Questions";
import Navbar from './components/Navbar/Navbar';
import Experience from './pages/Experience/Experience';
import BackToTop from './components/BackToTop/BackToTop';

function App() {
  return (
    <div className="App">
      <div className='grid_container'>
        <Profile className="item1"></Profile>
        <div className="item2">
            <Router basename="/webprofile">
              <Navbar></Navbar>
                  <Routes>
                    <Route path="/" element={<Projects />} />
                    <Route path="*" element={<Projects />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/questions" element={<Questions />} />
                  </Routes>
            </Router>
        </div>
        
      </div>
      <BackToTop></BackToTop>
    </div>
  );
}

export default App;
