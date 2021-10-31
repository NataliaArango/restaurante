import React from 'react';
import {Link} from 'react-router-dom'
const CardService = ({datosRes}) => {
    return (  
        <div className="card col-md-5 m-lg-4">
        <img src={datosRes.url} className="card-img-top img-responsive center-d-inline-block"/>
        <div className="card-body">
          <p className="card-text">{datosRes.nombre}</p>
          <p className="card-text">{datosRes.descripcion}</p>
        </div>
          <div className="card-footer">
          <Link to={'/servicios/reserva'} className='btn btn-success m-4 '>Reserva</Link>
          </div>
        </div>
    );
}
 
export default CardService;