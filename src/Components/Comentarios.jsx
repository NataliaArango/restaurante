import React from 'react';

const Comentarios = ({comentariosRes}) => {
    return ( 
        <div className="container">
        <div className="row comentarios justify-content-center">
          <div className="col-6">
            <form action="" className="form_comentarios d-flex justify-content-end flex-wrap">
              <textarea name="" id="" placeholder="Comentario"></textarea>
              <button className="btn" type="button">Comentar</button>
            </form>

            <div className="media">
              <img src={comentariosRes.url} width="64" height="64" alt=""></img>

              <div className="media-body text-left">
                <p className="nombre">{comentariosRes.nombre}<span>{comentariosRes.fecha}</span></p>
                <p className="comentario">{comentariosRes.comentario}</p>
                <div className="botones text-right">
                  <a href="">Editar</a>
                  <a href="">Borrar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Comentarios;