import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 800);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return ( 
        <div className="navbar_container box_style"> 
            <ul className="navbar_list">
                <li> <NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ""}>
                         {isMobile ? "CV" : "Experience"}
                    </NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;
