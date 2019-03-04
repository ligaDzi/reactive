import React, { Component } from 'react'

import Carousel from './Carousel'
import Articles from './Articles'

import { articles } from '../fixtures'

class App extends Component{
    render() {
        const artSlider = articles.slice(0, 5);
        const artList = articles.slice(5, 10);
                
        return (
            <div>
                <Carousel articles = {artSlider} />
                <Articles articles = {artList} />
            </div>
        )
    }
}

export default App;