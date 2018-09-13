import React, {Component} from 'react';
import './BlockSelection.css';

class BlockSelection extends Component {

    getBlockSelection= (block) =>{
        if(this.props.getBlockSelection){
            this.props.getBlockSelection(block);
        }
    }

    render(){
        return (
            <div className='blockSelection'>
                <div className = 'optionName'><h5>Blocks</h5></div>

                <div className = 'blockButtons'>
                    <br/>
                    <button onClick={() => this.getBlockSelection('s')}>s</button>
                    <button onClick={() => this.getBlockSelection('p')}>p</button>
                    <button onClick={() => this.getBlockSelection('d')}>d</button>
                    <button onClick={() => this.getBlockSelection('f')}>f</button>
                </div>
                
                
            </div>
        );
    }
}

export default BlockSelection;