import React, { Component } from 'react'

import Header from './Header'
import Carousel from './Carousel'
import Articles from './Articles'
import Footer from './Footer'


class App extends Component{    
    render() {   
        return (
            <div>
                <Header />
                <Carousel />
                <Articles />
                <Footer />
            </div>
        )
    }
}

export default App;