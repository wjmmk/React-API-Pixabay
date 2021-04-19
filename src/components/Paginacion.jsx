import React, { Fragment } from 'react';

const Paginacion = (props) => {
    return ( 
        <Fragment>
            <div className='py-3'>
                <button onClick={props.paginaAnterior} type='button' className='btn btn-info mr-1'> Anterior &larr;</button>
                <button onClick={props.paginaSiguiente} type='button' className='btn btn-info'> Siguiente &rarr;</button>
            </div>
        </Fragment>
     );
}
 
export default Paginacion;