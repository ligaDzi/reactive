import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { toggleMenu } from '../../../AC'

import './style.sass'

class MenuBtn extends Component {

    static proptypes = {
        //from store
        isMenuActive: PropTypes.bool,
        toggleMenu: PropTypes.func.isRequired
    }

    handleClickBurger = ev => {   
        this.props.toggleMenu();    
    }

    render() {
        const { isMenuActive } = this.props;
        const active = isMenuActive ? 'active' : '';
        return (
            <button className={`burger ${active}`} onClick = {this.handleClickBurger}>
                <div className='burger-content'>
                    <span className='burger-line'></span>
                    <span className='burger-line'></span>
                </div>
            </button>
        )
    }
}

function mapStateToProps(state) {
    return {
        isMenuActive: state.menu.isActive
    }
}

const mapToDispatch = {
    toggleMenu
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( MenuBtn );

