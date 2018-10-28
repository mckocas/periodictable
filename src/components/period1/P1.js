import React, {Component} from 'react';
import El from '../element/El';
import './P1.css';

class P1 extends Component{
    getElement =(el)=>{
        if(this.props.getElement){
            this.props.getElement(el);
        }      
    }
    render(){
        return(
            <div className='period1'>
                {this.props.period.map((i)=>{ return <El key={i.number} attr = {i} getElement={el=>this.getElement(el)}/>})}
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