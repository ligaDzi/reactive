import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import App from './App'
import Header from './Header'
import Footer from './Footer'
import NotFound from './NotFound'

import '../style/reset.css'

class Root extends Component {
    render() {
        return (
            <Provider store = {store}>
                <Router>
                    <Route path='/'>
                        <div>
                            <Header />
                            <Switch>

                                <Route exact path='/' component = {App} />
                                <Route component = {NotFound} /> 

                            </Switch>
                            <Footer />
                        </div>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

export default Root;