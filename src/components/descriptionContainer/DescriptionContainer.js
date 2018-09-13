import React, {Component} from 'react';
import './DescriptionContainer.css';

class DescriptionContainer extends Component {
    render(){
        return(
            <div className='descriptionContainer'>
                <div className='demo'>
                    <div><h1>{this.props.option}</h1></div>
                    <div><p>Phasellus at quam leo. Duis ut sapien mauris. In molestie ac leo id scelerisque. Fusce libero lorem, finibus nec leo et, consectetur facilisis turpis. Nunc condimentum enim sed est commodo, at elementum arcu molestie. Aenean feugiat mi non nibh pulvinar, at mattis neque condimentum. Praesent hendrerit pellentesque dolor, vel varius felis aliquet at. Pellentesque tellus nulla, scelerisque aliquam ante nec, viverra feugiat enim.</p></div>
                </div>
            </div>
        );
    }
}

export default DescriptionContainer;