import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { hiddenMenuCategories } from '../../AC'

import Content from './Content'
import ScrollToTop from '../ScrollToTop'

import './style.sass'
import '../../style/_position.sass'

const TeamPage = ({ isCatMenuHidden, hiddenMenuCategories }) => {

    useEffect( () => {
        if(!isCatMenuHidden) {
            hiddenMenuCategories();
        }
    }, []);

    return (
        <div className='teamPage-wrap'>
            <ScrollToTop />
            <div>
                <Content />
            </div>
        </div>
    )
}

TeamPage.propTypes = {
    //From store
    isCatMenuHidden: PropTypes.bool,
    hiddenMenuCategories: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        isCatMenuHidden: state.categories.isHidden
    }
}

const mapToDispatch = {
    hiddenMenuCategories
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( TeamPage );