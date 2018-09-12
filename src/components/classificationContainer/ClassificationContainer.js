import React, {Component} from 'react';
import PeriodSelection from '../periodSelection/PeriodSelection';
import GroupSelection from '../groupSelection/GroupSelection';
import './ClassificationContainer.css';


class ClassificationContainer extends Component{
    getPeriodSelection = (period) => {
        if(this.props.setPeriodSelection){
            this.props.setPeriodSelection(period);
        }
    }
    getGroupSelection = (group) => {
        if(this.props.setGroupSelection){
            this.props.setGroupSelection(group);
        }
    }
    render(){
        return(
            <div className='classificationContainer'>
                <PeriodSelection getPeriodSelection = {period => this.getPeriodSelection(period)} />
                <GroupSelection getGroupSelection = {group => this.getGroupSelection(group)} />
            </div>
        )
    }
}

export default ClassificationContainer;