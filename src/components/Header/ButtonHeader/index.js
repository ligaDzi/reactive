import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Logo from '../Logo'
import CategoriesBtn from '../CategoriesBtn'
import MenuBtn from '../MenuBtn'

import './style.sass'
import '../../../style/_position.sass'

class ButtonHeader extends Component {

    static propTypes = {
        //from component
        isCategorActive: PropTypes.bool,
        isMenuActive: PropTypes.bool,
        activatedCategorMenu: PropTypes.func.isRequired,
        activatedMainMenu: PropTypes.func.isRequired
    }

    render() {
        const { isCategorActive, activatedCategorMenu, isMenuActive, activatedMainMenu } = this.props;
        
        return (
            <div className='header-btn flex'>
                <div className='header-btn__logo'>
                    <Logo 
                        isMenuActive = {isMenuActive}                    
                    />
                </div>
                <div className='header-btn__menu flex fa-center fj-end'>
                    <CategoriesBtn
                        isCategorActive = {isCategorActive}
                        isMenuActive = {isMenuActive}
                        activatedCategorMenu = {activatedCategorMenu}
                    />
                    <MenuBtn 
                        isMenuActive = {isMenuActive}
                        activatedMainMenu = {activatedMainMenu}
                    />
                </div>
            </div>
        )
    }
}

export default ButtonHeader;