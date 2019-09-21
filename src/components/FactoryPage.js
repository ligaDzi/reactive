import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { leaveCursor, closeArticle, hiddenMenuCategories } from '../AC'
import { mapToArr } from '../helpers'
import history from '../history'

import OpenArticle from './Articles/OpenArticle'

const factoryArtID = '5d6ce1e454abae3160f9e5cc';

const FactoryPage = ({ article, isCatMenuHidden, leaveCursor, closeArticle, hiddenMenuCategories }) => {

    useEffect( () => {
        if(!isCatMenuHidden) {
            hiddenMenuCategories();
        }
    }, []);

    const closePage = () => {
        closeArticle();
        history.push('/');
    }

    return (
        <OpenArticle 
            article = { article }
            artNext = { false }
            closeArticle = { closePage }
            leaveCursor = { leaveCursor }
        />
    )
}

FactoryPage.propTypes = {
    //From Store
    article: PropTypes.object,
    isCatMenuHidden: PropTypes.bool,
    closeArticle: PropTypes.func.isRequired,
    leaveCursor: PropTypes.func.isRequired,
    hiddenMenuCategories: PropTypes.func.isRequired,
}

function mapStateToProps(state){
    return {
        article: mapToArr( state.articles.slider.entities ).filter( art => art.id === factoryArtID )[0],
        isCatMenuHidden: state.categories.isHidden
    }
}

const mapToDispatch = {
    leaveCursor,
    closeArticle,
    hiddenMenuCategories
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( FactoryPage );
