import React from 'react';
import image1 from '../../images/avantage1.webp'
import image2 from '../../images/avantage2.webp'
import image3 from '../../images/avantage3.webp'
import image4 from '../../images/avantage4.webp'
import "./_avantages.scss"

const Avantages = () => {
    
    return (
        <div className='avantageContainer'>
            <figure>
                <img width="140px" src={image1} alt='icone avec un homme tirant un dromadaire'/>
                <figcaption>Des balades en dromadaire offertes sur certaines prestations !</figcaption>
            </figure>

            <figure>
                <img width="140px" src={image2} alt='icone représentant une théière marocaine'/>
                <figcaption>Une pause thé traditionnelle est incluse dans le prix de votre aventure</figcaption>
            </figure>

            <figure>
                <img width="140px" src={image3} alt='icone de taxi'/>
                <figcaption>Nous offrons la possibilité d'une navette aller-retour depuis le lieu de séjour de nos clients</figcaption>
            </figure>

            <figure>
                <img width="140px" src={image4} alt='icone avec vue sur paysage desertique'/>
                <figcaption>Choisissez parmi plusieurs itinéraires autour du désert d'Agafay, de la palmeraie et du lac Takerkoust.</figcaption>
            </figure>
        </div>


    );
};

export default Avantages;