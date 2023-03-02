import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

const RestaurantCard = ({ data }) => (
  <div className="container justify-content-center">
    <br></br>
    <img className="img-thumbnail  justify-content-center w-50 p-3" src={data.imagen} alt={data.nombre} />
    <h3 className="text-light">{data.nombre}</h3>
    <p className="text-light">{data.descripción}</p>
    <p className="text-light">Cupon: {data.cupon} soles.</p>
    <button className="btn btn-outline-warning">
      Comprar
    </button>
    <Link to='/proyectoFinal/Platos2'><button className="btn btn-outline-warning mx-5">
      Volver
    </button></Link>
  </div>
);
const Promociones = () => {
  const [promocionDatos, setOpromocionDatos] = useState({});

  useEffect(() => {
    const getData = async () => {
      const rawResponse = await fetch("https://california2023.azurewebsites.net/prueba/Promocion");
      await rawResponse.json().then((data) => {
        setOpromocionDatos(data);
        console.log(data);
      });
    };

    getData();
  }, []);

//   const restaurants = [
//     {
//       id: 1,
//       name: "BEMBOS",
//       img: burger,
//       offers: [
//         { id: 1, description: "20% de descuento en los martes" },
//         { id: 2, description: "Combo familia a $30" },
//       ],
//     },
//     {
//       id: 2,
//       name: "CAFETERIA O",
//       img: lomo,
//       offers: [],
//     },
//     {
//       id: 3,
//       name: "SUSHI BAR",
//       img: chifa,
//       offers: [
//         { id: 3, description: "Rolls a mitad de precio los jueves" },
//         {
//           id: 4,
//           description:
//             "Oferta de bienvenida: 10% de descuento en su primer pedido",
//         },
//       ],
//     },
//   ];

  return (
    
      
      <div>
        {promocionDatos.promocion == null ? (
          <div>No hay ofertas.</div>
        ) : (
            promocionDatos.promocion.map((promocion) => {
            return <RestaurantCard data={promocion} />;
            // return <div>{oferta.nombre}</div>;
          })
        )}
        {/* {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))} */}
      </div>
    
  );
};

export default Promociones;