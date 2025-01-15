import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './style/portfolio.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Bureau from "./pages/Bureau";
import Portfolio from "./pages/Portfolio";
import Portrait from "./pages/Portrait";
import Experiences from "./pages/Experiences";
import Diplomes from "./pages/Diplomes";

function App() {
  return (
    <Router>
      <div>
        {/* Si ce n'est pas la page Accueil ni Bureau, afficher le Header */}
        {(window.location.pathname !== '/' && window.location.pathname !== '/bureau') && <Header />}
        
        <Routes>
          {/* Routes définies avec React Router v6 */}
          <Route path="/" element={<Accueil />} />
          <Route path="/bureau" element={<Bureau />} />
          <Route path="/portfolio" element={<Portfolio />} />  {/* Affichage du portfolio */}
          <Route path="/portrait" element={<Portrait />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/diplomes" element={<Diplomes />} />
        </Routes>
        
        {/* Si ce n'est pas la page Accueil ni Bureau, afficher le Footer */}
        {(window.location.pathname !== '/' && window.location.pathname !== '/bureau') && <Footer />}
      </div>
    </Router>
  );
}

export default App;
