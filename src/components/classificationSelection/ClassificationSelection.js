import React, {Component} from 'react';
import './ClassificationSelection.css';

class ClassificationSelection extends Component{
    getClassificationSelection = (cf) =>{
        if(this.props.getClassificationSelection){
            this.props.getClassificationSelection(cf);
        }
    }
    render(){
        return(
            <div className='classificationSelection'>
                <div className= 'optionName'>
                    <h5>Classification</h5>
                </div>

                <div className= 'classificationbuttons'>
                    <br/>
                    <button onClick={() => this.getClassificationSelection('Metal')}>Metal</button>
                    <button onClick={() => this.getClassificationSelection('Non-metal')}>Non-metal</button>
                    <button onClick={() => this.getClassificationSelection('Metalloid')}>Metalloid</button>
                    <button onClick={() => this.getClassificationSelection('Unknown')}>Unknown</button>
                </div>
            </div>
        );
    }
}

export default ClassificationSelection;