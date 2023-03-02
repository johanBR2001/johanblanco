import FilaSeguimiento from "./FilaSeguimiento"

function TablaSeguimiento(){
    
   const arreglo = JSON.parse(sessionStorage.getItem("PEDIDOSMATCH")).arreglo

   let dato1 = []
   let dato2 = []
   let dato3 = []
   let dato4 = []
   for(let i = 0; i<arreglo.length; i++){
        let data = arreglo[i]
        console.log("SOMOS",data)
        dato1.push( <FilaSeguimiento restaurante = {data.restaurante.nombre} />)
   }
   for(let i = 0; i<arreglo.length; i++){
    let data = arreglo[i]
    console.log("SOMOS",data)
    dato2.push( <FilaSeguimiento producto = {data.producto} />)
}
for(let i = 0; i<arreglo.length; i++){
    let data = arreglo[i]
    console.log("SOMOS",data)
    dato3.push( <FilaSeguimiento estado = {data.estado}/>)
}
for(let i = 0; i<arreglo.length; i++){
    let data = arreglo[i]
    console.log("SOMOS",data)
    dato4.push( <FilaSeguimiento estado = {data.imagen}/>)
}

    return <form action="#" className="row justify-content-center">
     <div className="col-lg-6">
    <div className="registro bg-white p-5 text-center">
        <p className="mb-0 mt-2"><b>Nombre del Restaurante: </b> <div className="d-flex justify-content-center">{dato1}</div></p>   
        <p className="mb-0 mt-2"><b>Nombre del Producto: </b><div className="d-flex justify-content-center"> {dato2}</div></p>
        <p className="mb-0 mt-2"><b>Estado del pedido: </b><div className="d-flex justify-content-center"> {dato3}</div></p>
        


    </div>
                    </div>
                    </form>
}

export default TablaSeguimiento