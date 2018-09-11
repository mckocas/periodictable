import React,{Component} from 'react';
import './InfoContainer.css';

class InfoContainer extends Component{
    closeContainer = () =>{
        const infoContainer = document.getElementsByClassName("infoContainer")[0];
        infoContainer.style.display = 'none';
    }
    render(){
        return (
            <div className='infoContainer'>
                <div><button onClick={this.closeContainer} className='closeBt'>X</button></div>
                <div>
                    <h3>{this.props.element.name}</h3>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Symbol</th>
                                <th>Number</th>
                                <th>Mass</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.element.symbol}</td>
                                <td>{this.props.element.number}</td>
                                <td>{this.props.element.mass}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lectus nisi, lacinia non lorem quis, molestie maximus ex. Pellentesque sed laoreet turpis. Nulla nec arcu id arcu tempor iaculis. Proin tempor lacus nisi. Phasellus eu vestibulum tortor. Donec augue velit, hendrerit quis nibh id, tempor ullamcorper nisl. Sed pellentesque congue pharetra. Sed bibendum justo vitae dolor condimentum luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce venenatis turpis tristique, elementum odio nec, dignissim sapien. Vivamus faucibus ultricies ex, sit amet vestibulum massa ornare id. Etiam vitae tempor sem. In hac habitasse platea dictumst. Mauris eget hendrerit mi, non scelerisque enim. Nam ornare justo tellus, at rhoncus risus laoreet non.</p>
                </div>
            </div>
        );
    }
}

export default InfoContainer;