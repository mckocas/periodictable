import React, {Component} from 'react';
import PeriodSelection from '../periodSelection/PeriodSelection';
import GroupSelection from '../groupSelection/GroupSelection';
import BlockSelection from '../blockSelection/BlockSelection';
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
    getBlockSelection = (block) => {
        if(this.props.setBlockSelection){
            this.props.setBlockSelection(block);
        }
    }
    render(){
        return(
            <div className='classificationContainer'>
                <PeriodSelection getPeriodSelection = {period => this.getPeriodSelection(period)} />
                <GroupSelection getGroupSelection = {group => this.getGroupSelection(group)} />
                <BlockSelection getBlockSelection = {block => this.getBlockSelection(block)} />
            </div>
        )
    }
}

export default ClassificationContainer;