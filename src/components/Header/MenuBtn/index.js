import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { toggleMenu } from '../../../AC'

import './style.sass'

class MenuBtn extends Component {

    static proptypes = {
        //from store
        isMenuActive: PropTypes.bool,
        toggleMenu: PropTypes.func.isRequired,
        artFocus: PropTypes.object
    }

    handleClickBurger = ev => {   
        this.props.toggleMenu();    
    }

    render() {
        const { isMenuActive, artFocus } = this.props;
        const active = isMenuActive ? 'active' : '';
        const hidden = artFocus.id ? 'hidden' : '';

        return (
            <button className={`burger ${active} ${hidden}`} onClick = {this.handleClickBurger}>
                <div className='burger-content'>
                    <span className='burger-line'></span>
                    <span className='burger-line'></span>
                </div>
            </button>
        )
    }
}

function mapStateToProps(state) {
    return {
        isMenuActive: state.menu.isActive,
        artFocus: state.articles.artFocus
    }
}

const mapToDispatch = {
    toggleMenu
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( MenuBtn );

