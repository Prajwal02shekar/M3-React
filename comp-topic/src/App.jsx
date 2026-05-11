import React, { Component } from 'react'
import Navbar from './CBC/Navbar'
import Footer from './CBC/Footer'
import HomePage from './FBC/HomePage'

export default class App extends Component {
    render() {
        return (
            <>
            <Navbar/>
            <HomePage/>
            <Footer/>
            </>
        )
    }
}

