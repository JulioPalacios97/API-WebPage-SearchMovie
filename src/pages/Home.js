import React, { Component } from 'react';
import Title from '../components/Title';
import Search from '../components/Search';
import MovieLists from '../components/MovieList';

class homeComponent extends Component {
    //controlaremos cunando hemos iniciado una busqueda
    state = { usedSearch: false, results: [] }

    _handelResults = (results) => {
        this.setState({ results, usedSearch: true })
    }
    //muestra el resultado de la busqueda
    _renderResults () {
        return this.state.results.length === 0
            ? <p>Sorry! <span role="img" aria-label="triste">😔</span> Results not found</p>
            : <MovieLists movies={this.state.results} />
    }
 
    render () {
        return (
            <div>
                <Title />
                    <div className='Search-wrapper'>
                        <Search onResults={this._handelResults} />
                    </div>
                    {this.state.usedSearch
                        ? this._renderResults()
                        : <small>Use the form to search a movie</small> 
                    }
            </div>
        );
    }
}

export default homeComponent;
