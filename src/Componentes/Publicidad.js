//Componente de publicidad

//Librerias 
import React from 'react';
import {Link} from 'react-router-dom';

//Estilos  / Imagenes
import './styles/Publicidad.css';

import Flechita from '../recursos/assets/icons/109617.svg';
import Persona from '../recursos/assets/images/headerimage.png';
import Fiesta from '../recursos/assets/images/d.png';

function Publicidad(){
    return(
        <div className="publicidad__container">
            <img
                className="publicidad__imagen" 
                src={Persona} 
                alt='../recursos/assets/images/headerimage.png'/>
            <ul className="publicidad__texto">
                <li className="publicidad__titulo">
                    <p>
                    $0 delivery for 30 days! 
                    <img
                        className="fiesta" 
                        src={Fiesta} 
                        alt='../recursos/assets/images/d.png'/>
                    </p>
                </li>
                <li className="publicidad__contenido">
                    <p>
                        $0 delivery fee for orders over $10 for 30 days
                    </p>
                </li>
            </ul>
            <Link
                to="/informacion/" 
                className="publicidad__link">
                <p>
                    Learn more 
                    <img
                        className="flechita" 
                        src={Flechita} 
                        alt='../recursos/assets/icons/109617.svg/'/>
                </p>
            </Link>
        </div>
    );
};

export default Publicidad;
