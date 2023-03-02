import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/LoginCliente.css'


function LoginCliente(props) {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")

    const butOnClick = function() {
        console.log("USuario:", usuario)
        console.log("Password:", password)
        props.onLoginOk(usuario, password)
    }

    return <section className="vh-100">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" >
            <div className="card-body p-5 text-center">
  
              <h3 className="titulo-color mb-5">Inicio sesion Cliente</h3>
  
              <div className="form-outline mb-4">
                <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Usuario"
                value={ usuario }
                onChange={ function(evt) { setUsuario(evt.target.value) } }/>
                
              </div>
  
              <div className="form-outline mb-4">
                <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Contraseña"
                value={ password }
                onChange={ function(evt) { setPassword(evt.target.value) } }/>
              </div>
  
             
  
              <button className="btn btn-primary btn-lg btn-block" type="submit"  onClick={ butOnClick }>Login</button>
  
  <div className="my-4 ">
    <div className="pb-2">
              <button className="btn-google btn btn-lg btn-block btn-primary"
              type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
              </div>
              <div>
              <button className="btn-facebook btn btn-lg btn-block btn-primary mb-2" 
              type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
              </div>
  
  </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

}




export default LoginCliente

 




                


          