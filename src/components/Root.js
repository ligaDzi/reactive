import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'

import App from './App'

import '../style/reset.css'

class Root extends Component {
    render() {
        return (
            <Provider store = {store}>
                <App />
            </Provider>
        )
    }
}

export default Root;