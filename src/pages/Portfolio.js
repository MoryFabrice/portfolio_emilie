import React from "react";
// import "./Experiences.css";

const Portfolio = () => {
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
        modalTitre: "Description modal",
        descriptionModal: "Voici une description détaillée du projet. Il inclut plusieurs images et du texte explicatif.",
        imagesModal: [
            "/images/exProjetRH.webp",
            "/images/exProjetRH.webp",
            "/images/exProjetRH.webp",
            // Ajoute d'autres images ici
        ]
    }

    // Ajoute les modals ici
  ];

  return (
    <div className="body">
        {/* Structure portfolio */}
        <div className="portfolio-container">
        {portfolios.map((port, index) => (
            <div key={index} className="portfolio">
                <div className="photo-portfolio">
                    <img src={port.portfolioImg}></img>
                </div>
                <div className="titre-portfolio">
                    <h2 class="comic-neue-regular">{port.portfolioTitle}</h2>
                </div>
            </div>
        ))}
        </div>
        {/* Structure modals */}
        {modals.map((modal, index) => (
            <div id={index} className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <h2>{modal.modalTitre}</h2>
                    <p>{modal.descriptionModal}</p>
                    <div className="images-modal">
                        {modal.imagesModal.map((img, index) => (
                            <img key={index} src={img}></img>
                        ))}
                    </div>
                </div>
            </div>

            </div>
        ))}
    </div>
  );
};

export default Portfolio;
