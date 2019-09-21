import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import history from '../history'

import { selectArticle, closeArticle } from '../AC'

import StartPage from './StartPage'
import Header from './Header'
import Footer from './Footer'
import NotFound from './NotFound'
import LandscapeLock from './LandscapeLock'
import Cursor from './Cursor'
import FactoryPage from './FactoryPage'
import StudioPage from './StudioPage'

import '../style/reset.css'

class Root extends Component {
    
    render() {
        return (
            <Provider store = {store}>
                <Router history = {history}>
                    <Route path='/'>
                        <div>
                            <Header />
                            <Switch>

                                <Route exact path='/' component = { StartPage } />
                                <Route exact path='/articles' component = { StartPage } />
                                <Route exact path='/factory' component = { FactoryPage } />
                                <Route exact path='/studio' component = { StudioPage } />
                                <Route component = {NotFound} /> 

                            </Switch>
                            <Footer />
                            <LandscapeLock />
                            <Cursor />
                        </div>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

export default Root;