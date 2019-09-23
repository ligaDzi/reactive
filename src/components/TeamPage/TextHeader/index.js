import React from 'react'

import Scroll from './Scroll'
import Text from './Text'
import Arrow from './Arrow'

import './style.sass'
import '../../../style/_position.sass'

const TextHeader = () => (

    <div className='teamPage-header'>
        <Scroll />
        <Text />
        <Arrow />
    </div>
)

export default TextHeader;