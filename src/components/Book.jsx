import React, { Component } from 'react'

export default class Book extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
        <div>
            <div className='container d-flex justify-content-center'>
                <div className='card mt-4' >
                    <div className='card-header'>
                        {this.props.name}
                    </div>
                    <img src={this.props.image_url} className='card-img-top' alt="Imagen Personaje" />
                    <div className='card-body'>
                        <p className='card-text'>Especie: {this.props.species}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
