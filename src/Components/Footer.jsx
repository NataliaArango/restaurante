import React, {Fragment} from "react";
import {Link} from 'react-router-dom'

const Footer = () => {
    return ( 
        <Fragment>
                <div className="footer text-light">
    
                    <div class="row text-center text-xs-center text-sm-left text-md-left">
                                <div class="col-xs-12 col-sm-4 col-md-4">
                                    <h5>Mapa del sitio</h5>
                                    <ul class="list-unstyled quick-links">
                                        <li> <Link to={'/inicio'} className="nav-link">Inicio</Link></li>
                                        <li> <Link to={'/menu'} className="nav-link">Menú</Link></li>
                                        <li><Link to={'/servicios'} className="nav-link">Servicios</Link></li>
                                        <li><Link to={'/contactenos'} className="nav-link">Contactanos</Link></li>
                                        <li><Link to={'/nosotros'} className="nav-link">Nosotros</Link></li>
                                    </ul>
                                </div>
                        
                                
                            <div class="col-xs-12 col-sm-4 col-md-4">
                                <a class="navbar-brand" href="index.html">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/restaurante-fe3ed.appspot.com/o/Logos%2FLogoBlanco.png?alt=media&token=fea36fc8-fe84-41b5-9a00-5634ceb12b2e" height="200" widht="150"/>
                                </a>
                            </div>  


                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                                <ul class="list-unstyled list-inline social text-center">
                                    <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-facebook"></i></a></li>
                                    <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-google-plus"></i></a></li>
                                    <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" target="_blank" rel="noopener noreferrer"><i class="fa fa-envelope"></i></a></li>
                                </ul>
                            </div>
                        </div>	


                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center ">
                                <p>Helados y postres Zona Dulce Ltda. Direccion: Cl. 10 ##37, Cali. Reservas: reservas@zonadulce.com. Tel: 3125672354</p>
                                <p class="h6">©Copyright 2021.<a class="text-green ml-2" href="https://talento.juventic.co/" target="_blank">Juventic</a></p>
                            </div>
                        </div>	
                        </div> 
                </div>
        </Fragment>

     );
}
 
export default Footer;