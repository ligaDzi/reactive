import React, { PureComponent } from 'react'

import Logo from '../Logo'
import CategoriesBtn from '../CategoriesBtn'
import MenuBtn from '../MenuBtn'

import './style.sass'
import '../../../style/_position.sass'

class ButtonHeader extends PureComponent {

    render() {    
            
        return (
            <div className='header-btn flex'>
                <div className='header-btn__logo'>
                    <Logo />
                </div>
                <div className='header-btn__menu flex fa-center fj-end'>
                    <CategoriesBtn />
                    <MenuBtn />
                </div>
            </div>
        )
    }
}

export default ButtonHeader;