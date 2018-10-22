import React, {Component} from 'react';
import './DescriptionContainer.css';

class DescriptionContainer extends Component {
    render(){
        return(
            <div className='descriptionContainer'>
                <div className='demo'>
                    <div><h1>{this.props.option}</h1></div>
                    <div><p>{this.props.optionDesc}</p></div>
                </div>
            </div>
        );
    }
}

export default DescriptionContainer;