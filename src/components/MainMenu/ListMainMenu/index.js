import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { mapToArr } from '../../../helpers'
import { toggleMenu, changeDescMenu, leaveCursor } from '../../../AC'

import ItemMainMenu from '../ItemMainMenu'

import './style.sass'
import '../../../style/_position.sass'

class ListMainMenu extends Component {

    static propTypes = {
        //from component
        mainMenuRef: PropTypes.object,
        //from store
        menus: PropTypes.array,
        isMenuActive: PropTypes.bool,
        toggleMenu: PropTypes.func.isRequired,
        changeDescMenu: PropTypes.func.isRequired,
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        const { isMenuActive, menus } = this.props;

        if( isMenuActive !== nextProps.isMenuActive ) return true;

        for (let i = 0; i < menus.length; i++) {            
            
            if( menus[i].id !== nextProps.menus[i].id ) return true;
        }
        return false;
    }
    
    componentDidUpdate = () => {
        const { isMenuActive, mainMenuRef } = this.props;
        const { listMenu } = this.refs;       
        
        if(isMenuActive) {
            mainMenuRef.onscroll = function() {                
                listMenu.scrollLeft = mainMenuRef.scrollTop;                
            }
        }
    }

    renderListMenu = () => {
        const { menus, isMenuActive, toggleMenu, changeDescMenu, leaveCursor } = this.props; 

        return menus.map( item => {
            return (
                <div key = {item.id} className='flex menu-items' >
                    <ItemMainMenu  
                        menu = {item}
                        isMenuActive = {isMenuActive}
                        activatedMainMenu = {toggleMenu}
                        changeDesc = {changeDescMenu}
                        leaveCursor = {leaveCursor}
                    />
                    <div className='menu-item__empty'></div>
                </div>
            )
        });
    }

    render() {  
             
        return (
            <div className='list-menu flex fa-center fj-start'>
                <div className='list-menu__root'>
                    <div className='list-menu__trans'>
                        <div className='list-menu__content' ref='listMenu'>
                            <div className='menu-item-first__empty'></div>
                            {this.renderListMenu()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isMenuActive: state.menu.isActive,
        menus: mapToArr(state.menu.entities)
    }
}

const mapToDispatch = {
    toggleMenu,
    changeDescMenu,
    leaveCursor
}

const decorator = connect( mapStateToProps, mapToDispatch )

export default decorator( ListMainMenu );