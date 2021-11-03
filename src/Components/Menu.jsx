import React from 'react';
import DateService from '../utils/datos.json';
import Productos from './Productos';

const Menu = () => {
    return  (
        <div className="container">

            <div className="row justify-content-center">
                <h2 className="mt-5 mb-5 m-lg-5 col-md-9 display-3">Animate a probar uno de nuestros platillos</h2>
                <div className="col-md-12 mb-5">
                    <p className="text-justify-content-center blockquote">Tenemos gran variedad de platillos para todos los gustos</p>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" className="btn m-4">Menu descargable</button>
                </div>

                <h2 className="encabezado">Realiza pedidos en Linea</h2>

                <div className="col-12 p-5 m-5 row">
                    {DateService.MuestraMenuRes.map((e)=>(
                        <Productos 
                            MuestraMenuRes={e} key={e.id}/>   
                    ))}
                </div>       
            </div>
        </div>
    );
}

export default Menu;