import React, { Component } from 'react';
import Details from './pages/Detail';
import Home from './pages/Home'
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {

  render() {
    //se declaran dos constantes para que nos rediriga a la url que seleccionamos de la movie
    const url = new URL(document.location)
    const page = url.searchParams.has('id')
      ? <Details id={url.searchParams.get('id')} />
      : <Home />

    return (
      <div className="App">
        {page}
      </div>
    );

  }
}

export default App;
