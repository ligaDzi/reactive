import React, { PureComponent } from 'react'

import CategoriesMenu from '../CategoriesMenu'
import ButtonHeader from './ButtonHeader'
import MainMenu from '../MainMenu'

import './style.sass'

class Header extends PureComponent {

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