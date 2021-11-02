import React from 'react'
import {Link} from 'react-router-dom'
import Datos from '../utils/datos.json'

const Header = () => {
    return ( 
        <nav class=" j navbar navbar-expand-lg">
              
              <div class="container">
                <imag> LogoCircle </imag>
               
                <a class="navbar-brand" href="Inicio">
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