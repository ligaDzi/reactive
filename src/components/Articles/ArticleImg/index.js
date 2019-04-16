import React, { PureComponent } from 'react'
import Proptypes from 'prop-types'

import './style.sass'
import '../../../style/_position.sass'

class ArticleImg extends PureComponent {

    static propTypes = {
        //from component
        name: Proptypes.string
    }

    render() {
        const { name } = this.props;        
    
        return (        
            <div className='article-imgblock flex-center'>                
                <img className='article-img' src={`./src/img/${name}`} />
            </div>
        )

    }
}

export default ArticleImg;