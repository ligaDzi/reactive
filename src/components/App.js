import React, { Component } from 'react'

import Carousel from './Carousel'
import Articles from './Articles'
import Header from './Header'

import { articles, menu, contactUs } from '../fixtures'

class App extends Component{    
    render() {
        const artSlider = articles.slice(0, 5);
        const artList = articles.slice(5, 10);        
                
        return (
            <div>
                <Carousel articles = {artSlider} />
                <Articles articles = {artList} />
                <Header menu = {menu} contactUs = {contactUs} />
            </div>
        )
    }
}

export default App;