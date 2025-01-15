import React from "react";

const Portrait = () => {
    return (
        <div className="body">
            <div className="description">
                <h1 className="comic-neue-bold">MORY Emilie</h1>
                <h2 className="comic-neue-regular">Alternante - Assistante de direction</h2>
                <p className="comic-neue-light">
                    **Experte en gestion humaine, logistique de dernière minute 
                    et optimisation des sourires (adultes et enfants confondus)** <br /><br />
                    Avec plus de 12 ans d'expérience dans des secteurs aussi variés 
                    que la restauration rapide, la gestion administrative et l'assistance dentaire, 
                    Emilie a développé un ensemble de compétences qui font d'elle un véritable couteau 
                    suisse professionnel. Organisée, rigoureuse et dotée d'un sens inné du relationnel, 
                    elle sait jongler entre la gestion d'agendas, la stérilisation d'instruments dentaires, 
                    et la prise en charge de commandes (poulet frit ou soins dentaires, c'est du pareil au même !). <br /><br />
                    Après avoir exercé des postes de manager et formatrice chez KFC, où elle a perfectionné 
                    son expertise dans l'art du poulet, Emilie a ensuite mis ses compétences à profit en tant 
                    qu'assistante dentaire, où elle a brillamment navigué entre empreintes dentaires et stock 
                    de gants stériles. <br /><br />
                    Et parce qu'elle ne fait jamais les choses à moitié, elle est aussi maman à plein temps, 
                    un poste où elle gère de véritables crises existentielles comme le découpage de bananes 
                    en rondelles (ou pas). Bref, Emilie est une super-héroïne multitâche, prête à tout pour 
                    s'assurer que chaque projet, qu'il soit professionnel ou personnel, se déroule sans accroc.
                </p>
            </div>
            <div className="photo">
                <img src="/images/EmilieMORY_SansFond.jpg" alt="Emilie Mory" />
            </div>
        </div>
    );
};

export default Portrait;
