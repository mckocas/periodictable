import React, {Component} from 'react';
import PeriodSelection from '../periodSelection/PeriodSelection';
import GroupSelection from '../groupSelection/GroupSelection';
import BlockSelection from '../blockSelection/BlockSelection';
import ClassificationSelection from '../classificationSelection/ClassificationSelection';
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
    getClassificationSelection = (cf) => {
        if(this.props.setClassificationSelection){
            this.props.setClassificationSelection(cf);
        }
    }
    render(){
        return(
            <div className='classificationContainer'>
                <PeriodSelection getPeriodSelection = {period => this.getPeriodSelection(period)} />
                <GroupSelection getGroupSelection = {group => this.getGroupSelection(group)} />
                <BlockSelection getBlockSelection = {block => this.getBlockSelection(block)} />
                <ClassificationSelection getClassificationSelection = {cf => this.getClassificationSelection(cf)} />
            </div>
        )
    }
}

export default ClassificationContainer;