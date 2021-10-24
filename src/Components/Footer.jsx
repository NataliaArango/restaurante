import React, {Fragment} from "react";

const Footer = () => {
    return ( 
        <Fragment>
                <div className="footer ">
    
                    <div class="row text-center text-xs-center text-sm-left text-md-left">
                        <div class="col-xs-12 col-sm-4 col-md-4">
                            <h5>Mapa del sitio</h5>
                            <ul class="list-unstyled quick-links">
                                <li><a href="index.html"><i class="fa fa-angle-double-right"></i>Inicio</a></li>
                                <li><a href="nosotros.html"><i class="fa fa-angle-double-right"></i>Nosotros</a></li>
                                <li><a href="menu.html"><i class="fa fa-angle-double-right"></i>El menu</a></li>
                                <li><a href="servicios.html"><i class="fa fa-angle-double-right"></i>Servicios</a></li>
                                <li><a href="contactenos.html"><i class="fa fa-angle-double-right"></i>Contactenos</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </Fragment>

     );
}
 
export default Footer;