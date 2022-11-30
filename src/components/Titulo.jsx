import React, { Component } from 'react'

export default class Titulo extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
        <div>
            <div>
                <nav className='navbar navbar-dark bg-primary mt-4'>
                    <div className='container-fluid d-flex justify-content-center'>
                        <a href="#" className='navbar-brand'>{this.props.title}</a>
                    </div>
                </nav>
            </div>
        </div>
        )
    }
}
