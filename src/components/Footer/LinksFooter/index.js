import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import utils from '../../../decorators/utils'

import './style.sass'

class LinksFooter extends Component {

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
                <li className='link-footer' key = {getUniqId()}>
                    <Link className='link-footer' to={`/${link.alias}`}>
                        {link.name}
                    </Link>
                </li>
            )
        })
    }

    render() {
        
        return (
            <div className='links-footer flex fa-start fj-start'>
                <ul className='links-footer__items'>
                    {this.showLinks()}
                </ul>
            </div>
        )
    }
}

export default utils( LinksFooter );