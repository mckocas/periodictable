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

                <button onClick={() => this.getBlockSelection('s')}>s</button>
                <button onClick={() => this.getBlockSelection('p')}>p</button>
                <button onClick={() => this.getBlockSelection('d')}>d</button>
                <button onClick={() => this.getBlockSelection('f')}>f</button>
                
            </div>
        );
    }
}

export default BlockSelection;