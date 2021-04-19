import React, {Component} from 'react';
import Buscador from './components/Buscador';
import Result from './components/Result';

class App extends Component {
 
  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const Url = `https://pixabay.com/api/?key=21162331-7dc994497749a6de9aa622e41&q=${termino}&per_page=10&page=${pagina}`;
     console.log(Url);
    fetch(Url)
      .then(Res => Res.json())
      .then(Result => this.setState({imagenes: Result.hits}))
  }

  datosBusqueda = (termino) => {
      this.setState({
        termino: termino,
        pagina: 1
      }, () => { this.consultarApi()})
  }

  scrollEfecto = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start')
  }

  paginaAnterior = () => {
    // Leer el Estado de la Pagina Actual.
      let pagina = this.state.pagina;
    // Sí la el estado de la Pagina tiene valor (1) No se puede restar.
      if(pagina === 1) return null;
    // Incrementar la Paginacion.
      pagina -= 1;
    // Actualizar el Estado de la Paginacion.
      this.setState( {pagina}, () => { this.consultarApi(); this.scrollEfecto();} )  
  }

  paginaSiguiente = () => {
    // Leer el Estado de la Pagina Actual.
      let pagina = this.state.pagina;
    // Incrementar la Paginacion.
      pagina += 1;
    // Actualizar el Estado de la Paginacion.
      this.setState( {pagina}, () => { this.consultarApi(); this.scrollEfecto();} )  
  }

  render() { 
    return ( 
      <div className='app container'>
        <div className='jumbotron'>
            <p className='lead text-center'>Buscador de Imagenes !!!</p>
            <Buscador 
                 mensaje='Burcar...'
                 busqueda={this.datosBusqueda}
                 />       
        </div>
      <div className='row justify-content-center'>
        <Result 
             imagenes={this.state.imagenes}
             paginaAnterior={this.paginaAnterior}
             paginaSiguiente={this.paginaSiguiente}
             />
      </div>
      </div>
     );
  }
}
 
export default App;