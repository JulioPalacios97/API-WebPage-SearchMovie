import React, { Component } from 'react';
import propTypes from 'prop-types';


//hacemos una constante con el parametro de la api que recivimos
const API_KEY  = '2fa28908'

class detailComponent extends Component {
    static propTypes = {
        //ya no recibe props sino url, shape recibe los parametros de la url
        match: propTypes.shape({
            params: propTypes.object,
            isExact: propTypes.bool,
            path: propTypes.string,
            url: propTypes.string
        })
    }

    state = { movie: {} }
    _fetchMovie ({id}) {
        //metodo fecth para usar el enpoint pasandole como parametros API_KEY y el conmponente inputMovie
        fetch(` http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
        //el fetch es a sincrono y debemos pasarle una respusta que sea json
        .then(res => res.json())
        .then(movie => {
            console.log({movie})
            this.setState({movie})
        })
    }

    _goBack () {
        window.history.back()
    }

    //renderiza el componente de _fetchMovie
    componentDidMount () {
        console.log(this.props)
        const { movieId } = this.props.match.params
        this._fetchMovie({id: movieId})
    }

    render () {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return (
            <div>
                <button onClick={this._goBack}>Volver</button>
                <h1>{Title}</h1>
                <img src={Poster} />  
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        );
    }
}

export default detailComponent;