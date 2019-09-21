import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CursorProvider from '../../Cursor/CursorProvider'

import { toggleMenuCategor } from '../../../AC'

import './style.sass'

class CategoriesBtn extends PureComponent {

    static propTypes = {
        //from store
        isCategorActive: PropTypes.bool,
        toggleMenuCategor: PropTypes.func.isRequired,
        isMenuActive: PropTypes.bool,
        isCatMenuHidden: PropTypes.bool,
        artFocus: PropTypes.object
    }



    handleClickCategorMenu = ev => {
        this.props.toggleMenuCategor();     
    }
    
    render() { 
        const { isCategorActive, isCatMenuHidden, isMenuActive, artFocus } = this.props;
        const active = isCategorActive ? 'active' : '';
        const hidden = (isCatMenuHidden || isMenuActive || artFocus.id) ? 'hidden' : '';
        const textCursor = isCategorActive ? 'close' : 'tag';      
        
        return ( 
            <CursorProvider text = {textCursor} isHidden = {isMenuActive}>
                <button className={`categor-menu-btn ${active} ${hidden}`} onClick = {this.handleClickCategorMenu}>
                    <div className='categor-menu-btn__content'>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                    </div>
                </button>            
            </CursorProvider>          
        )
    }
}

function mapStateToProps(state) {
    return {
        isMenuActive: state.menu.isActive,
        isCategorActive: state.categories.isActive,
        isCatMenuHidden: state.categories.isHidden,
        artFocus: state.articles.selectArticle.artFocus
    }
}

const mapToDispatch = {
    toggleMenuCategor
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( CategoriesBtn );