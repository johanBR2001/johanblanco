import { useState } from "react"
import '../css/LoginRestaurante.css'

function LoginRestaurante(props) {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")

    const butOnClick = function() {
        console.log("USuario:", usuario)
        console.log("Password:", password)
        props.onLoginOk(usuario, password)
    }

    return <div className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-dark text-white">
            <div className="card-body p-5  text-center">
  
              <div className="mb-md-5 mt-md-4 pb-5">
  
                <h2 className="fw-bold mb-2 text-uppercase">Inicio de sesion Restaurante</h2>
                <p className="text-white-50 mb-5">Ingrese su usuario y contraseña!</p>
  
                <div className="form-outline form-white mb-4">
                  <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder="Usuario"
                  value={ usuario }
                    onChange={ function(evt) { setUsuario(evt.target.value) } }></input>
                  
                </div>
  
                <div className="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder="Contraseña"
                  value={ password } 
                onChange={ function(evt) { setPassword(evt.target.value) } }></input>
                </div>
  
                <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Olvido su contraseña?</a></p>
  
                <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={ butOnClick }>Login</button>
  
                <div className="d-flex justify-content-center text-center mt-4 pt-1">
                  <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                  <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                  <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                </div>
  
              </div>
  
              <div>
                <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                </p>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
}

export default LoginRestaurante






