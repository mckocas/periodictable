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
      elementName: ''
    }
  }
  
  setElementName(elName){
    this.setState({elementName: elName});
    console.log(elName);
  }
  render() {
    return (
      <div>
        <InfoContainer name ={this.state.elementName}/>
        <PeriodicTable Elements ={this.state.elements} setElementName={elName => this.setElementName(elName)}/>
      </div>
    );
  }
}

export default App;
