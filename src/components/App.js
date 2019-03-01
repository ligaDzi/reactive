import React, { Component } from 'react'

import Carousel from './Carousel'

import { articles } from '../fixtures'

class App extends Component{
    render() {
        
        return (
            <div>
                <Carousel articles = {articles} />
            </div>
        )
    }
}

export default App;