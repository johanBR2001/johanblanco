// import TopNav from "../Global/TopNav"
import { Link } from "react-router-dom"
import TablaSeguimiento from "./TablaSeguimiento"
import { useEffect, useState } from "react"
import '../css/estilos.css'
import swal from 'sweetalert';

const mostrarAlerta = () => {
    swal({
        title: "Buen trabajo!",
        text: "Se hay confirmado el registro",
        icon: "success",
        button: "Listo",
      });
}

function Seguimiento(){
    const codigo = JSON.parse(sessionStorage.getItem("CODIGO_BUSCADO"))
    const [listaPeliculas, setListaPeliculas] = useState([])
    //Obtener lista de peliculas filtradas por categoria

    const filtrarPelicula = async function (codigoId) {
        try {
            const response = await fetch(
                `https://california2023.azurewebsites.net/prueba/ObtenerRegistros?codigo=${codigoId}`
                )
            const data = await response.json()
            if(data.error===""){
                setListaPeliculas(data.Pedidos)
                console.log("ListaPedidos",data.Pedidos)
            }else{
                console.error(data.error)
            }
        }catch(error) {
            console.error("Error de comunicacion")
        }
    }
    useEffect(function() {
        filtrarPelicula(codigo)
    })
    //Caso 1:
    console.log("hola")
    console.log("Lista",listaPeliculas)
    
    const arr = JSON.stringify({
        arreglo : [listaPeliculas]
    })

    let lista = []

    const parsed = JSON.parse(arr)
    const arreglo = parsed.arreglo
    console.log("Efe")
    console.log(arreglo)
    
    for(let i = 0; i < arreglo[0].length; i++){
        let prod = arreglo[0][i]
        console.log("PEPE")
        lista.push(prod)
    }

    const data = JSON.stringify({arreglo : lista})

    sessionStorage.setItem("PEDIDOSMATCH" , data)

    if(lista.length==0){
        return <div>
            <br />
            <h1></h1>
            <h2 className="centrar"></h2>
        </div>
    }
    else{
        return <section id="registro">
        <div className="container">
            <div className="row">
            <h1>Pedido {codigo} registrado</h1>
            <br />
            <TablaSeguimiento/>
            {/* <p className="centrar">Recoge tus items listos con el código de confirmación <b>{codigo}</b></p> */}
        </div>
        </div>
        <div className="form-group text-center col-md-12 mt-3">
                    <button className="btn btn-outline-warning" onClick={mostrarAlerta}>CONFIRMAR REGISTRO</button>
                    </div>
                    <div className="form-group text-center col-md-12 mt-2"  >
                    <Link to='/proyectoFinal/AppCliente'><button className="btn btn-outline-warning" type="primary">Log Out</button></Link>      
                    </div>
        </section>
    }
}

export default Seguimiento