import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CursorProvider from '../../Cursor/CursorProvider'

import './style.sass'

class FormFooter extends Component {

    static propTypes = {
        emailSubmit: PropTypes.func.isRequired
    }

    state = {
        email: ''
    }

    handleSubmit = ev => {
        ev.preventDefault();

        const { email } = this.state;

        if(this.isEmailValid(email)){
            this.props.emailSubmit(email);
            this.setState({ email: '' });
        }        
    }

    handleChange = ev => {
        this.setState({
            email: ev.target.value
        })
    }

    isEmailValid = email => {
        const emailReg = /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;
        return emailReg.test(email);
    }

    showErr = () => {
        const { email } = this.state;

        if( !email == '' && !this.isEmailValid(email) ){
            return <div className='email-error email-txt'> Incorrect email </div>;
        }
    }

    addBorder = () => {
        const { email } = this.state;

        if( !email == '' && !this.isEmailValid(email) ){
            return 'incorrect';
        } else {
            return 'correct'
        }
    }

    render() {

        return (
            <form className='email-form flex fa-start fj-start' onSubmit = {this.handleSubmit}>
                <div className='email-enter'>
                    <CursorProvider text = 'edit'>
                        <input 
                            className = {`email-input email-txt ${this.addBorder()}`}
                            placeholder = 'Enter email to stay up-to-date'
                            value = {this.state.email}
                            onChange = {this.handleChange}
                        />
                    </CursorProvider>
                    {this.showErr()}
                </div>
                <CursorProvider text = 'submit'>
                    <input className='email-submit email-txt' type='submit' value='Submit' />
                </CursorProvider>
            </form>
        )
    }
}

export default FormFooter;