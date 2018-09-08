import React from 'react';
import El from '../element/El';
import './P1.css';


const P1 = (period) =>{
    return (
        <div className='period1'>
            <El attr = {period.period[0]} />
            <El attr = {period.period[1]}/>
        </div>
    );
}

export default P1;