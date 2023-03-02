// import TopNav from "../Global/TopNav"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

function BuscarForm(){
    const navigate = useNavigate()

    const SeguimientoOk = function(){
        navigate("/proyectoFinal/Registro")
    }
    const [code, setCode] = useState("")
    const ButtonClick = function(){
        sessionStorage.setItem("CODIGO_BUSCADO", JSON.stringify(code))
        SeguimientoOk()
    }
    return <div className="container">
        <div className="row">
            <div className="col-12 intro-text">
            <h1>Registro de entrega de pedido</h1>
            {/* <label className="form-label centrar">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sint temporibus natus optio
                    eveniet nobis accusantium?</label> */}
            <input type="text" className="form-control"  placeholder="Codigo del pedido" value={code}
            onChange={function(evt){
                setCode(evt.target.value)
            }}/>
        </div>
        </div>
        <div className="form-group text-center col-md-12 mt-2">
        <button type="submit" className="btn btn-outline-warning"
        onClick={ButtonClick}>Buscar</button>
        </div>
   
    </div>
}
export default BuscarForm