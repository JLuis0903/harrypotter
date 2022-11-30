import React, { Component } from 'react'
import Book from './Book';

export default class ListaBook extends Component {
    constructor(props){
        super(props);

        this.state = {
            books:[]
        }
    }
    fetchApi = async() => {
        let resp = await fetch('https://legacy--api.herokuapp.com/api/v1/characters');
        let data = await resp.json();

        this.setState({

            books:[...data]
        })
    }

    componentDidMount(){
        this.fetchApi()
    }
    render() {
        return (
            this.state.books.map((libro, i) =>{
                return <Book key = {i}  {...libro}/>
            })
        )
    }
    }
