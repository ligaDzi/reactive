import React, { Component } from 'react'

export default (OriginalComponent) => class Accordion extends Component {
    state = {
        openId: null
    }

    toggleOpen = id => {
        this.setState({
            openId: id === this.state.openId ? null : id
        })
    }

    render() {
        return (
            <OriginalComponent {...this.state} {...this.props} toggleOpen = {this.toggleOpen} />
        )
    }
}