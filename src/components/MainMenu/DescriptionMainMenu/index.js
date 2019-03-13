import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import './style.sass'
import '../../../style/_position.sass'

class DescriptionMainMenu extends Component {

    static propTypes = {
        //from component
        description: PropTypes.string,
        isMenuActive: PropTypes.bool
    }

    renderDesc = decription => {
        return (
            <div>
                <h6 className='cntUs-menu__title cntUs-menu__txt'> About </h6>
                <p className='cntUs-menu__txt'> {decription}</p>
            </div>
        )
    }
    render() {
        const { description, isMenuActive } = this.props;

        return (
            <div className='desc-mainMenu flex fa-start fj-start'>
                
                <CSSTransitionGroup
                    transitionName = 'cntUsMenu'
                    transitionEnterTimeout = {1100}
                    transitionLeaveTimeout = {200}
                    component = 'div'            
                >
                    { isMenuActive ? this.renderDesc(description) : null }
                </CSSTransitionGroup>

            </div>
        )
    }
}

export default DescriptionMainMenu;