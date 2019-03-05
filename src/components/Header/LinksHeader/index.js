import React, { Component } from 'react'
import PropTypes from 'prop-types'

import utils from '../../../decorators/utils'

import './style.sass'

class LinksHeader extends Component {

    static propTypes = {
        //from component
        links: PropTypes.array,
        //from decorator
        getUniqId: PropTypes.func.isRequired
    }

    showLinks = () => {
        const { links, getUniqId } = this.props;
        
        return links.map( link => {
            return (
                <li className='link-header' key = {getUniqId()}>
                    {link.name}
                </li>
            )
        })
    }

    render() {
        return (
            <div className='links-header flex fa-start fj-start'>
                <ul className='links-header__items'>
                    {this.showLinks()}
                </ul>
            </div>
        )
    }
}

export default utils( LinksHeader );