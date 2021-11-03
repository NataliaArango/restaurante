import React from 'react';
import DateService from '../utils/datos.json';
import {Link} from 'react-router-dom'
import ModalProduct from"./ModalProduct"
import { useModal } from "../Hooks/useModal.jsx"

const Productos = ({MuestraMenuRes}) => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

    return (  
      <div className="card col-md-5 m-lg-4">
        <img src={MuestraMenuRes.url} className="card-img-top img-responsive center-d-inline-block"/>
        
        <div className="card-body">
          <p className="card-text">{MuestraMenuRes.nombre}</p>
          <p className="card-text">{MuestraMenuRes.descripcion}</p>
        </div>

        <div className="card-footer">
          <button onClick={openModal1}>{MuestraMenuRes.nombre}</button>

            <ModalProduct isOpen={isOpenModal1}>
              {DateService.MuestraMenuRes.map((e)=>(
                <Productos 
                    MuestraMenuRes={e} key={e.id}/>   
              ))}
            </ModalProduct>

          <Link to={'/menu/carrito'} className='btn btn-success m-4'>Agregar al carrito</Link>
        </div>
      </div>
    );
}

export default Productos;