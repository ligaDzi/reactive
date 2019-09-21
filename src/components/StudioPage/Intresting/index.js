import React from 'react'

import IntrestingText from './IntrestingText'
import IntrestingImg from './IntrestingImg'

import './style.sass'
import '../../../style/_position.sass'

const Intresting = () => (
    <div className='storyPage-row intresting height30 flex'>
        <IntrestingText />
        <IntrestingImg />
    </div>
)

export default Intresting;

