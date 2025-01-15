import React from 'react';

const Accueil = () => {
  // Fonction d'ouverture de la porte
  const ouverturePorte = () => {
    window.location.href = "/bureau"; // Redirige vers la page bureau (assurez-vous d'utiliser un chemin relatif approprié)
  };

  return (
    <div className="accueil">
      <button
        id="entrer"
        className="clickable-porte"
        onClick={ouverturePorte} // Ajout de l'écouteur d'événement avec React
      >
        {/* Vous pouvez laisser ce bouton vide ou ajouter un texte/élément */}
      </button>
    </div>
  );
}

export default Accueil;
