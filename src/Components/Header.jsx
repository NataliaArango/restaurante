import React from 'react'
import {Link} from 'react-router-dom'
import Datos from '../utils/datos.json'

const Header = () => {
    return ( 
        <nav class=" j navbar navbar-expand-lg">
              
              <div class="container">
                <a class="navbar-brand" href="Inicio">
                <img class="logotipo" src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Logos%2Flogocircle.png?alt=media&token=9910b245-3c41-4207-b7b9-2d11081add66" alt="" width="100" height="105"/> 
                </a>
                <div class="todo">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    
                        <div class="navbar-nav " >
                        <Link to={'/Inicio'} className="nav-link">Inicio</Link>
                        <Link to={'/nosotros'} className="nav-link">Nosotros</Link>
                        <Link to={'/menu'} className="nav-link">Menú</Link>
                        <Link to={'/servicios'} className="nav-link">Servicios</Link>
                        <Link to={'/contactenos'} className="nav-link">Contactanos</Link>
                        </div>
                    </div>
                </div>
          
              </div>
              
            </nav>
     );
}
 
export default Header;