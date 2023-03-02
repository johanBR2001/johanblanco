function FilaSeguimiento(props){
    let arr=['Confirmado','En preparación','Entregado']
    return <tr>
        <td>{props.restaurante}</td>
        <td>{props.producto}</td>
        <td>{props.imagen}</td>
        <td>
            {
            arr[props.estado-1]
            }
        </td>
    </tr>
}

export default FilaSeguimiento