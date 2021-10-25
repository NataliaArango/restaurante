import React from 'react';
import Datos from '../utils/datos.json';
import Platos from './Productos';

const Menu = () => {
    return (
        <div>
            {Datos.PlatosRes.map((e) =>(
            <Platos datos={e} key={e.id}/>
            ))}
        </div>
    );
}
 
export default Menu;