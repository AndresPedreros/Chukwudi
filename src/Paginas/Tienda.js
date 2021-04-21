//Pagina de la tienda
//Sera la encargada de tener todos los componetes


//Librerias 
import React from 'react';
import {Link} from 'react-router-dom';


//Componentes
import Busqueda from '../Componentes/Busqueda';
import Publicidad from '../Componentes/Publicidad';
import Categoria from '../Componentes/Categoria';
import Tipos from '../Componentes/Tipos';
import Platos from '../Componentes/Platos';
import Cuenta from '../Componentes/Cuenta';
import Contador from '../Componentes/Contador';


//Estilos / Imagenes

import './styles/Tienda.css'
import './styles/Barra.css'

import Menu from '../Imagenes/Menu.jpg';
import Emoji from '../recursos/assets/icons/emoji.png';
import Perfil from '../recursos/assets/icons/747376.svg';
import Reloj from '../recursos/assets/icons/149316.svg';
import Flechita from '../recursos/assets/icons/109617.svg';


class Tienda extends React.Component{

    

    render(){
        return( 
            <div className="pagina">
                <div className="container">
                    <div className="body">  
                        <ul className="contenido">
                            <li className="header">
                                <img 
                                    className="menu"
                                    src={Menu}
                                    alt="Icono de menu"/>
                                 <h1 className="Titulo">
                                    Chukwudi
                                </h1>
                                <div className="header__barra">
                                    <Busqueda/>
                                </div>
                            </li>
                            <li className="publicidad">
                                <Publicidad/>
                            </li>
                            <li className="categoria">
                                <Categoria/>
                            </li>
                            <li className="comida">
                               <Tipos/>
                               <button className="boton__comida">
                               </button>
                            </li>
                            <li className="platos">
                                <Platos/>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="barra">
                        <ul className="barra_clasi">
                            <li className="perfil">
                                <img
                                    className="perfil__imagen"
                                    src={Perfil} 
                                    alt='../recursos/assets/icons/747376.svg'/>
                                <p  className="perfil__texto">
                                    6
                                </p>
                            </li>
                            <li>
                                <h1
                                    className="text_orden"
                                >My <img 
                                            className="emoji"
                                            src={Emoji} 
                                            alt="Emoji"/> <br/> 
                                    order</h1>    
                            </li> 
                            <li className="temporizador">
                                <div className="temporizador_direccion" >
                                    <p className="direccion" >
                                        625 St Marks Ave
                                    </p>
                                    <Link
                                        className="direccion__edit"
                                        to="/CambioDireccion/"
                                        >
                                            <p>
                                                Edit
                                            </p>
                                    </Link>
                                </div>
                                <div className="temporizador__reloj">
                                    <div className="reloj__box">
                                    <img 
                                        className="reloj__temp"
                                        src={Reloj} 
                                        alt='../recursos/assets/icons/149316.svg'/>
                                    </div>
                                    <p className="direccion__min">
                                        35 min
                                    </p>
                                    <Link
                                        className="direccion__edit"
                                        to="/CambioTiempo/"
                                        >
                                            <p>
                                                Choose time
                                            </p>
                                    </Link>
                                </div>
                            </li>   
                            
                            <li className="cuenta">
                                <Cuenta/> 
                            </li>
                            <li className="total">
                                <p className="total__texto">
                                    Total:
                                </p>
                                <p className="total__valor">
                                    $50.50
                                </p>
                            </li>
                            <li className="cantidad">
                                    <Contador/>                               
                                <div>
                                    <p className="cantidad_checkout">
                                        Checkout <img 
                                                    className="cantidad__flechita"
                                                    src={Flechita}
                                                    alt='../recursos/assets/icons/109617.svg'
                                                />
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

export default Tienda;