import React, { Component } from 'react';
import PeriodicTable from './components/periodicTable/PeriodicTable';
import InfoContainer from './components/infoContainer/InfoContainer';
import Elements from './Elements';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      elements: Elements,
      element:{}
    }
  }
  
  setElement(el){
    this.setState({element: el});
  }
  render() {
    return (
      <div>
        <InfoContainer element={this.state.element} />
        <PeriodicTable Elements ={this.state.elements} setElement={el => this.setElement(el)}/>
      </div>
    );
  }
}

export default App;
