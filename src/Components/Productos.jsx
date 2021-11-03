import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import {Button,Modal } from 'antd';
const Productos = ({MuestraMenuRes}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    return (  
      <div className="card col-md-5 m-lg-4">
        <img src={MuestraMenuRes.url} className="card-img-top img-responsive center-d-inline-block"/>
        
        <div className="card-body">
          <p className="card-text">{MuestraMenuRes.nombre}</p>
          <p className="card-text">{MuestraMenuRes.descripcion}</p>
        </div>

        <div className="card-footer">
         <>
         <Button type="primary" onClick={showModal}>
             Open Modal
         </Button>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        </>
          <Link to={'/menu/carrito'} className='btn btn-success m-4'>Agregar al carrito</Link>
        </div>
      </div>
    );
}

export default Productos;