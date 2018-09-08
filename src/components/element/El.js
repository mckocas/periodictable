import React from 'react';
import Tilt from 'react-tilt';
import './El.css';

const El = ({attr}) =>{
    return (
        <div>
            <Tilt className='Tilt' options = {{max:50}} style={{height: 55, width:55}}>
            <div className='Tilt-inner'>
                <span className='atomicNum'>{attr.number}</span>
                <h3>{attr.symbol}</h3>
                <span className='atomicMass'>{attr.mass}</span>
            </div>
            </Tilt>
        </div>
    )
}

export default El;