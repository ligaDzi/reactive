import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import './style.sass'

const ArticleCard = ({ article }) => {
        
    return (
        <div className="test-article"><img src={`../src/img/${article.images[0]}`} /></div>
    )

    // return (
    //     <div className='archivePage-articleCard'>
    //         <div className='archivePage-articleCard__content'>
    //             <div className='ap-ac-c__wrap'>
    //                 <img src={`../src/img/${article.images[0]}`} />
    //             </div>
    //         </div>
    //     </div>
    // )
}

ArticleCard.propTypes = {
    //From component
    article: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        text: PropTypes.string,
        autor: PropTypes.string,
        images: PropTypes.array,
        categories: PropTypes.array,
        isSlider: PropTypes.bool,
        date: PropTypes.string
    })
}

export default ArticleCard;