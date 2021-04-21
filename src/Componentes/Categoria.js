//Componente de categorias

//Librerias 
import React from 'react';

//Estilos / imagenes
import './styles/Categoria.css';

import Hamburguesa from '../recursos/assets/icons/1046784.svg';
import Reloj from '../recursos/assets/icons/149316.svg';
import FlechaAbajo from '../recursos/assets/icons/118740.svg';


function Categoria(){
    return(
        <div className="categoria__container">
            <p className="categoria__titulo">
              Restaurants <img
                            className="hamburguesa" 
                            src={Hamburguesa} 
                            alt='../recursos/assets/icons/1046784.svg'/>  
            </p>
            <button className="categoria__boton">
                <img
                    className="categoria__boton_imagen" 
                    src={Reloj} 
                    alt='../recursos/assets/icons/149316.svg'/>

                Delivery: <p className="now">Now</p>

                <img
                    className="categoria__boton_imagen_f" 
                    src={FlechaAbajo} 
                    alt='../recursos/assets/icons/118740.svg'/>
            </button>
        </div>
    );
};

export default Categoria;