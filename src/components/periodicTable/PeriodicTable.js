import React, {Component} from 'react';
import P1 from '../period1/P1';
import P2 from '../period2/P2';
import P3 from '../period3/P3';
import P4 from '../period4/P4';
import P5 from '../period5/P5';
import P6 from '../period6/P6';
import P7 from '../period7/P7';
import Lanthanides from '../lanthanides/Lanthanides';
import Actinides from '../actinides/Actinides'
import './PeriodicTable.css';

class PeriodicTable extends Component{
    getElementName = elName => {
        if(this.props.setElementName){
            this.props.setElementName(elName)
        }
    }
    render(){
        return(
            <div className='periodicTable'>
                <P1 period={this.props.Elements.period1}  getElementName = {elName => this.getElementName(elName)}/>
                <P2 period={this.props.Elements.period2} />
                <P3 period={this.props.Elements.period3} />
                <P4 period={this.props.Elements.period4} />
                <P5 period={this.props.Elements.period5} />
                <P6 period={this.props.Elements.period6} />
                <P7 period={this.props.Elements.period7} />
                <Lanthanides period={this.props.Elements.lanthanides} />
                <Actinides period={this.props.Elements.actinides} />
            </div>
        );
    }
}

/*
const PeriodicTable = (Elements) => {
    return(
        <div className='periodicTable'>
            <P1 period={Elements.Elements.period1} />
            <P2 period={Elements.Elements.period2} />
            <P3 period={Elements.Elements.period3} />
            <P4 period={Elements.Elements.period4} />
            <P5 period={Elements.Elements.period5} />
            <P6 period={Elements.Elements.period6} />
            <P7 period={Elements.Elements.period7} />
            <Lanthanides period={Elements.Elements.lanthanides} />
            <Actinides period={Elements.Elements.actinides} />
        </div>
    );
}*/

export default PeriodicTable;