import './App.css';
import Profile from './components/Profile/Profile';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from "./pages/Work/Work";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">



      <div className='grid_container'>
        <Profile className="item1"></Profile>
        <div className="item2">
            <Router>
              <Navbar></Navbar>
                  <Routes>
                    <Route path="/work" element={<Work />} />
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
