import React, {Component} from 'react';
import './GroupSelection.css';

class GroupSelection extends Component {
    getGroupSelection = (val) => {
        if(this.props.getGroupSelection){
            this.props.getGroupSelection(val);
        }
    }
    render(){
        return(
            <div className='groupSelection'>
                <div className = 'optionName'><h5>Groups</h5></div>

                <div className = 'groupButtons'>
                    <br/>
                    <button onClick={() => this.getGroupSelection('1')}>1</button>
                    <button onClick={() => this.getGroupSelection('2')}>2</button>
                    <button onClick={() => this.getGroupSelection('3')}>3</button>
                    <button onClick={() => this.getGroupSelection('4')}>4</button>
                    <button onClick={() => this.getGroupSelection('5')}>5</button>
                    <button onClick={() => this.getGroupSelection('6')}>6</button>
                    <button onClick={() => this.getGroupSelection('7')}>7</button>
                    <button onClick={() => this.getGroupSelection('8')}>8</button>
                    <button onClick={() => this.getGroupSelection('9')}>9</button>
                    <button onClick={() => this.getGroupSelection('10')}>10</button>
                    <button onClick={() => this.getGroupSelection('11')}>11</button>
                    <button onClick={() => this.getGroupSelection('12')}>12</button>
                    <button onClick={() => this.getGroupSelection('13')}>13</button>
                    <button onClick={() => this.getGroupSelection('14')}>14</button>
                    <button onClick={() => this.getGroupSelection('15')}>15</button>
                    <button onClick={() => this.getGroupSelection('16')}>16</button>
                    <button onClick={() => this.getGroupSelection('17')}>17</button>
                    <button onClick={() => this.getGroupSelection('18')}>18</button>
                </div>

            </div>
        );
    }
}

export default GroupSelection;