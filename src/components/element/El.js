import React, {Component} from 'react';
import Tilt from 'react-tilt';
import './El.css';


class El extends Component {
    setElement = () =>{
        if(this.props.getElement){
            this.props.getElement(this.props.attr);
        }
        this.displayContainer();
    }

    displayContainer(){
        const infoContainer = document.getElementsByClassName('infoContainer')[0];
        infoContainer.style.display = 'block';      
    }
    render(){
        return (
            <div>
                <button onClick={this.setElement}>
                <Tilt className='Tilt'  options = {{max:50}} style={{height: 55, width:55}}>
                <div className='Tilt-inner'>
                    <span className='atomicNum'>{this.props.attr.number}</span>
                    <h3>{this.props.attr.symbol}</h3>
                    <span className='atomicMass'>{this.props.attr.mass}</span>
                </div>
                </Tilt>
                </button>
            </div>
        )        
    }
}
/*
const El = ({attr}) =>{
    return (
        <div>
            <button onClick={() => displayContainer()}>
            <Tilt className='Tilt'  options = {{max:50}} style={{height: 55, width:55}}>
            <div className='Tilt-inner'>
                <span className='atomicNum'>{attr.number}</span>
                <h3>{attr.symbol}</h3>
                <span className='atomicMass'>{attr.mass}</span>
            </div>
            </Tilt>
            </button>
        </div>
    )
}*/

export default El;