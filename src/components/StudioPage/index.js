import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { hiddenMenuCategories } from '../../AC'

import Intresting from './Intresting'
import Scroll from './Scroll'
import HowWeWork from './HowWeWork'
import Services from './Services'
import Slider from './Slider'
import ReadOurArticles from '../ReadOurArticles'
import ScrollToTop from '../ScrollToTop'

import './style.sass'
import '../../style/_position.sass'

const text = 'Read about aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

const StudioPage = ({ isCatMenuHidden, hiddenMenuCategories }) => {

    useEffect( () => {
        if(!isCatMenuHidden) {
            hiddenMenuCategories();
        }
    }, []);

    return (
        <div className='studioPage-wrap'>
            <ScrollToTop />
            <div>
                <div className='studioPage-root'>
                    <div className='studioPage-row height5 flex'></div>
                    <Intresting />
                    <Scroll />
                    <div className='studioPage-row height5 flex'></div>
                    <HowWeWork />
                    <Services />
                    <div className='studioPage-row height5 flex'></div>
                    <Slider />
                    <div className='studioPage-row height5 flex'></div>
                    <ReadOurArticles text={text} />
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isCatMenuHidden: state.categories.isHidden
    }
}

const mapToDospatch = {
    hiddenMenuCategories
}

const decorator = connect( mapStateToProps, mapToDospatch );

export default decorator( StudioPage );