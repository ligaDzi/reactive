import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const Loader = ({color}) => (
    <div className="loader">
        <div className={`square ${color}`}></div>
        <div className={`square ${color}`}></div>
        <div className={`square last ${color}`}></div>
        <div className={`square clear ${color}`}></div>
        <div className={`square ${color}`}></div>
        <div className={`square last ${color}`}></div>
        <div className={`square clear ${color}`}></div>
        <div className={`square ${color}`}></div>
        <div className={`square last ${color}`}></div>
    </div>
)

Loader.propTypes = {
    color: PropTypes.oneOf(['white', 'black'])
}

export default Loader;