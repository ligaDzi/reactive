import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import './style.sass'
import '../../../style/_position.sass'

class ItemCategoriesMenu extends Component {

    static propTypes = {
        //from component
        categorie: PropTypes.object,
        isMenuActive: PropTypes.bool,
        changeSelectedCategor: PropTypes.func.isRequired
    }

    state = {
        isActive: false
    }

    selectedCategor = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    handleClickCategor = ev => {
        const { categorie, changeSelectedCategor } = this.props;
        this.selectedCategor();
        changeSelectedCategor(categorie.id);       
    }

    showCategor = categorie => {
        const { isActive } = this.state;
        const active = isActive ? 'active' : '';
        return (            
            <button className='categor-menu__item flex fa-start' onClick = {this.handleClickCategor}>
                <span className='categor-menu__text'> {categorie.name} </span>
                <span className={`categor-menu__close ${active}`}>x</span>
            </button>
        )
    }

    render() {
        const { categorie, isMenuActive } = this.props;
        return (
            <CSSTransitionGroup
                transitionName = 'catmenu-item'
                transitionEnterTimeout = {1000}
                transitionLeaveTimeout = {200}
                component = 'p'
            >
                {isMenuActive ? this.showCategor(categorie) : null}
            </CSSTransitionGroup>
        )
    }
}

export default ItemCategoriesMenu;