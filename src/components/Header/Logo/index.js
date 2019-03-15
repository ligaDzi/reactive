import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { toggleMenu } from '../../../AC'

import './style.sass'

const Logo = props => {

    const menuActive = props.isMenuActive ? 'black' : '';

    return(
        <button className={`logo ${menuActive}`}>
            reactive.
        </button>
    )
}

Logo.propTypes = {
    //from store
    isMenuActive: PropTypes.bool,
    toggleMenu: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        isMenuActive: state.menu.isActive
    }
}

const mapToDispatch = {
    toggleMenu
}

const decorator = connect ( mapStateToProps, mapToDispatch );

export default decorator( Logo );