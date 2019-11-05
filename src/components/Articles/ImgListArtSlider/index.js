import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import utils from '../../../decorators/utils'

import './style.sass'
import '../../../style/_position.sass'

class ImgListArtSlider extends PureComponent {

    static propTypes = {
        //from component
        imgList: PropTypes.array,
        activeImg: PropTypes.number,
        //from decorator
        getUniqId: PropTypes.func.isRequired
    }
    
    renderList = imgList => {
        const { getUniqId } = this.props;

        return imgList.map( img => (
            <img key = {getUniqId()} className = 'article-open__img' src = {`../src/img/${img}`} />            
        ))
    }

    getIndex = activeImg => {
        if( activeImg > 0 ) {
            if( activeImg <= 2) {
                return 0.5;
            } else {
                return (1 + (activeImg * 0.1));
            }
        } else {
            return 0;
        }
    }

    render() {
        const { activeImg, imgList } = this.props;        
            
        return (
            <div className = 'imglist__wrapp flex fd-column' style = {{transform: `translateY(${(-100 * activeImg)}vh)`}}>
                {this.renderList(imgList)}
            </div>
        )
        
    }
}

export default utils( ImgListArtSlider );