import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'

import CursorProvider from '../../Cursor/CursorProvider'

import { changeSelectedCategor } from '../../../AC'

import './style.sass'
import '../../../style/_position.sass'

class CleareCategoriesMenu extends Component {

    static propTypes = {
        //from store
        isActive: PropTypes.bool,
        changeSelectedCategor: PropTypes.func.isRequired
    }

    handleClickCleare = id => ev => {
        const { changeSelectedCategor } = this.props;
        changeSelectedCategor(id);        
    }

    showClearBtn = () => {
        return ( 
            <CursorProvider text = 'clear'>
                <button 
                    className='cleare-categor flex fa-end fj-start'
                    onClick = {this.handleClickCleare(null)}
                >
                    <span className='categor-menu__text'> Clear All Filters </span>
                </button>
            </CursorProvider>           
        )
    }

    render() {
        const { isActive} = this.props;
        return (
            <CSSTransitionGroup
                transitionName = 'cleare'
                transitionEnterTimeout = {1000}
                transitionLeaveTimeout = {200}
                component = 'p'
            >
            { isActive ? this.showClearBtn() : null }
            </CSSTransitionGroup>
        )
    }
}

function mapStateToProps(state) {
    return {
        isActive: state.categories.isActive
    }
}

const mapToDispatch = {
    changeSelectedCategor
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( CleareCategoriesMenu );