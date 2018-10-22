import React, { Component } from 'react';
import PeriodicTable from './components/periodicTable/PeriodicTable';
import InfoContainer from './components/infoContainer/InfoContainer';
import ClassificationContainer from './components/classificationContainer/ClassificationContainer';
import Elements from './Elements';
import Descriptions from './Descriptions';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      elements: Elements,
      descriptions: Descriptions,
      element:{},
      colors: [],
      selectedOption: 'Periodic Table',
      selectedOptionDesc: 'Interactive periodic table. Click the tabs at the top to explore elements. Click the elements for more information.'
    }
  }

  componentDidMount(){
    this.getColors();
  }

  demoMethod = () => {
    console.log(this.state.descriptions.groups[0].desc)
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
      this.setState({selectedOption: 'Periodic Table'});
      this.setState({selectedOptionDesc: this.state.descriptions.periodictable[0].desc})
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
    let option = '';
    let num = -1;
    if(period <= 7){
      option = 'Period ' + period;
      num = period - 1;
    }else if(period === 'lanthanides'){
      option = 'Lanthanides';
      num = 7;
    }else if(period === 'actinides'){
      option = 'Actinides'
      num = 8;
    }
    this.setState({selectedOption: option });
    this.setState({selectedOptionDesc: this.state.descriptions.periods[num].desc })
    this.colorizePeriodSelection(period);
  }

  colorizeGroupSelection(group){
    const periods = this.getPeriods();
    let groupNumber = Number(group) - 1;
    const gN = groupNumber;
    let ln = -1;
    let i = -1;
    if(groupNumber === 0 || groupNumber === 17){
      ln = 6;
      i = 0;
    }
    else if(groupNumber === 1 || (groupNumber >= 12 && groupNumber <=16)){
      ln = 6;
      i = 1;
    }
    else if(groupNumber === 2){
      ln = 4;
      i = 3;
    }else if(groupNumber >=3 && groupNumber <=11){
      ln = 6;
      i= 3;
    }

    for(let x = 0; x < periods.length; x++){
      if(groupNumber >= 12 && groupNumber <=16){
        groupNumber = gN - 10;
      }
      else if(groupNumber === 17){
        groupNumber = gN - 16;
      }
      if(groupNumber === gN - 10 && x >= 3){
        groupNumber = gN;
      }
      else if(groupNumber === gN - 16 && (x >= 1 && x<=2)){
        groupNumber = 7;
      }
      else if(groupNumber === gN - 16 && x>=3){
        groupNumber = gN;
      }
      for(let y = 0; y < periods[x].length; y++){
        if((x >= i && x <= ln) && (y === groupNumber)){
          continue;
        }
        let change = periods[x][y];
        change.background = "black";
        this.setState({change});
      }
    }
  }
  setGroupSelection(group){
    this.clearSettings();
    this.setState({selectedOption: 'Group ' + group});
    this.setState({selectedOptionDesc: this.state.descriptions.groups[group - 1].desc});
    this.colorizeGroupSelection(group);
  }

  colorizeBlockSelection(block){
    const periods = this.getPeriods();
    console.log(block);
    if(block === 's'){
      for(let i = 1; i< periods.length; i++){
       for(let k = 0; k < periods[i].length; k++){
        if(k < 2 && i < 7){
          continue
        }
        let change = periods[i][k];
        change.background = 'black';
        this.setState({change});
       } 
      }
    }
    else if(block === 'p'){
      for(let i = 0; i < periods.length; i++){
        for(let k = 0; k < periods[i].length; k++){
          if(i > 0 && i < 7){
            if(i<3 && k>1){
              continue;
            }
            else if(i>2 && k >11){
              continue;
            }
          }
          let change = periods[i][k];
          change.background = 'black';
          this.setState({change});
        }
      }
    }
    else if(block === 'd'){
      for(let i = 0; i< periods.length; i++){
        for(let k = 0; k < periods[i].length; k++){
          if((i>2 && i < 7) && (k>1 && k<12)){
            continue;
          }
          let change = periods[i][k];
          change.background = 'black';
          this.setState({change});
        }
      }
    }
    else if(block === 'f'){
      for(let i = 0; i< 7; i++){
        for(let k = 0; k < periods[i].length; k++){
          let change = periods[i][k];
          change.background = 'black';
          this.setState({change});
        }
      }      
    }

  }
  setBlockSelection(block){
    let num = -1;
    if(block === 's'){
      num = 0;
    }else if(block === 'p'){
      num = 1;
    }else if(block === 'd'){
      num = 2;
    }else if(block === 'f'){
      num = 3;
    }
    this.clearSettings();
    this.setState({selectedOption: block + ' Block'});
    this.setState({selectedOptionDesc: this.state.descriptions.blocks[num].desc});
    this.colorizeBlockSelection(block);
  }

  colorizeClassificationSelection(cf){
    const periods = this.getPeriods();
      for(let i = 0; i< periods.length; i++){
        for(let k = 0; k < periods[i].length;k++){
          let change = periods[i][k];
          if(cf === change.classification){
            continue;
          }
          change.background = 'black';
          this.setState({change});
      }
    }
  }
  setClassificationSelection(cf){
    this.clearSettings();
    let num = -1;
    if(cf === 'Metal'){
      num = 0;
    }else if(cf === 'Non-metal'){
      num = 1;
    }else if(cf === 'Metalloid'){
      num = 2;
    }else if(cf === 'Unknown'){
      num = 3;
    }
    this.setState({selectedOption: cf});
    this.setState({selectedOptionDesc: this.state.descriptions.classifications[num].desc})
    this.colorizeClassificationSelection(cf);
  }

  render() {
    return (
      <div>
        <button onClick={this.demoMethod}>TryDemoMethod</button>
        <ClassificationContainer
          setPeriodSelection = { period => this.setPeriodSelection(period)}
          setGroupSelection = {group => this.setGroupSelection(group)}
          setBlockSelection = {block => this.setBlockSelection(block)}
          setClassificationSelection = { cf => this.setClassificationSelection(cf)}
          clearSettings = { () => this.clearSettings()}
        />
        <InfoContainer element={this.state.element} />
        <PeriodicTable 
          Elements ={this.state.elements} 
          setElement={el => this.setElement(el)}
          option={this.state.selectedOption}
          optionDesc = {this.state.selectedOptionDesc}  
          />
      </div>
    );
  }
}

export default App;
