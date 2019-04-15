import React, { Component, PureComponent } from 'react'

import Carousel from './Carousel'
import Articles from './Articles'


class App extends PureComponent{    
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