import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NumArtCarousel from '../NumArtCarousel'

import utils from '../../../decorators/utils'

import './style.sass'
import '../../../style/_position.sass'

class MainrowArtSlider extends Component {

    static propTypes = {
        //from component
        article: PropTypes.object,
        activeImg: PropTypes.number,
        isOpen: PropTypes.bool,
        isActiveArt: PropTypes.bool,
        onClickLine: PropTypes.func.isRequired,
        onClickUp: PropTypes.func.isRequired,
        onClickDown: PropTypes.func.isRequired,
        //from decorator 
        showDate: PropTypes.func.isRequired
    }

    render() {
        const { article, isOpen, isActiveArt, showDate, activeImg, onClickLine, onClickUp, onClickDown } = this.props;
        const hidden = isOpen && isActiveArt ? 'hidden' : '';
        const deactive = !isActiveArt ? 'deactive' : '';
        
        return (
            <div className = 'artslider-mainrow'>
                <div className = 'mainrow-title max-whcell flex fa-start fj-start'>
                    <div className = 'mainrow-title__content'>
                        <div className = 'mainrow-title__date flex'>
                            <div className = 'm-date__txt flex fa-start fj-start max-whcell'>
                                <span className = {`${deactive}`}> { showDate(article.date) } </span>
                            </div>
                            <div className = 'm-date__null flex fa-start fj-start max-whcell'></div>
                        </div>
                        <div className = 'mainrow-title__txt flex'>
                            <div className = {`mr-t-txt__wrapper ${hidden}`}>
                                <div className = 'mr-t-txt-w__overflow'>
                                    <div className = {`mr-t-txt-w-o__txt ${deactive}`}>
                                        {article.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'mainrow-sliderbtn flex fa-start fj-start max-whcell'>
                    <NumArtCarousel 
                        imgLength = {article.images.length} 
                        activeImg = {activeImg}
                        isActiveArt = {isActiveArt}
                        onClickLine = {onClickLine}
                        onClickUp = {onClickUp}
                        onClickDown = {onClickDown}
                    />
                </div>
            </div>
        )
    }
}

export default utils( MainrowArtSlider );
