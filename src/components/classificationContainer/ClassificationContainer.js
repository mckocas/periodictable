import React, {Component} from 'react';
import PeriodSelection from '../periodSelection/PeriodSelection';
import './ClassificationContainer.css';


class ClassificationContainer extends Component{
    getPeriodSelection = (period) => {
        if(this.props.setPeriodSelection){
            this.props.setPeriodSelection(period);
        }
    }
    render(){
        return(
            <div className='classificationContainer'>
                <PeriodSelection getPeriodSelection = {period => this.getPeriodSelection(period)} />
            </div>
        )
    }
}

export default ClassificationContainer;