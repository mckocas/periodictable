import React, {Component} from 'react';
import './PeriodSelection.css';

class PeriodSelection extends Component{
    getPeriodSelection = (val) => {
        if(this.props.getPeriodSelection){
            this.props.getPeriodSelection(val);
        }
    }
    render(){
        return(
            <div className='periodSelection'>
                <button onClick={() => this.getPeriodSelection('1')}>1</button>
                <button onClick={() => this.getPeriodSelection('2')}>2</button>
                <button onClick={() => this.getPeriodSelection('3')}>3</button>
                <button onClick={() => this.getPeriodSelection('4')}>4</button>
                <button onClick={() => this.getPeriodSelection('5')}>5</button>
                <button onClick={() => this.getPeriodSelection('6')}>6</button>
                <button onClick={() => this.getPeriodSelection('7')}>7</button>
                <button onClick={() => this.getPeriodSelection('lanthanides')}>Lanthanides</button>
                <button onClick={() => this.getPeriodSelection('actinides')}>Actinides</button>

            </div>
        );
    }
}

export default PeriodSelection;