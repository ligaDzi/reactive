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
        activatedCategorMenu: PropTypes.func.isRequired
    }

    render() {
        const { isCategorActive, activatedCategorMenu } = this.props;
        
        return (
            <div className='header-btn flex'>
                <div className='header-btn__logo'>
                    <Logo />
                </div>
                <div className='header-btn__menu flex fa-center fj-end'>
                    <CategoriesBtn
                        isCategorActive = {isCategorActive}
                        activatedCategorMenu = {activatedCategorMenu}
                    />
                    <MenuBtn />
                </div>
            </div>
        )
    }
}

export default ButtonHeader;