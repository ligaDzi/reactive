import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CategoriesMenu from '../CategoriesMenu'
import ButtonHeader from './ButtonHeader'
import MainMenu from '../MainMenu'

import './style.sass'

class Header extends Component {
    static propTypes = {

    }

    state = {
        isCategorActive: false,
        isMenuActive: false
    }

    activatedCategorMenu = () => {
        this.setState({
            isCategorActive: !this.state.isCategorActive
        })
    }

    activatedMainMenu = () => {
        this.setState({
            isMenuActive: !this.state.isMenuActive
        });
        document.body.classList.toggle('body-overflow-hidden');
    }

    render() {
        const { isCategorActive, isMenuActive } = this.state;        

        return (
            <div className='header'>
                <ButtonHeader 
                    isCategorActive = {isCategorActive}
                    activatedCategorMenu = {this.activatedCategorMenu} 
                    isMenuActive = {isMenuActive}
                    activatedMainMenu = {this.activatedMainMenu}
                />
                <CategoriesMenu 
                    isCategorActive = {isCategorActive}
                />
                <MainMenu 
                    isMenuActive = {isMenuActive}
                    activatedMainMenu = {this.activatedMainMenu}
                />
            </div>
        )
    }
}

export default Header;