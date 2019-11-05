import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { enterCursor, leaveCursor } from '../../AC'

class CursorPropvider extends Component {

    static propTypes = {
        //from store
        isHover: PropTypes.bool,
        enterCursor: PropTypes.func.isRequired,
        leaveCursor: PropTypes.func.isRequired,
        //from component
        text: PropTypes.string,
        isHidden: PropTypes.bool
    }

    static defaultProps = {
        isHidden: false
    }

    hadleEnterCursor = text => {
        this.props.enterCursor(text);        
    }
    
    handleLeaveCursor = () => {
        this.props.leaveCursor();
    }

    render() {
        const { text, isHidden } = this.props;
        const hidden = isHidden ? 'cursor-hidden' : '';
        return (
            <span 
                className = {`${hidden}`}
                onMouseEnter = { () => { this.hadleEnterCursor(text) } } 
                onMouseLeave = { () => { this.handleLeaveCursor() } }
            >
                {this.props.children}
            </span>
        )
    }
}

function mapStateToDispatch(state) {
    return {
        isHover: state.cursor.isHover
    }
}

const mapToDispatch = {
    enterCursor,
    leaveCursor
}

const decorator = connect( mapStateToDispatch, mapToDispatch );

export default decorator( CursorPropvider );