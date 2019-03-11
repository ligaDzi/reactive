import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { changeSelectedCategor } from '../../../AC'

import './style.sass'
import '../../../style/_position.sass'

class CleareCategoriesMenu extends Component {

    static propTypes = {
        //from component
        isActive: PropTypes.bool,
        updateMenu: PropTypes.func.isRequired,
        //from store
        changeSelectedCategor: PropTypes.func.isRequired
    }

    handleClickCleare = id => ev => {
        const { updateMenu, changeSelectedCategor } = this.props;
        changeSelectedCategor(id);
        updateMenu();
    }

    showClearBtn = () => {
        return (            
            <button 
                className='cleare-categor flex fa-end fj-start'
                onClick = {this.handleClickCleare(null)}
            >
                <span className='cleare-categor__txt'> Clear All Filters </span>
            </button>
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

const mapToDispatch = {
    changeSelectedCategor
}

const decorator = connect( null, mapToDispatch );

export default decorator( CleareCategoriesMenu );