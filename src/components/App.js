import React, { Component } from 'react'

import Carousel from './Carousel'
import Articles from './Articles'


class App extends Component{    
    render() {   
        return (
            <div>
                <Carousel />
                <Articles />
            </div>
        )
    }
}

export default App;