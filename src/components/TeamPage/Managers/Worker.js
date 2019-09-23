import React from 'react'
import PropTypes from 'prop-types'

import './style.sass'
import '../../../style/_position.sass'

const Worker = ({ worker }) => (
    <div className='manager-root'>
        <div className='manager-photo'>
            <div className='manager-photo__wrap'>
                <img src={`../src/img/team/${worker.photo}`} />
            </div>
        </div>
        <div className='manager-info'>
            <div className='manager-info__name'>
                <div>{worker.name}</div>
                <div>{worker.surname}</div>
            </div>
            <div className='manager-info__position'>
                {worker.position}
            </div>
        </div>
    </div>
)

Worker.propTypes = {
    //From component
    worker: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        surname: PropTypes.string,
        position: PropTypes.string,
        photo: PropTypes.string,
        isManeger: PropTypes.bool
    })
}

export default Worker;