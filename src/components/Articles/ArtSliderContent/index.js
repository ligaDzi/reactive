import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MainrowArtSlider from '../MainrowArtSlider'
import CursorProvider from '../../Cursor/CursorProvider'

import './style.sass'
import '../../../style/_position.sass'

const ArtSliderContent = (props) => {

    const handleClickClose = () => {        
        props.deactiveArt();        

        setTimeout( () => {
            props.closeArticle();
        }, 750)
    }

    const deactive = !props.isActiveArt ? 'deactive' : '';
    
    return (        
        <div className = 'artslider-content'>
            <div className = 'artslider-content__grid'>
                <div className = 'artslider-null'></div>
                <div className = 'artslider-help artslider-null'>
                    <div className = 'artslider-help__txt max-whcell flex fa-end fj-start'>
                        <span className = {`${deactive}`} > Scroll to read </span>
                    </div>
                    <div className = 'artslider-help__null max-whcell flex fa-start fj-start'></div>
                </div>
                <div className = 'artslider-null'></div>
                <MainrowArtSlider 
                    article = {props.article}
                    activeImg = {props.activeImg}
                    isOpen = {props.isOpen}
                    isActiveArt = {props.isActiveArt}
                    onClickLine = {props.onClickLine}
                    onClickUp = {props.onClickUp}
                    onClickDown = {props.onClickDown} 
                />
                <CursorProvider text = 'close'>
                    <div className = {`artslider-close ${deactive}`}>
                        <button onClick = { handleClickClose }>
                            <div className = 'artslider-close__content flex fd-column fj-sb'>
                                <span className = 'artslider-close__line'></span>
                                <span className = 'artslider-close__line'></span>
                            </div>
                        </button>
                    </div>
                </CursorProvider>
            </div>
        </div>
    )
}    



ArtSliderContent.propTypes = {
    //from component
    article: PropTypes.object,
    activeImg: PropTypes.number,
    closeArticle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool,
    isActiveArt: PropTypes.bool,
    deactiveArt: PropTypes.func.isRequired,
    onClickLine: PropTypes.func.isRequired,
    onClickUp: PropTypes.func.isRequired,
    onClickDown: PropTypes.func.isRequired,    
}

export default ArtSliderContent;