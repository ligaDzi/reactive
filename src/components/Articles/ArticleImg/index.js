import React, { PureComponent } from 'react'
import Proptypes from 'prop-types'
import { Image, Transformation } from 'cloudinary-react'

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
                <Image className='article-img' publicId={`reactive/${name}`} >
                    <Transformation flags={["progressive", "progressive:semi"]} />
                </Image>                
            </div>
        )

    }
}

export default ArticleImg;