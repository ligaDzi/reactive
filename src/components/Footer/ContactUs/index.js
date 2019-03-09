import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import './style.sass'

class ContactUs extends Component {

    static propTypes = {
        //from component
        isOpen: PropTypes.bool,
        onOpen: PropTypes.func.isRequired,
        contact: PropTypes.object
    }

    showContact = () => {
        const { isOpen, contact } = this.props;

        if(isOpen){
            return (
                <CSSTransitionGroup                    
                    transitionName = 'contact-content'
                    transitionAppear
                    transitionAppearTimeout = {500}
                    transitionEnterTimeout = {300}
                    transitionLeaveTimeout = {500}
                    component = 'div'                 
                >
                    <div className='contact-content'>
                        <p> {contact.adress} </p>
                        <p> {contact.email} </p>
                        <p> {contact.phone} </p>
                    </div>
                </CSSTransitionGroup>
            )
        }else {
            return null;
        }
    }

    render() {
        const { contact, onOpen } = this.props;
        return (
            <div>
                <button className='contact-btn' onClick = {onOpen}> {contact.title} </button>
                {this.showContact()}
            </div>
        )
    }
}

export default ContactUs;