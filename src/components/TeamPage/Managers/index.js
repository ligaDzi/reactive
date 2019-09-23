import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import AOS from 'aos'

import Worker from './Worker'

import './style.sass'
import '../../../style/_position.sass'

const Managers = ({ managers }) => { 
    useEffect( () => {
        AOS.init({
            duration: 2000,
            once: true
        })
    });
    
    return (

        <div className='teamPage-managers flex'>
            <div></div>
            <div>
                <div className='partners'>

                    {managers.map( (worker, i) => (
                        <div className='partners-wrap'
                            key={worker.id}
                            data-aos="fade-up"
                            data-aos-delay={`${(i * 200) + 100}`}
                            data-aos-duration="1000"
                            data-aos-easing="ease"
                        >
                            <Worker worker={worker} />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}


Managers.propTypes = {
    //From component
    managers: PropTypes.array
}

export default Managers;