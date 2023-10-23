import React from 'react';
import { NavLink } from 'react-router-dom';
import './_headers.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Header = (data) => {
    return (
        <header>
            <div>
                <NavLink to="/contact" className="navAcces" ><FontAwesomeIcon icon={faLocationDot} /><p>Accès</p></NavLink>
                <img src={data.logo} alt='Logo du site'/>
                <a href='tel:+212690294713'><FontAwesomeIcon icon={faWhatsapp} />+212 6 90 29 47 13</a>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/Tarifs">Tarifs</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                    <li><NavLink to="/Decouvrir">Découvrir</NavLink></li>
                    
                </ul>
            </nav>
        </header>
    );
};

export default Header;