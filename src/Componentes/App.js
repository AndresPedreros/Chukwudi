//Aplicacion Chukwudi

//Librerias 
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

//Paginas
import Tienda from '../Paginas/Tienda';

function App(){
    return(
        <BrowserRouter>
            <Route exact path = "/" component={Tienda} />
        </BrowserRouter>
    );
}

export default App;

