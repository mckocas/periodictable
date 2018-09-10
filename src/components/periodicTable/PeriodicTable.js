import React from 'react';
import P1 from '../period1/P1';
import P2 from '../period2/P2';
import P3 from '../period3/P3';
import P4 from '../period4/P4';
import P5 from '../period5/P5';
import Elements from '../../Elements';
import './PeriodicTable.css';

const PeriodicTable = (els) => {
    return(
        <div className='periodicTable'>
            <P1 period={Elements.period1} />
            <P2 period={Elements.period2} />
            <P3 period={Elements.period3} />
            <P4 period={Elements.period4} />
            <P5 period={Elements.period5} />
        </div>
    );
}

export default PeriodicTable;