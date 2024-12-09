"use client";

import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Meu Portfólio</h1>
        <ul className={`nav-links ${isMobile ? "nav-mobile" : ""}`}>
          <li>
            <a href="pages">Home</a>
          </li>
          <li>
            <a href="/projects">Projetos</a>
          </li>
          <li>
            <a href="/contact">Contato</a>
          </li>
        </ul>
        <button
          className="menu-icon"
          onClick={() => setIsMobile(!isMobile)}
          aria-label="Menu"
        >
          {isMobile ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
