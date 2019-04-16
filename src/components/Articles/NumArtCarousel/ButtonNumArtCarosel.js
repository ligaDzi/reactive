import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.sass'
import '../../../style/_position.sass'

class ButtonNumCarousel extends Component {
    
    static propTypes = {
        //from component
        onClickUp: PropTypes.func.isRequired,
        onClickDown: PropTypes.func.isRequired,
    }

    render() {
        const { onClickUp, onClickDown } = this.props;
        
        return (
            <div className = 'num-artcar__btn flex fa-end fj-sb fd-column'>                
                <button className = 'num-artcar__btn-up' onClick = { () => onClickUp() }>
                    <svg viewBox = '0 0 37.57 37.93' className = 'btn-up__img'>
                        <g>
                            <line y1='18.97' x2='36.16' y2='18.97'></line>
                            <polyline points='17.9 0.71 36.16 18.97 17.9 37.23'></polyline>
                        </g>
                    </svg>
                </button>
                <button className = 'num-artcar__btn-down' onClick = { () => onClickDown() }>                                 
                    <svg viewBox = '0 0 37.57 37.93' className = 'btn-down__img'>
                        <g>
                            <line y1='18.97' x2='36.16' y2='18.97'></line>
                            <polyline points='17.9 0.71 36.16 18.97 17.9 37.23'></polyline>
                        </g>
                    </svg>
                </button>
            </div>
        )
    }
}

export default ButtonNumCarousel;