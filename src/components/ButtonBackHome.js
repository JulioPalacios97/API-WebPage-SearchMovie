import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class buttonBackHomeComponent extends Component {
    render () {
        return (
            <div>
                <Link 
                    className='button is-info' 
                    to='/'>
                    Volver a la portada
                </Link>
            </div>
        );
    }
}

export default buttonBackHomeComponent;