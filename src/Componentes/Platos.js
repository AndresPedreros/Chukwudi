//componente para visualizar y cargar los platos 

//Librerias
import React from 'react';
import { useEffect, useState } from 'react';

//Estilos /imagenes
import './styles/Platos.css'

import Estrella from '../recursos/assets/icons/149220.svg';

function useTiposPlatos() {

    const[TiposPlatos, setTiposPlatos] = useState([])

    useEffect(() => {
        fetch("json/products.json")
        .then(response => response.json())
        .then(datos =>{
            setTiposPlatos(datos)
        })
    }, [])
    
    return TiposPlatos;
}

export default function Platos(){

    const TiposPlatos = useTiposPlatos();
    if(TiposPlatos !==[]){
        return(
            TiposPlatos.map(products =>{
                return(
                    <ul className="platos__lista">
                        <li 
                            className="platos__categorias"
                            key={products.id}>
                                <img 
                                    className="platos__imagenes"
                                    src={products.image} 
                                    alt={products.name}/>
                                <p className="platos__tiempo">
                                    {products.time}
                                </p>
                                <p className="platos__texto">
                                    {products.name}                               
                                </p>
                                <p className="platos__datos">
                                    <img
                                        className="estrella" 
                                        src={Estrella} 
                                        alt='../recursos/assets/icons/149220.sgv'/>
                                        {products.qualification} &nbsp;
                                        <p className="platos__contenido">
                                        Comida deliciosa
                                        </p>
                                </p>
                        </li>
                    </ul>
                );
            })
        )
    }
    else{
        return(
            <h1>Loading</h1>
        )
    }
};