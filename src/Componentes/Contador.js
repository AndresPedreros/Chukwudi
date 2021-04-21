//Hook para el contador 

//Librerias
import React from 'react';


//Estilos 
import './styles/Contador.css';

function useIncremento(max){
    const [count, setCount] = React.useState(1);

    if (count > max){
        setCount(0);
    }

    return [count, setCount];
}

export default function Contador() {
    const [count, setCount] = useIncremento(10);

    return(
        <div className="contador__contenedor">
            <button
                className="contador__menos" 
                onClick={() => {
                    setCount(count - 1);
                }}>
                -
            </button>
            {count}
            <button
                className="contador__mas" 
                onClick={() => {
                    setCount(count + 1);
                }}>
                +
            </button>
        </div>
    )
} 