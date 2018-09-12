import React, { Component } from 'react';
import PeriodicTable from './components/periodicTable/PeriodicTable';
import InfoContainer from './components/infoContainer/InfoContainer';
import ClassificationContainer from './components/classificationContainer/ClassificationContainer';
import Elements from './Elements';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      elements: Elements,
      element:{},
      colors: [],
    }
  }

  componentDidMount(){
    this.getColors();
  }

  demoMethod = () => {
    this.clearSettings();
  }

  setElement(el){
    this.setState({element: el});
  }

  getPeriods(){
    const p1 = this.state.elements.period1;
    const p2 = this.state.elements.period2;
    const p3 = this.state.elements.period3;
    const p4 = this.state.elements.period4;
    const p5 = this.state.elements.period5;
    const p6 = this.state.elements.period6;
    const p7 = this.state.elements.period7;
    const lanthanides = this.state.elements.lanthanides;
    const actinides = this.state.elements.actinides;
    const periods = [p1,p2,p3,p4,p5,p6,p7,lanthanides,actinides];
    return periods;
  }

  getColors(){
    const periods = this.getPeriods();
    const colors = [];
    periods.forEach((prd) => {
      prd.forEach((elm) => {
        colors.push(elm.background);
      });
    });
    this.setState({colors: colors});
  }

  clearSettings(){
      const periods = this.getPeriods();
      const colors = this.state.colors;
      let i = 0;
      periods.forEach((prd) =>{
        prd.forEach((elm) =>{
          let change = elm;
          change.background = colors[i];
          i++;
          this.setState({change});
        })
      })
  }

  colorizePeriodSelection(period){
    const periods = this.getPeriods();
    const actinium = this.state.elements.period7[2];
    const lanthanum = this.state.elements.period6[2];
    let periodNumber;

    if(period === 'lanthanides'){
      periodNumber = 7;
    }
    else if(period === 'actinides'){
      periodNumber = 8;
    }
    else{
      periodNumber = Number(period) - 1;
    }

    if(period === 5){
      this.state.elements.lanthanides.forEach(elm =>{
        periods[5].push(elm);
      });
    }
    else if(period === 6){
      this.state.elements.actinides.forEach(elm =>{
        periods[6].push(elm);
      });
    }
    else if(period === 'lanthanides'){
      periods[7].unshift(lanthanum);
    }else if(period === 'actinides'){

      periods[8].unshift(actinium);
    }

    for(let i = 0; i<periods.length;i++){
      if(i === periodNumber){
        continue;
      }

      if(periodNumber === 5 && i === 7){
        continue;
      }
      else if(periodNumber === 6 && i === 8){
        continue;
      }

      for(let k = 0; k<periods[i].length;k++){
        if(periodNumber === 7 && i === 5 && k === 2){
          continue;
        }else if(periodNumber === 8 && i === 6 && k === 2){
          continue;
        }
        let change = periods[i][k];
        change.background= 'black';
        this.setState({change});
      }

      }
      if(period === 5){
        this.state.elements.lanthanides.forEach(elm =>{
          periods[5].pop(elm);
        });
      }
      else if(period === 6){
        this.state.elements.actinides.forEach(elm =>{
          periods[6].pop(elm);
        });
      }
      else if(period === 'lanthanides'){
        periods[7].shift(lanthanum);
      }
      else if(period === 'actinides'){
        periods[8].shift(actinium);
      }
  }

  setPeriodSelection(period){
    this.clearSettings();
    this.colorizePeriodSelection(period);
  }

  render() {
    return (
      <div>
        <button onClick={this.demoMethod}>Click ME!!!!!</button>
        <ClassificationContainer setPeriodSelection = { period => this.setPeriodSelection(period)}/>
        <InfoContainer element={this.state.element} />
        <PeriodicTable Elements ={this.state.elements} setElement={el => this.setElement(el)}/>
      </div>
    );
  }
}

export default App;
