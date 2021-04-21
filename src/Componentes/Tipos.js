//Componente de comida

//Librerias 
import React from 'react';
import { useEffect, useState } from 'react';


//Estilos
import './styles/Tipos.css'


function useTiposComida() {

    const[TiposComida, setTiposComida] = useState([])

    useEffect(() => {
        fetch("json/categories.json")
        .then(response => response.json())
        .then(datos =>{
            setTiposComida(datos)
        })
    }, [])
    
    return TiposComida;
};


export default function Tipos() {

    const TiposComida = useTiposComida();

    console.log(TiposComida)

    if(TiposComida !==[]){
        return(
            TiposComida.map(categorias =>{
                return(
                    <li 
                        className="tipos__categorias"
                        key={categorias.id}>
                        
                        <div className="tipos__ventana">
                            <p className="tipos__contenido">
                                <img 
                                    className="tipos__imagenes"
                                    src={categorias.icon} 
                                    alt={categorias.name}/>
                                <p className="tipos__texto">
                                    {categorias.name}
                                </p>
                                
                            </p>
                        </div>
                    </li>
                    );
            })
        )
    }
    else{
        return(
            <h1>Loading</h1>
        )
    }
    
}