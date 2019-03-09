import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ContactUs from '../ContactUs'

import accordion from '../../../decorators/accordion'

import './style.sass'

class ContactUsList extends Component {
    static propTypes = {
        //from decorator
        openId: PropTypes.string,
        toggleOpen: PropTypes.func.isRequired,
        //from component
        contactUs: PropTypes.array
    }

    showContactList = () => {
        const { contactUs, openId, toggleOpen } = this.props;

        return contactUs.map( contact => {
            return <ContactUs 
                        key = {contact.id} 
                        contact = {contact} 
                        isOpen = {openId === contact.id}
                        onOpen = {toggleOpen.bind(this, contact.id)}
                    />
        })
    }

    render() {
        return (
            <div className='contact-list '>
                {this.showContactList()}
            </div>
        )
    }
}

export default accordion( ContactUsList );
