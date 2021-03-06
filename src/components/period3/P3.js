import React, {Component} from 'react';
import El from '../element/El';
import './P3.css';

class P3 extends Component{
    getElement =(el)=>{
        if(this.props.getElement){
            this.props.getElement(el);
        }      
    }
    render(){
        return (
            <div className='period3'>
                <div className='firstGroup'>
                    <El attr = {this.props.period[0]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[1]} getElement={el => this.getElement(el)}/>
                </div>
                <div className='secondGroup'>
                    <El attr = {this.props.period[2]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[3]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[4]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[5]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[6]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[7]} getElement={el => this.getElement(el)}/>
                </div>
            </div>
        );        
    }
}
/*
const P3 = (period) =>{
    return (
        <div className='period3'>
            <div className='firstGroup'>
                <El attr = {period.period[0]}/>
                <El attr = {period.period[1]}/>
            </div>
            <div className='secondGroup'>
                <El attr = {period.period[2]}/>
                <El attr = {period.period[3]}/>
                <El attr = {period.period[4]}/>
                <El attr = {period.period[5]}/>
                <El attr = {period.period[6]}/>
                <El attr = {period.period[7]}/>
            </div>
        </div>
    );
}*/

export default P3;