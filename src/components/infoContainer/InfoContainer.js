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
                    <h3>{this.props.name}</h3>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere dictum arcu at semper. Aliquam finibus erat ullamcorper lorem laoreet vulputate. Maecenas ultrices pulvinar quam. Praesent congue hendrerit urna, ut aliquam justo feugiat vel. Fusce sed arcu vel erat luctus mattis vel sed odio. Pellentesque nulla leo, vehicula at purus tempus, egestas volutpat mauris. Phasellus efficitur vulputate erat aliquam vehicula. Donec ex diam, sollicitudin eget turpis non, mollis congue libero. Curabitur et molestie urna, quis bibendum nisl. Quisque eget lorem blandit, scelerisque risus in, aliquet lacus. Donec convallis tincidunt sollicitudin. Morbi lobortis aliquet viverra.</p>
                </div>
            </div>
        );
    }
}

export default InfoContainer;