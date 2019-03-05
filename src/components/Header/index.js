import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FormHeader from './FormHeader'
import LinksHeader from './LinksHeader'
import ContactUsList from './ContactUsList'
import Text90Deg from '../Carousel/Text90Deg'

import './style.sass'
import '../../style/_position.sass'

class Header extends Component {

    static propTypes = {
        //from component
        menu: PropTypes.array,
        contactUs: PropTypes.array
    }

    handleEmailSubmit = email => {
        console.log('===', 'email = ', email);        
    }

    showContactUs = () => {
        return (
            <div className = 'contact-text'>
                <Text90Deg text = 'Contact Us' />
            </div>
        )
    }

    render() {
        const { menu, contactUs } = this.props;

        return (
            <div className='header'>
                <div className='header-content flex'>
                    <div className='header-content__form flex'>
                        <div className='header-cloumn__null fa-start'></div>
                        <FormHeader emailSubmit = {this.handleEmailSubmit} />
                    </div>
                    <div className='header-content__list flex'>
                        <div className='header-cloumn__null fa-start'></div>
                        <LinksHeader links = {menu} />
                        <div className='header-cloumn__null fa-start'></div>
                        <ContactUsList contactUs = {contactUs} />
                        <div className='header-cloumn__null fa-start'></div>
                        <div className='header-column__contact flex fa-start fj-end'>
                            {this.showContactUs()}
                        </div>
                    </div>
                </div>
                <div className='header-copyright flex fj-end fa-end'>© 2019 Reacter Group Inc.</div>
            </div>
        )
    }
}

export default Header;