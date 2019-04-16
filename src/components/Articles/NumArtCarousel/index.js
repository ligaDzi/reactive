import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ButtonNum from './ButtonNumArtCarosel'
import DotsSlider from './DotsSlider'

import './style.sass'
import '../../../style/_position.sass'

class NumArtCarousel extends PureComponent {

    static propTypes = {
        //from component
        imgLength: PropTypes.number,
        activeImg: PropTypes.number,
        isActiveArt: PropTypes.bool,
        onClickLine: PropTypes.func.isRequired,
        onClickUp: PropTypes.func.isRequired,
        onClickDown: PropTypes.func.isRequired,
    }

    render() {
        const { imgLength, activeImg, isActiveArt, onClickLine, onClickUp, onClickDown } = this.props;
        const deactive = !isActiveArt ? 'deactive' : '';
        
        return (
            <div className = 'max-block'>
                <div className = {`num-artcar flex ${deactive}`}>
                    <div className = 'num-artcar__wrapp flex fa-start fj-end max-whcell'>
                        <div className = 'max-block'>
                            <DotsSlider 
                                length = {imgLength} 
                                activeImg = {activeImg} 
                                onClickLine = {onClickLine}
                            />
                            <ButtonNum 
                                onClickUp = {onClickUp}
                                onClickDown = {onClickDown}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NumArtCarousel;