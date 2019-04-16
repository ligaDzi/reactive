import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import CursorPropvider from '../../Cursor/CursorProvider'

import { toggleMenu, closeArticle } from '../../../AC'

import './style.sass'

class Logo extends Component {

    static propTypes = {
        //from store
        isMenuActive: PropTypes.bool,
        isArticleOpen: PropTypes.bool,
        toggleMenu: PropTypes.func.isRequired,
        closeArticle: PropTypes.func.isRequired,
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        const { isMenuActive } = this.props;

        if( isMenuActive !== nextProps.isMenuActive ) return true;

        return false;

    }

    handleClickHome = ev => {        
        const { isMenuActive, isArticleOpen, toggleMenu, closeArticle } = this.props;
        
        if(isMenuActive) toggleMenu();
        
        if(isArticleOpen) closeArticle();
    }

    render() {
        const { isMenuActive } = this.props;        
        const menuActive = isMenuActive ? 'black' : '';

        return(
            <CursorPropvider text = 'home' >
                <button className={`logo ${menuActive}`} onClick = {this.handleClickHome}>
                    <Link to = '/'> reactive. </Link>                    
                </button>
            </CursorPropvider>
        )
    }
}

function mapStateToProps(state) {
    return {
        isMenuActive: state.menu.isActive,
        isArticleOpen: state.articles.artFocus.id ? true : false
    }
}

const mapToDispatch = {
    toggleMenu,
    closeArticle
}

const decorator = connect ( mapStateToProps, mapToDispatch );

export default decorator( Logo );