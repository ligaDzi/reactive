import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.sass'

class Text90Deg extends Component {
    static propTypes = {
        //from component
        text: PropTypes.string
    }

    render() {
        const { text } = this.props;

        return (
            <p className='block-title__read'>
                <span> {text} </span>
            </p>
        )
    }
}

export default Text90Deg;