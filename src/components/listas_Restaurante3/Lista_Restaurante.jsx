import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Lista_Restaurante.css'

function Lista_Restaurante(){
    const [categoria, setCategoria] = useState(0)

    const ShowRestaurantes = function(props){
        const [listaRestaurantes, setListaRestaurantes] = useState([])

    const ObtenerRestaurantes = async function(){
        try{
            const response = await fetch(`https://california2023.azurewebsites.net/prueba/listado?categoria=${props.categoria}`)
            const data = await response.json()
            setListaRestaurantes(data.restaurantes)
        }
        catch(error){
            console.error("Hubo un error obteniendo los restaurantes")
        }
    }
    let content = []
    useEffect(function(){ObtenerRestaurantes()})
    for (let i = 0; i < listaRestaurantes.length; i++){
        let rest = listaRestaurantes[i]
        let elemento
        if (rest.estado == 1) {
            elemento = <div  className="col-lg-4 col-sm-6">
                <div className="menu-item bg-white shadow-on-hover">
                <article  className="menu-item">
            <img src={rest.imagen} alt={rest.nombre} className="photo"/>
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
                                    <h5 className="mt-1 mb-2"><a href=""> {rest.nombre}</a></h5>
                                    <p className="small">Baked salmon to a fresh salad made with chickpeas, arugula, herbs
                                        and olives</p>
                                    <Link to='/proyectoFinal/Platos2'><a href="">Ver mas</a></Link>
            <br />
            
            </article>
        </div> 
        </div>
        } else {
            elemento = <div  className="col-lg-4 col-sm-6">
                <div className="menu-item bg-white shadow-on-hover">
                <article  className="menu-item">
            <img src="https://complejoruralelmolinillo.com/wp-content/uploads/2018/01/restaurante.png" alt={rest.nombre} className="photo"/>
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
                                    <h5 className="mt-1 mb-2"><a href=""> {rest.nombre}</a></h5>
                                    <p className="small">Baked salmon to a fresh salad made with chickpeas, arugula, herbs
                                        and olives</p>
                                    <Link to='/proyectoFinal/Platos2'><a href="">Ver mas</a></Link>
            <br />
            
            </article>
        </div> 
        </div>
        }
        content.push(elemento)
    }
    return <div className='row gy-3'>
        {content}
    </div>
    }
    const PickerCategorias = function(){
        const categorias = ["Todos","Carnes","Mariscos","Pastas"]
        let content = []
        for (let i = 0; i<4; i++){
            let elemento
           if (i === categoria) {
            elemento = <div className='col centrar'><button type='button' className='selectorcurrent' onClick={function(){
                setCategoria(i)
            }}>{categorias[i]}</button></div>
           } else {
            elemento = <div className='col centrar'><button type='button' className='selector' onClick={function(){
                setCategoria(i)
            }}>{categorias[i]}</button></div>
           }
            content.push(elemento)
        }
        return <div>
            <div className='container'>
            <div className='row'>
                {content}
            </div>
            <br />
            <ShowRestaurantes categoria={categoria}/>
        </div>
        </div>
    }

    return <section>
        <div className='container'>
        <div className="row">
            <div className="col-12 intro-text">
                <h1>Explora nuestros mejores restaurantes</h1>
                <h6>Podras escoger entre los mejores restaurantes de Lima</h6>
            </div>
        </div>

        </div>
        <br />
        <PickerCategorias/>
        {/* <div className='row'>
            <div className='col'></div>
            <div className='col centrar'>
                <h2>Acciones de comensal</h2>
                <Link to="/2023-0-pw-entregable-2/agregarcarrito" style={{margin : "1%"}}>Agregar un plato al carrito</Link>
                <br />
                <Link to="/2023-0-pw-entregable-2/categorias" style={{margin : "1%"}}>Ver categorías de platos</Link>
                <br />
                <Link to="/2023-0-pw-entregable-2/ofertas" style={{margin : "1%"}}>Ver Ofertas</Link>
                </div>
            <div className='col'></div>
        </div> */}
    </section>
}

export default Lista_Restaurante