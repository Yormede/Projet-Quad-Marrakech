import React from 'react';
import { Link } from 'react-router-dom';
import "./_activities.scss"
import quad from "../../images/quadactivities1.webp"
import cross from "../../images/pexels-punlob-564098.webp"
import buggy from '../../images/pexels-spencer-davis-4340825.webp'
import dromadaire from "../../images/pexels-christophe-rascle.webp"

const WantedActivities = () => {
    return (
        <div className='allActivities'>
            <div className='containerActivities'>
                <Link to="/tarifs">
                    <img width="200px" height="200px" alt='Quad' src={quad} />
                    <div>
                        <h3>Quad</h3>
                        <figcaption>à partir de <span>199 dhs</span></figcaption>
                    </div>
                </Link>

                <Link to="/tarifs#crossTarifs">
                    <img width="200px" height="200px" alt='motocross' src={cross} />
                    <div>
                        <h3>Motocross</h3>
                        <figcaption>à partir de <span>1299 dhs</span></figcaption>
                    </div>
                </Link>

                <Link to="/tarifs#dromadaireTarifs">
                    <img width="200px" height="200px" alt='Buggy' src={buggy} />
                    <div>
                        <h3>Buggy</h3>
                        <figcaption>à partir de <span>1199 dhs</span></figcaption>
                    </div>
                </Link>

                <Link to="/tarifs#buggyTarifs">
                    <img width="200px" height="200px" alt='dromadaire' src={dromadaire} />
                    <div>
                        <h3>Dromadaire</h3>
                        <figcaption>à partir de <span>199 dhs</span></figcaption>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default WantedActivities;