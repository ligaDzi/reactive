import React from 'react'
import PropTypes from 'prop-types'

import './style.sass'

export default function Logo(props){

    const menuActive = props.isMenuActive ? 'black' : '';

    return(
        <div className={`logo ${menuActive}`}>
            reactive.
        </div>
    )
}

Logo.propTypes = {
    //from component
    isMenuActive: PropTypes.bool
}