import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { Router, Switch, Route } from 'react-router-dom'
import { CloudinaryContext } from 'cloudinary-react'
import history from '../history'


import StartPage from './StartPage'
import Header from './Header'
import Footer from './Footer'
import NotFound from './NotFound'
import LandscapeLock from './LandscapeLock'
import Cursor from './Cursor'
import FactoryPage from './FactoryPage'
import StudioPage from './StudioPage'
import TeamPage from './TeamPage'
import ArchivePage from './ArchivePage'

import '../style/reset.css'

class Root extends Component {
    
    render() {
        return (
            <Provider store = {store}>
                <CloudinaryContext cloudName='alexcloudi'>
                    <Router history = {history}>
                        <Route path='/'>
                            <div>
                                <Header />
                                <Switch>
                                    <Route exact path='/'>
                                        <div>
                                            <StartPage />
                                            <Footer />
                                        </div>
                                    </Route>
                                    <Route exact path='/articles'>
                                        <div>
                                            <StartPage />
                                            <Footer />
                                        </div>
                                    </Route>
                                    <Route exact path='/studio'>
                                        <div>
                                            <StudioPage />
                                            <Footer />
                                        </div>
                                    </Route>
                                    <Route exact path='/team'>
                                        <div>
                                            <TeamPage />
                                            <Footer />
                                        </div>
                                    </Route>
                                    <Route exact path='/factory' component = { FactoryPage } />
                                    <Route exact path='/archive' component = { ArchivePage } />
                                    <Route component = {NotFound} /> 

                                </Switch>
                                <LandscapeLock />
                                <Cursor />
                            </div>
                        </Route>
                    </Router>
                </CloudinaryContext>
            </Provider>
        )
    }
}

export default Root;