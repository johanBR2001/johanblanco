import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import AppCliente  from './components/REQ1/AppCliente';
import Platos from '../src/components/REQ_5/Platos'
import Confirmacion from '../src/components/REQ_16/Confirmacion'
// import Menu from './components/routing-examples/Menu';
import Platos2 from './components/REQ_4/Platos2'
import Car from './components/REQ6/Car'
import Checkout from './components/REQ7/Checkout';
import Pedido from './components/REQ8/Pedido'
import AppRestaurante from './components/REQ9/AppRestaurante'
import Dishes from './components/REQ10/Dishes';
import Realizado from './components/REQ13/Realizado';
import Finish from './components/REQ15/Finish';
// import App1 from './components/Lista restaurant/App1'
// import Promocion from "./components/sorpresa/Promocion";
import Promociones from './components/sorpresa/Promociones';
import Lista_Restaurante from './components/listas_Restaurante3/Lista_Restaurante';
import Seguimiento from './components/Seguimiento/Seguimiento';
import BuscarPedido from './components/Seguimiento/BuscarPedido';
const app = () => {
  return (
    <Router>
     
      
        <Routes>
          <Route path='/proyectoFinal/' element={<AppCliente />} />
          <Route path='/proyectoFinal/Platos' element={<Platos />} />
          <Route path='/proyectoFinal/Platos2' element={<Platos2 />} />
          <Route path='/proyectoFinal/Car' element={<Car />} />
          <Route path='/proyectoFinal/Checkout' element={<Checkout />} />
          <Route path='/proyectoFinal/Pedido' element={<Pedido />} />
          <Route path='/proyectoFinal/AppRestaurante' element={<AppRestaurante />} />
          <Route path='/proyectoFinal/Dishes' element={<Dishes />} />
          <Route path='/proyectoFinal/Realizado' element={<Realizado />} />
          <Route path='/proyectoFinal/Finish' element={<Finish />} />
          <Route path='/proyectoFinal/Confirmacion' element={<Confirmacion />} />
          <Route path='/proyectoFinal/AppCliente' element={<AppCliente />} />
          {/* <Route path= '/proyectoFinal/lista/*' element ={<App1/>}/> */}
          <Route path="/proyectoFinal/Promociones" element={<Promociones />} />
          <Route path="/proyectoFinal/Lista_Restaurante" element={<Lista_Restaurante/>} />
          <Route path="/proyectoFinal/Registro" element={<Seguimiento/>} />
          <Route path="/proyectoFinal/BuscarPedido" element={<BuscarPedido/>} />

          
        </Routes>
      
    </Router>
  )
}

export default app