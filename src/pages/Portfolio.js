import React, { useState } from "react";
// import "./Experiences.css";

const Portfolio = () => {
  const [activeModal, setActiveModal] = useState(null); // État pour suivre la modal active
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Nouvel état

  const portfolios = [
    {
        portfolioImg: "/images/exProjetRH.webp",
        portfolioTitle: "Titre",
    },
    {
        portfolioImg: "/images/exProjetRH.webp",
        portfolioTitle: "Titre",
    },
    {
        portfolioImg: "/images/exProjetRH.webp",
        portfolioTitle: "Titre",
    },
    {
        portfolioImg: "/images/exProjetRH.webp",
        portfolioTitle: "Titre",
    },
    {
        portfolioImg: "/images/exProjetRH.webp",
        portfolioTitle: "Titre",
    },
    {
        portfolioImg: "/images/exProjetRH.webp",
        portfolioTitle: "Titre",
    },
    // Ajoute d'autres portfolios ici
  ];

  const modals = [
    {
        index: 1,
        modalTitre: "Titre du Projet n°1",
        descriptionModal: "Voici une description détaillée du projet. Il inclut plusieurs images et du texte explicatif.",
        imagesModal: [
            "/images/exProjetRH.webp",
            "/images/exProjetRH_2.webp",
            "/images/exProjetRH_3.webp",
            // Ajoute d'autres images ici
        ]
    },
    {
        index: 2,
        modalTitre: "Titre du Projet n°2",
        descriptionModal: "Voici une description détaillée du projet. Il inclut plusieurs images et du texte explicatif.",
        imagesModal: [
            "/images/exProjetRH.webp",
            "/images/exProjetRH_2.webp",
            "/images/exProjetRH_3.webp",
            // Ajoute d'autres images ici
        ]
    },

    // Ajoute les modals ici
  ];

  // Fonction pour ouvrir une modal
  const openModal = (index) => {
    setActiveModal(index);
    setCurrentImageIndex(0); // Réinitialise l'image à la première au clic
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setActiveModal(null);
    setCurrentImageIndex(0); // Réinitialise après fermeture
  };

  // Fonction pour aller à l'image précédente
  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? modals[activeModal - 1].imagesModal.length - 1 : prevIndex - 1
    );
  };

  // Fonction pour aller à l'image suivante
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === modals[activeModal - 1].imagesModal.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="body">
        {/* Structure portfolio */}
        <div className="portfolio-container">
        {portfolios.map((port, index) => (
            
            <div key={index} className="portfolio" onClick={() => openModal(index + 1)}> 
                <div className="photo-portfolio">
                    <img src={port.portfolioImg} alt={`Portfolio ${index + 1}`} ></img>
                </div>
                <div className="titre-portfolio">
                    <h2 class="comic-neue-regular">{port.portfolioTitle}</h2>
                </div>
            </div>
        ))}
        </div>
        {/* Structure modals */}
        {modals.map((modal) => (
            activeModal === modal.index && ( // Afficher la modal active seulement
            <div key={modal.index} id={`modal${modal.index}`} className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal} >&times;</span>
                    <h2 className="comic-neue-regular-underline">{modal.modalTitre}</h2>
                    <div className="modal-images">
                    <img src={modal.imagesModal[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="modal-image" />
                        <div class="nav-buttons">
                            <button class="prev" onClick={showPrevImage}>&#10094;</button>
                            <button class="next" onClick={showNextImage}>&#10095;</button>
                        </div>
                    </div>
                    <p className="comic-neue-light">{modal.descriptionModal}</p>
                </div>
            </div>
        )))}
    </div>
  );
};

export default Portfolio;
