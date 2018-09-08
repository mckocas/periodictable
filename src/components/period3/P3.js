import React from 'react';
import El from '../element/El';
import './P3.css';

const P3 = (period) =>{
    return (
        <div className='period3'>
            <div className='firstGroup'>
                <El attr = {period.period[0]}/>
                <El attr = {period.period[1]}/>
            </div>
            <div className='secondGroup'>
                <El attr = {period.period[2]}/>
                <El attr = {period.period[3]}/>
                <El attr = {period.period[4]}/>
                <El attr = {period.period[5]}/>
                <El attr = {period.period[6]}/>
                <El attr = {period.period[7]}/>
            </div>
        </div>
    );
}

export default P3;