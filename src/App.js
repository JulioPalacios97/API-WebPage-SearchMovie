import React, { Component } from 'react';
//importar los dos compoentes para usar el enrutado
import { Switch, Route } from 'react-router-dom';
import Details from './pages/Detail';
import Home from './pages/Home'
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:movieId' component={Details} />
        </Switch>
      </div>
    );

  }   
}

export default App;
