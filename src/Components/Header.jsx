import React from 'react'

const Header = () => {
    return ( 
        <nav class=" j navbar navbar-expand-lg">
              
              <div class="container">
                
                <a class="navbar-brand" href="index.html">
                </a>
                <div class="todo">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    
                        <div class="navbar-nav " >
                          <a class="nav-link" href="nosotros.html">Nosotros</a>
                          <a class="nav-link" href="menu.html">Menu</a>
                          <a class="nav-link" href="servicios.html">Servicios</a>
                          <a class="nav-link" href="contactenos.html">Contactenos</a>
                        </div>
                    </div>
                </div>
          
              </div>
              
            </nav>
     );
}
 
export default Header;