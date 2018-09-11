import React, {Component} from 'react';
import El from '../element/El';
import './P1.css';

class P1 extends Component{
    getElementName =(elName)=>{
        if(this.props.getElementName){
            this.props.getElementName(elName);
        }      
    }
    render(){
        return(
            <div className='period1'>
                <El attr = {this.props.period[0]}  getElementName={elName => this.getElementName(elName)}/>
                <El attr = {this.props.period[1]}/>
            </div>
        );
    }
}

/*
const P1 = (period) =>{
    return (
        <div className='period1'>
            <El attr = {period.period[0]} />
            <El attr = {period.period[1]}/>
        </div>
    );
}*/

export default P1;