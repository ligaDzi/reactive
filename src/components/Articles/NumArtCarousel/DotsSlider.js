import React, { Component } from 'react'
import PropTypes from 'prop-types'

import utils from '../../../decorators/utils'

import './style.sass'
import '../../../style/_position.sass'

class DotsSlider extends Component {

    static propTypes = {
        //from compoent
        length: PropTypes.number,
        activeImg: PropTypes.number,
        onClickLine: PropTypes.func.isRequired,
        //from decorator
        getNumSlide: PropTypes.func.isRequired,
        getUniqId: PropTypes.func.isRequired,
    }

    renderNumList = () => {
        const { length, getNumSlide, getUniqId } = this.props;

        let list = [];

        for (let i = 1; i <= length; i++) {
            list.push( <li key = {getUniqId()}> { getNumSlide(i) } </li> );             
        }
        return list;
    }

    renderLineList = () => {
        const { length, getUniqId, activeImg, onClickLine } = this.props;

        let list = [];

        for (let i = 0; i < length; i++) {  
            const active = i === activeImg ? 'active' : '';  

            list.push( 
                <li key = {getUniqId()} className = {`line-dots__item ${active}`}> 
                    
                    <button className = 'line-dots__btn max-block' onClick = { () => onClickLine(i) }>
                        <div className = 'line-btn'></div>
                    </button>
                    
                </li> 
            );
        }
        return list;
    }
    
    render() {
        const { length, getNumSlide, activeImg } = this.props;
        
        return (
            <div className = 'num-artcar__dots flex fa-end fd-column'>
                <div className = 'num-dots'>
                    <div className = 'flex'>
                        <div className = 'num-dots__active'>
                            <ul 
                                className = 'num-dots__list' 
                                style = {{transform: `translate3d(0px, ${-17 * activeImg}px, 0px)`}}
                            >
                                {this.renderNumList()}
                            </ul>
                        </div>
                        <div className = 'num-dots__separate'> / </div>
                        <div className = 'num-dots__size'>
                            <div>
                                <span className = 'dots-size__num'> { getNumSlide(length) } </span>
                            </div>
                        </div>
                    </div>
                </div>                            
                <div className = 'line-dots'>
                    <ul className = 'line-dots__list flex fd-column fa-end'>
                        {this.renderLineList()}
                    </ul>
                </div>                            
            </div>
        )
    }
}

export default utils( DotsSlider );