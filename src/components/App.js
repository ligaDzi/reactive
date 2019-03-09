import React, { Component } from 'react'

import Header from './Header'
import Carousel from './Carousel'
import Articles from './Articles'
import Footer from './Footer'

import { articles, menu, contactUs, categories } from '../fixtures'

class App extends Component{    
    render() {
        const artSlider = articles.slice(0, 5);
        const artList = articles.slice(5, 10);        
                
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