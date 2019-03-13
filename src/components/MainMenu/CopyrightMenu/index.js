import React from 'react'
import PropType from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import './style.sass'
import '../../../style/_position.sass'

const CopyrightMenu = (props) => {

    const showCopirightMenu = () => {
        return (
            <div className='copiright-menu__txt flex fa-end fj-start'> 
                © 2019 Reactive Group Inc.
            </div>
        )
    }

    return (
        <div className='cprmenu-content flex'>
            <CSSTransitionGroup
                transitionName = 'cprMenu'
                transitionEnterTimeout = {1000}
                transitionLeaveTimeout = {200}
                component = 'div'            
            >
                { props.isMenuActive ? showCopirightMenu() : null } 
            </CSSTransitionGroup>
            <div className='copiright-menu__posttxt flex fa-start fj-start'></div>
        </div>
    )
}

CopyrightMenu.propTypes = {
    //from component
    isMenuActive: PropType.bool
}

export default CopyrightMenu;