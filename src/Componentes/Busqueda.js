//Componente de busqueda

//Librerias 
import React from 'react';

//Estilos / Imagenes
import './styles/Busqueda.css';

class Busqueda extends React.Component{
    render(){
        return(
			<form className="busqueda">
                <button
                    className="boton" 
                    type="submit">
                </button> 
                <input 
                    className="search" 
                    type="search" 
                    placeholder="Search" 
                    autofocus required />
                   
            </form>
        );
    }
};

export default Busqueda;