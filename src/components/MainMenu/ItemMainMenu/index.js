import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

import CursorPropvider from '../../Cursor/CursorProvider'

import './style.sass'

class ItemMainMenu extends Component {

    static propTypes = {
        //from component
        menu: PropTypes.object,
        isMenuActive: PropTypes.bool,
        activatedMainMenu: PropTypes.func.isRequired,
        changeDesc: PropTypes.func.isRequired,
        leaveCursor: PropTypes.func.isRequired,
    }

    handleClickLink = ev => {
        const { activatedMainMenu, leaveCursor } = this.props;

        leaveCursor();
        activatedMainMenu();
    }

    handleHover = id => ev => {
        const { changeDesc } = this.props;        
        
        changeDesc(id);
    }

    showLink = (menu, changeDesc) => {   
        const isHome = menu.alias === '';       

        return ( 
            <div                
                className = 'menu-item' 
                onClick = {this.handleClickLink} 
                onMouseOver = {this.handleHover(menu.id)}
            > 
                <CursorPropvider text = 'click'>
                    <NavLink 
                        exact = {isHome} 
                        to = {`/${menu.alias}`}
                        activeClassName = 'active'
                    >
                        {menu.name}
                    </NavLink>
                </CursorPropvider>
            </div>
        )
    }

    render() {
        const { menu, changeDesc, isMenuActive } = this.props;
        
        return (
            <CSSTransitionGroup
                transitionName = 'linkMenu'
                transitionEnterTimeout = {1000}
                transitionLeaveTimeout = {350}
                component = 'div'            
            >
                { isMenuActive ? this.showLink(menu, changeDesc) : null }
            </CSSTransitionGroup>
        )
    }
}

export default ItemMainMenu;