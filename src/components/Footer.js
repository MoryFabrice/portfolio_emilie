import React from "react";
// import "./Footer.css"; // Crée un fichier CSS pour les styles du Footer

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <img src="/images/Logo_MoryWebMaker_250x76.png" alt="Logo" />
      </div>
      <div className="social-media">
        <a className="text-white-dnone" href="#"><i className="fi fi-brands-linkedin"></i></a>
        <a className="text-white-dnone" href="#"><i className="fi fi-rr-envelope"></i></a>
        <a className="text-white-dnone" href="#"><i className="fi fi-brands-whatsapp"></i></a>
      </div>
    </div>
  );
};

export default Footer;
