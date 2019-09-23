import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadAllEmploees } from '../../AC'
import { mapToArr } from '../../helpers'

import Loader from '../Loader'
import TextHeader from './TextHeader'
import Mangers from './Managers'
import TextMiddle from './TextMiddle'
import SliderTeam from './SliderTeam'
import ReadOurArticles from '../ReadOurArticles'

import './style.sass'
import '../../style/_position.sass'

const TeamPage = ({ isLoading, isLoaded, isError, emploees, loadAllEmploees }) => {

    useEffect( () => {
        if(!isLoaded && !isLoading) loadAllEmploees();
    });

    if(isLoading) return  <div className='teamPage'> <Loader color='white' /> </div> 
    if(isError) {
        console.error('Slider Error');
        return null;
    }

    const text = 'Augue interdum velit euismod in. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean.';

    return (
        <div className='teamPage'>
            <TextHeader />
            <Mangers managers={emploees.filter( emp => emp.isManager )} />
            <TextMiddle />
            <div className='teamPage-null flex'></div>
            <SliderTeam workers={emploees.filter( emp => !emp.isManager)} />
            <div className='teamPage-null flex'></div>
            <ReadOurArticles text={text} />
        </div>
    )
}

msContentScript.propTypes = {
    //From store
    isLoading: PropTypes.bool,
    isLoaded: PropTypes.bool,
    isError: PropTypes.bool,
    emploees: PropTypes.array,
    loadAllEmploees: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        isLoading: state.emploees.isLoading,
        isLoaded: state.emploees.isLoaded,
        isError: state.emploees.isError,
        emploees: mapToArr(state.emploees.entities)
    }
}

const mapToDispatch = {
    loadAllEmploees
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( TeamPage );