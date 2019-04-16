import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'

import CursorProvider from '../../Cursor/CursorProvider'

import { changeSelectedCategor } from '../../../AC'

import './style.sass'
import '../../../style/_position.sass'

class ItemCategoriesMenu extends Component {

    static propTypes = {
        //from component
        categorie: PropTypes.object,
        //from store
        isMenuActive: PropTypes.bool,
        changeSelectedCategor: PropTypes.func.isRequired,
        selectedCategor: PropTypes.array,
    }

    handleClickCategor = ev => {
        const { categorie, changeSelectedCategor } = this.props;
        changeSelectedCategor(categorie.id);       
    }

    showCategor = categorie => {
        const { selectedCategor } = this.props;
        
        const active = selectedCategor.includes(categorie.id) ? 'active' : '';
        const textCursor = active ? 'delete' : 'select';
        return ( 
            <button className='categor-menu__item flex fa-start' onClick = {this.handleClickCategor}>
                <CursorProvider text = {textCursor}>
                    <span className='categor-menu__text'> {categorie.name} </span>
                    <span className={`categor-menu__close ${active}`}>x</span>
                </CursorProvider>           
            </button>
        )
    }

    render() {         
        const { categorie, isMenuActive } = this.props;
        
        return (
            <CSSTransitionGroup
                transitionName = 'catmenu-item'
                transitionEnterTimeout = {1000}
                transitionLeaveTimeout = {200}
                component = 'p'
            >
                {isMenuActive ? this.showCategor(categorie) : null}
            </CSSTransitionGroup>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedCategor: state.categories.selected,
        isMenuActive: state.categories.isActive
    }
}

const mapToDispatch = {
    changeSelectedCategor
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( ItemCategoriesMenu );