import React from "react";
// import "./Header.css"; // Crée un fichier CSS pour les styles du Header

const Header = () => {
  return (
    <div className="header">
      <div className="logo-xs">
        <img src="/images/EmilieMORY_FondVertClair.png" alt="Logo" />
      </div>
      <div className="menu">
        <ul>
          <li><a href="/bureau">Bureau</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/portrait">Portrait</a></li>
          <li><a href="/experiences">Expériences</a></li>
          <li><a href="/diplomes">Diplômes</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
