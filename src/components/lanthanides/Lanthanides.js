import React, {Component} from 'react';
import El from '../element/El';
import './Lanthanides.css';

class Lanthanides extends Component{
    getElement =(el)=>{
        if(this.props.getElement){
            this.props.getElement(el);
        }      
    }
    render(){
        return (
            <div className='lanthanides'>
                {this.props.period.map((i)=>{ return <El key={i.number} attr = {i} getElement={el=>this.getElement(el)}/>})} 
            </div>
        );        
    }
}

/*
const Lanthanides = (period) =>{
    return (
        <div className='lanthanides'>

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


        </div>
    );
}*/

export default Lanthanides;