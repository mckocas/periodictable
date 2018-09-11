import './Actinides.css';
import React, {Component} from 'react';
import El from '../element/El';

class Actinides extends Component{
    getElement =(el)=>{
        if(this.props.getElement){
            this.props.getElement(el);
        }      
    }
    render(){
        return (
            <div className='actinides'>
    
                    <El attr = {this.props.period[0]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[1]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[2]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[3]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[4]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[5]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[6]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[7]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[8]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[9]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[10]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[11]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[12]} getElement={el => this.getElement(el)}/>
                    <El attr = {this.props.period[13]} getElement={el => this.getElement(el)}/>  
    
            </div>
        );        
    }
}
/*
const Actinides = (period) =>{
    return (
        <div className='actinides'>

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

export default Actinides;