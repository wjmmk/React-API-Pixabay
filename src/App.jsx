import React, {Component} from 'react';
import Buscador from './components/Buscador';
import Result from './components/Result';

class App extends Component {
 
  state = {
    termino: '',
    imagenes: []
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const Url = `https://pixabay.com/api/?key=21162331-7dc994497749a6de9aa622e41&q=${termino}`;
    // console.log(Url);
    fetch(Url)
      .then(Res => Res.json())
      .then(Result => this.setState({imagenes: Result.hits}))
  }

  datosBusqueda = (termino) => {
      this.setState({termino}, () => { this.consultarApi()})
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
        <Result imagenes={this.state.imagenes}/>
      </div>
     );
  }
}
 
export default App;