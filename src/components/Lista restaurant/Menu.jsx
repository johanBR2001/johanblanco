import React from "react";
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import Platos2 from '../REQ_4/Platos2'
const Menu = ({ items }) => {
  return (
    <div className="container">
       <div className="row gy-3">
      {items.map((item) => {
        const { id, tittle, img} = item;
        return (
          
          <div  className="col-lg-4 col-sm-6">
              <div className="menu-item bg-white shadow-on-hover">
          <article key={id} className="menu-item">
          <img src={img} alt="" className="photo"/>
                                
                                    <div>
                                        <span>Rated(5.4)</span>
                                        <span className="stars">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-half-fill"></i>
                                        </span>
                                    </div>
                                    <h5 className="mt-1 mb-2"><a href="">{tittle}</a></h5>
                                    <p className="small">Baked salmon to a fresh salad made with chickpeas, arugula, herbs
                                        and olives</p>
                                        <Link to='/proyectoFinal/Platos2'><a href="">Ver mas</a></Link>
                                        <Routes>
                                         <Route path='/proyectoFinal/Platos2' element={<Platos2 />} />
                                     </Routes>
                                
          </article>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Menu;

