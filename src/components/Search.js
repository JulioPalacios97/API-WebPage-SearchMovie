import React, { Component } from 'react';

//hacemos una constante con el parametro de la api que recivimos
const API_KEY  = '2fa28908'

class searchComponent extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        //actualizar nuestro elemento y guardando las busquedas que estemos haciendo
        this.setState({ inputMovie: e.target.value })
    }
    
    //funcion para cpntrolar el resultado de la busqueda
    _handleSubmit = (e) => {
        e.preventDefault()
        //extraer inputMovie del state
        const { inputMovie } = this.state
        //metodo fecth para usar el enpoint pasandole como parametros API_KEY y el conmponente inputMovie
        fetch(` http://www.omdbapi.com/?s=${inputMovie}&apikey=${API_KEY}`)
            //el fetch es a sincrono y debemos pasarle una respusta que sea json
            .then(res => res.json())
            .then(results => {
                const { Search = [], totalResults = '0' } = results
                console.log({Search, totalResults})
                //este es el metodo que actualizara nuestro componente en App
                this.props.onResults(Search)
            })
    }

    render () {
        return (
            <form onSubmit={this._handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input 
                        className="input"
                        onChange={this._handleChange} 
                        type="text" 
                        placeholder="Movie to search...">
                    </input>
                </div>
                <div className="control">
                    <button className="button is-info">
                        Search
                    </button>
                </div>
            </div>
            </form>
        );
    }
}

export default searchComponent;