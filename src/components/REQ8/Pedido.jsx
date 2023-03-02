import React from "react";
import Cod from "./Cod";
import "../css/Cod.css"
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import AppRestaurante from "../REQ9/AppRestaurante";

function Pedido (){
    return(
        <div>
            <h1>VERIFICACION DE PEDIDO REALIZADO POR CODIGO</h1>
            <div className="pedidos">
                <Cod
                rest = "LONGHORN"
                plato = "BIFE ANGOSTO"
                codi = "CODIGO:RLH-356"/>
                <Cod
                rest = "LONGHORN"
                plato = "LASAGNA DE CARNE"
                codi = "CODIGO:RLH-789"/>
                <Cod
                rest = "LONGHORN"
                plato = "PARRILLA 4 SABORES"
                codi = "CODIGO:RLH-124"/>
                <Cod
                rest = "LONGHORN"
                plato = "LOMO SALTADO CON TACUTACU"
                codi = "CODIGO:RLH-971"/>
            </div>


            <Link to='/proyectoFinal/AppRestaurante'><button className="btn btn-outline-warning"  type="primary">Ir a Login Restaurante</button></Link>
                                        <Routes>
                                         <Route path='/proyectoFinal/AppRestaurante' element={<AppRestaurante />} />
                                     </Routes>
        </div>

        
    )
}

export default Pedido