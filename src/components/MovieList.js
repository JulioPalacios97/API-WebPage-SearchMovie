import React, { Component } from 'react';
import propTypes from 'prop-types';
import Movie from './Movie';

class movieListComponent extends Component {
    static propTypes = {
        movies: propTypes.array
    }
    render () {
        //este es la prop que muestra los resultados de la busqueda
        const { movies } = this.props
        return (
            <div className='MovieList'>
                {
                    movies.map(movie => {
                        return (
                            <div key={movie.imdbID} className='MovieList-item'>
                                <Movie
                                    id={movie.imdbID} 
                                    title={movie.Title}
                                    year={movie.Year}
                                    poster={movie.Poster}
                                />
                            </div>
                          
                        )
                      })
                }
            </div>
        )
      }
    
}

export default movieListComponent;