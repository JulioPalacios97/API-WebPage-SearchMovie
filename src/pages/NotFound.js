import React, { Component } from 'react';
import ButtonBack from '../components/ButtonBackHome';

class notFoundComponent extends Component {
    render () {
        return (
            <div>
                <h1 className='title'>404!</h1>
                <h2 className='subtitle'>No existe la pagina</h2>
                <ButtonBack />
            </div>
        );
    }
}

export default notFoundComponent;