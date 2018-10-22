import React, {Component} from 'react';
import DescriptionContainer from '../descriptionContainer/DescriptionContainer';
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
    getElement = el => {
        if(this.props.setElement){
            this.props.setElement(el)
        }
    }
    render(){
        return(
            <div className='periodicTable'>
                <DescriptionContainer option ={this.props.option} optionDesc={this.props.optionDesc}/>
                <P1 period={this.props.Elements.period1} getElement = {el => this.getElement(el)}/>
                <P2 period={this.props.Elements.period2} getElement = {el => this.getElement(el)}/>
                <P3 period={this.props.Elements.period3} getElement = {el => this.getElement(el)}/>
                <P4 period={this.props.Elements.period4} getElement = {el => this.getElement(el)}/>
                <P5 period={this.props.Elements.period5} getElement = {el => this.getElement(el)}/>
                <P6 period={this.props.Elements.period6} getElement = {el => this.getElement(el)}/>
                <P7 period={this.props.Elements.period7} getElement = {el => this.getElement(el)}/>
                <Lanthanides period={this.props.Elements.lanthanides} getElement = {el => this.getElement(el)}/>
                <Actinides period={this.props.Elements.actinides} getElement = {el => this.getElement(el)}/>
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