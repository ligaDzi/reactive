import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CategoriesMenu from '../CategoriesMenu'
import ButtonHeader from './ButtonHeader'
import MainMenu from '../MainMenu'

import './style.sass'

class Header extends Component {
    static propTypes = {
    }

    render() {        

        return (
            <div className='header'>
                <ButtonHeader />
                <CategoriesMenu />
                <MainMenu />
            </div>
        )
    }
}


export default Header;