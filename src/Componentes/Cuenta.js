//componente para visualizar y cargar los platos 

//Librerias
import React from 'react';
import { useEffect, useState } from 'react';

//Estilos /imagenes
import './styles/Cuenta.css'


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
                    <ul className="cuenta__lista">
                        <li 
                            className="cuenta__categorias"
                            key={products.id}>
                                <img 
                                    className="cuenta__imagenes"
                                    src={products.image} 
                                    alt={products.name}/>
                                <p className="cuenta__tiempo">
                                    1x 
                                </p>
                                <p className="cuenta__texto">
                                    {products.name}                         
                                </p>
                                <p className="cuenta__datos">
                                    {products.price}
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