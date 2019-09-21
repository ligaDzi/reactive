import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './style.sass'

class Cursor extends PureComponent {

    static propTypes = {
        myContent: PropTypes.object,
        isHover: PropTypes.bool,
        text: PropTypes.string
    }

    state = {
        cursorX: 0,
        cursorY: 0,
        opacity: 0
    }

    componentDidMount = () => {
        document.addEventListener('mousemove', ev => {
            this.handleMouveCursor(ev.clientX - 17.5, ev.clientY - 17.5);
        });
    }

    handleMouveCursor = (pageX, pageY) => {
        this.setState({
            cursorX: pageX,
            cursorY: pageY,
            opacity: 1
        })
    }


    render() {
        const { isHover, text } = this.props;
        const { cursorX, cursorY, opacity } = this.state;
        const cursorStyle = { transform: `translate3d(${cursorX}px, ${cursorY}px, 0px)`, opacity }
        const hover = isHover ? 'hover' : ''; 
               

        return (
            <div className = 'cursor' style = {cursorStyle} >
                <div className = {`cursor__circle ${hover}`}></div>
                <div className = {`cursor__txt ${hover}`}> {text} </div>
            </div>
        )
    }
}

function mapStateToDispatch(state) {
    return {
        isHover: state.cursor.isHover,
        text: state.cursor.text
    }
}

const decorator = connect( mapStateToDispatch )

export default decorator( Cursor );