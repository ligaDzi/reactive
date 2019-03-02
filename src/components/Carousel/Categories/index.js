import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import utils from '../../../decorators/utils'

import '../../../style/_animation.sass'
import './style.sass'

class Categories extends Component{
    static propTypes = {
        //from component
        categories: PropTypes.array,
        //from decorator
        getUniqId: PropTypes.func.isRequired
    }

    render() {
        const { categories, getUniqId } = this.props;
        return (
            <ul className='categories'>
                {
                    categories.map( categorie => {
                        return(
                            <li key = {getUniqId()}>
                                <CSSTransitionGroup
                                    transitionName = 'categorie-tag'
                                    transitionAppear
                                    transitionAppearTimeout = {600}
                                    transitionEnterTimeout = {100}
                                    transitionLeaveTimeout = {100}
                                    component = 'div'
                                >
                                    <div className='categorie-tag leave6000'>{categorie}</div>
                                </CSSTransitionGroup>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default utils( Categories );