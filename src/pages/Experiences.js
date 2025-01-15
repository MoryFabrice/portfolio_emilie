import React from "react";
// import "./Experiences.css";

const Experiences = () => {
  const experiences = [
    {
      year: "2023",
      companyLogo: "/images/logo-mds.png",
      jobTitle: "Développeur Web - Entreprise XYZ",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat urna sit amet enim ullamcorper, ut porttitor tellus fringilla. Cras tempor leo ut arcu laoreet, in lobortis massa molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus metus ex, lobortis ac eleifend porttitor, bibendum in lorem.",
    },
    {
        year: "2024",
        companyLogo: "/images/logo-mds.png",
        jobTitle: "Assistante Pédagogique en Alternance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat urna sit amet enim ullamcorper, ut porttitor tellus fringilla. Cras tempor leo ut arcu laoreet, in lobortis massa molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus metus ex, lobortis ac eleifend porttitor, bibendum in lorem.",
      },
      {
        year: "2011",
        companyLogo: "/images/logo-mds.png",
        jobTitle: "KFC - Lezennes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat urna sit amet enim ullamcorper, ut porttitor tellus fringilla. Cras tempor leo ut arcu laoreet, in lobortis massa molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus metus ex, lobortis ac eleifend porttitor, bibendum in lorem.",
      },
    // Ajoute d'autres expériences ici
  ];

  return (
    <div className="body">
        <div className="conteneur-column">
        <h1 className="comic-neue-bold-underline t-center">Mes expériences</h1>
        {experiences.map((exp, index) => (
            <div key={index} className="experience">
            <div className="annee-logo">
                <h2 className="comic-neue-regular-underline">{exp.year}</h2>
                <p className="comic-neue-light">
                <img className="logo" src={exp.companyLogo} alt="Logo" />
                </p>
            </div>
            <div className="description-poste">
                <h2 className="comic-neue-regular-underline">{exp.jobTitle}</h2>
                <p className="comic-neue-light">{exp.description}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Experiences;
