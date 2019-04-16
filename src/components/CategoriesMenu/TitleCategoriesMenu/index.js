import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import './style.sass'
import '../../../style/_position.sass'


const TitleCategoriesMenu = (props) => {
         
    return (        
        <div className='categor-menu__title flex fa-start fj-start'>
            <CSSTransitionGroup
                transitionName = 'catmenu-title'
                transitionEnterTimeout = {1000}
                transitionLeaveTimeout = {200}
                component = 'div'
            >
               { props.isActive ? <h6 className='categor-menu__text' > Filter By Category </h6> : null }
            </CSSTransitionGroup>            
        </div>
    )
}

TitleCategoriesMenu.propTypes = {
    //from component
    isActive: PropTypes.bool
}

export default TitleCategoriesMenu;