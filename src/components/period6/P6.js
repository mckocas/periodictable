import React, {Component} from 'react';
import El from '../element/El';
import './P6.css';

class P6 extends Component{
    getElement =(el)=>{
        if(this.props.getElement){
            this.props.getElement(el);
        }      
    }
    render(){
        return (
            <div className='period6'>
                {this.props.period.map((i)=>{ return <El key={i.number} attr = {i} getElement={el=>this.getElement(el)}/>})}     
            </div>
        );        
    }
}
/*
const P6 = (period) =>{
    return (
        <div className='period6'>

                <El attr = {period.period[0]}/>
                <El attr = {period.period[1]}/>
                <El attr = {period.period[2]}/>
                <El attr = {period.period[3]}/>
                <El attr = {period.period[4]}/>
                <El attr = {period.period[5]}/>
                <El attr = {period.period[6]}/>
                <El attr = {period.period[7]}/>
                <El attr = {period.period[8]}/>
                <El attr = {period.period[9]}/>
                <El attr = {period.period[10]}/>
                <El attr = {period.period[11]}/>
                <El attr = {period.period[12]}/>
                <El attr = {period.period[13]}/>
                <El attr = {period.period[14]}/>
                <El attr = {period.period[15]}/>
                <El attr = {period.period[16]}/>
                <El attr = {period.period[17]}/>


        </div>
    );
}*/

export default P6;