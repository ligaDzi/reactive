import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { mapToArr } from '../../../helpers'
import { toggleMenu, changeDescMenu, leaveCursor } from '../../../AC'

import ItemMainMenu from '../ItemMainMenu'
import Loader from '../../Loader'

import './style.sass'
import '../../../style/_position.sass'

class ListMainMenu extends Component {

    static propTypes = {
        //from component
        mainMenuRef: PropTypes.object,
        //from store
        menu: PropTypes.shape({
            isLoading: PropTypes.bool,
            isLoaded: PropTypes.bool,
            isError: PropTypes.bool,
            entities: PropTypes.array
        }),
        isMenuActive: PropTypes.bool,
        toggleMenu: PropTypes.func.isRequired,
        changeDescMenu: PropTypes.func.isRequired,
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        const { isMenuActive, menu } = this.props;

        if( isMenuActive !== nextProps.isMenuActive ) return true;
        if( menu.isLoading !== nextProps.menu.isLoading ) return true;
        if( menu.isLoaded !== nextProps.menu.isLoaded ) return true;
        if( menu.isError !== nextProps.menu.isError ) return true;

        for (let i = 0; i < menu.entities.length; i++) {            
            
            if( menu.entities[i].id !== nextProps.menu.entities[i].id ) return true;
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
        const { menu, isMenuActive, toggleMenu, changeDescMenu, leaveCursor } = this.props; 

        if(menu.isLoading) return <Loader color='black' />
        if(menu.isError){
            console.error('Menu error');
            return null;
        }

        return menu.entities.map( item => {
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
        menu: {
            isLoading: state.menu.isLoading,
            isLoaded: state.menu.isLoaded,
            isError: state.menu.isError,
            entities: mapToArr(state.menu.entities)
        }
    }
}

const mapToDispatch = {
    toggleMenu,
    changeDescMenu,
    leaveCursor
}

const decorator = connect( mapStateToProps, mapToDispatch )

export default decorator( ListMainMenu );