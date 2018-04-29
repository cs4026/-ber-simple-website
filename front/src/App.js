import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {load,save} from './utils'
import numbers from './numbers'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      truth: true,
      types: ["Vegetarian","vegan"],
      choice: -1,
      years: -1,
      submited: false,
      savings: [[700,533280]],
      genesis: true
    }
    this.typeSwtich = this.typeSwtich.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getSavings = this.getSavings.bind(this)
  }

  typeSwtich(preference){
    this.setState({
      truth:false,
      choice: preference
    })
    document.body.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);;
  }

  handleKeyPress = (e) => {
    e.preventDefault()
    if(!numbers[this.state.years]) alert("Number not formatted correctly");
    else this.setState({submited: true})
  }

  handleChange(input){
    this.setState({years:input.target.value})
    document.body.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  getSavings(years){
    document.body.style.background ="#18ec99"
    return {
      money: numbers[years]*this.state.savings[this.state.choice][0],
      water: numbers[years]*this.state.savings[this.state.choice][1],
  }
}
  render() {
    let g = load()
    if(!g){
      save()
      return(
        <div>
        <div class = "intro">
        <div class="text">
        <div class="underline"> Welcome to the Calculator! </div><br/>
        This tool will allow you to calculate how much money and water you saved per year
        from being a Vegetarian <br />
        Click&nbsp;
        <div class="underline3" onClick={() => {this.setState({genesis: false})}}>here</div>
        &nbsp;to continue
      </div>
      </div>
      <span class="watermark-horizontal">
        Created by: Carlos Santos
    </span>
      <span class="watermark-vertical">- email: carlossantos@outlook.com</span>
      </div>
      )
    }
    else if(this.state.truth){
      return (
        <div class = "t">
        <div class="text">
        <div class="underline" onClick={() => {this.typeSwtich(0)}}> Calculate </div>
      </div>
      </div>
    )
  }
  else if(!this.state.truth && !this.state.submited){
    return(
      <div class ="t">
        <div class="text2" >
          Enter the number of years you've been a {this.state.types[this.state.choice]}<br/>
      </div>
      <div class="container">
        <div class="container__item">
          <form onSubmit={this.handleKeyPress}>
            <input type="string" class="form__field" placeHolder="Write number out ex. (sixty-nine)" onChange={this.handleChange}/>
          </form>

        </div>
      </div>
    </div>
  )
}else{
  let savings = this.getSavings(this.state.years)
  let c ="Congrats!!! 🎉"
  let s="You've saved"
  let saving = "$"+savings.money.toLocaleString('en')
  let water = savings.water.toLocaleString('en')+" gallons of water"
  let y= "over the last " +parseInt(numbers[this.state.years]).toLocaleString('en')+ " years!"

  return(
    <div>
    
    <div class = "t">
    <div class="text2">
      {c}
      <br/>
      {s}
      <br/>
      <div class="underline2">
      {saving}
      </div>
      <br/>
      &
      <br/>
      <div class="underline2">
      {water}
      </div>
      <br/>
      {y}
      <br/>
    </div>
  </div>
  <footer> Created by: Carlos Santos | email: carlossantos@outlook.com</footer>
  </div>
  )
}
}
}

export default App;
