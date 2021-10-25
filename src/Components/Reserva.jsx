import React,{useState} from 'react';


const Reserva = () => {

    const [error, UpdateError] = useState(false);
    const [Reserva,UpdateReserva] = useState({
        Nombre: "",
        Telefono: "",
        Email: "",
        Servicio: "",
        NumPer: "",
        Fecha:"",
        Hora:"",
        Indicaciones:"",
      });
      const {Nombre,Telefono,Email,Servicio,NumPer,Fecha,Hora,Indicaciones} = Reserva;

      const handleChangeReserva = e =>{

      }
     const SendEmail = e =>{
          
      }

    return (
        <div>
        {error ?<p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p>:null}
       <div className="container">
           <div className="row">
               <form 
                className ="col card text-white bg-transparent mb-5 pt-5 pb-2"
                onSubmit={SendEmail}
              >
                   <fieldset>
                       <legend className="text-center">Buscador Letras Canciones</legend>
                       <div className="row">
                           <div className="col-md-4">
                               <div className="form-group">
                                   <label>Nombre</label>
                                   <input 
                                   type="text"
                                   className="form-control"
                                   name="Nombre"
                                   placeholder="Nombre"
                                   onChange={handleChangeReserva}
                                   value={Nombre}
                                   />
                               </div>
                           </div>
                           <div className="col-md-4">
                           <div className="form-group">
                                   <label>Telefono</label>
                                   <input 
                                   type="number"
                                   className="form-control"
                                   name="Telefono"
                                   placeholder="Telefono"
                                   onChange={handleChangeReserva}
                                   value={Telefono}
                                   />
                               </div>
                           </div>
                           <div className="col-md-4">
                           <div className="form-group">
                                   <label htmlFor="email">Email</label>
                                   <input 
                                   type="email"
                                   className="form-control"
                                   name="Email"
                                   placeholder="Tu Email"
                                   onChange={handleChangeReserva}
                                   value={Email}
                                   />
                               </div>
                           </div>
                           <div className="col-md-4">
                           <div className="form-group">
                                   <label >Numero de personas</label>
                                   <input 
                                   type="number"
                                   className="form-control"
                                   name="NumPer"
                                   placeholder="Cantidad"
                                   onChange={handleChangeReserva}
                                   value={NumPer}
                                   />
                               </div>
                           </div>
                           <div className="col-md-4">
                           <div className="form-group">
                           <label htmlFor="exampleFormControlSelect1">Seleccione servicio</label>
                            <select 
                            className="form-control" 
                            onChange={handleChangeReserva}
                            value={Servicio}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                                   
                                
                               </div>
                           </div>
                       </div>
                       <button type="submit" className=" btn  btn-success mt-5" >Buscar</button>
                   </fieldset>

               </form>
           </div>
       </div>
   </div>
    
    );
}
 
export default Reserva;