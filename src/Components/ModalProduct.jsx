import React from 'react';
import {Link} from 'react-router-dom'

const ModalProduct = ({MuestraMenuRes}) => {
    return (  
      <article className="modal is-open" id="modal1">
        <div className="modal-container">
          <button className="modal-close">X</button>
            <p className="card-text">{MuestraMenuRes.nombre}</p>
              <img src={MuestraMenuRes.url} className="card-img-top img-responsive center-d-inline-block"/>
              <p className="card-text">{MuestraMenuRes.descripcion}</p>
        
              <h5>¿Tienes preguntas? </h5>
              <Link to={'/contactenos'} className='btn btn-success m-4'>¡Contactanos!</Link>
        </div>
      </article>
    );
}
 
export default ModalProduct;