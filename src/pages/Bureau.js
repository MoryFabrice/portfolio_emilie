import React from "react";
import Button from "../components/Button";

const Bureau = () => {
    // Fonction d'ouverture vers le portait
    const ouverturePortait = () => {
        window.location.href = "/portrait"; // Redirige vers la page portrait (assurez-vous d'utiliser un chemin relatif approprié)
    };
  return (
    <div className="bureau">
        <button
            id="portrait" 
            className="clickable-bureau" 
            onClick={ouverturePortait} // Ajout de l'écouteur d'événement avec React
        >
          {/* Vous pouvez laisser ce bouton vide ou ajouter un texte/élément */}            
        </button>
    </div>
  );
};

export default Bureau;
