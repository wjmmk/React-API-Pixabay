import React, {Component} from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        //console.log(this.busquedaRef.current.value)
        // Esta linea Obtiene el Valor de un Objeto Ref y lo asigna a una variable
        const ObjetoAConsultar = this.busquedaRef.current.value;
        // Esta linea le pasa el valor obtenidode Ref en el formulario al Componente padre por medio de los Props.
        this.props.busqueda(ObjetoAConsultar);
        e.target.reset();
    }
    
    render() { 
        return ( 
            <form onSubmit={this.obtenerDatos}>
                <div className='row'>
                    <div className='form-group col-md-8'>
                        <input ref={this.busquedaRef}
                               type='text' 
                               className='form-control form-control-lg'
                               placeholder='Realiza tu Busqueda... EJ: Futbol'/>
                    </div>
                    <div className='form-group col-md-4'>
                        <input type='submit' 
                               className='btn btn-lg btn-danger btn-block'
                               value='Buscar'/>
                    </div>
                </div>
            </form>
         );
    }
}
 
export default Buscador;
