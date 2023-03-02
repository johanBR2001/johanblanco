import { useNavigate } from "react-router-dom";
import LoginCliente from "./LoginCliente"

function AppCliente() {

    const navigate = useNavigate()

    const loginHttp = async function(usuario, password) {
        const response = await fetch(
            "https://california2023.azurewebsites.net/prueba/loginCliente",
            {
                method : "POST",
                body : JSON.stringify(
                    { 
                        usuario : usuario, 
                        password : password 
                    }
                )
            }
        )
        const data = await response.json()

        return data.error
    }

    const onLoginOk = async function(
        usuario, password
    ) {
        const error = await loginHttp(usuario, password)
        if (error === "") {
            // Login correcto
            const dataUsuario = {
                username : usuario,
                password : password
            }

            // JSON.stringify : convierte objetos js a JSON (string)
            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            // Guardado en session storage
            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)

            navigate("/proyectoFinal/Lista_Restaurante", {
                state : {
                    username : usuario
                }
            })
        }else {
            console.error(error)
        }
    }

    return   <LoginCliente 
    onLoginOk={ onLoginOk } />
                
           
    
    
}

export default AppCliente