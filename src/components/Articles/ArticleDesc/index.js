import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import utils from '../../../decorators/utils'

import './style.sass'
import '../../../style/_position.sass'

class ArticleDesc extends PureComponent {

    static propTypes = {
        //from component
        text: PropTypes.string,
        date: PropTypes.string,
        //from decorator
        showDate: PropTypes.func.isRequired
    }


    render() {    
        const { text, date, showDate } = this.props;
        
        return (
            <div className='article-desc flex fa-start'>
                <div className='article-desc-text'>
                    {text}
                </div>
                <div className='article-desc-date'>
                    {showDate(date)}
                </div>
            </div>
        )

    }
}

export default utils( ArticleDesc );