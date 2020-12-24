// import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (

    <div>
      <div className="row">
        <Display />
      </div>
      <ButtonsRow chars={["AC","x^y","x^2","/"]} />
      <ButtonsRow chars={["7","8","9","x"]} />
      <ButtonsRow chars={["4","5","6","-"]} />
      <ButtonsRow chars={["1","2","3","+"]} />
      <ButtonsRow chars={["0",".","+/-","="]} />

    </div>


  );
}

function Display(){
  let value = 596;
  return <div className="result">{value}</div>
}

function Squares(){
  let nums = [6,7,8,9,10];
  let squares = nums.map(
    (num) => {
      return <li key={num} >{num * num}</li>
    });
  console.log(squares);
  return <ul>{squares}</ul>;

}

function ButtonsRow(props){
  let items = props.chars;

  let buttons = items.map(
    (button) => {
      return <button className="btn">{button}</button>;
    }
  )
  return <div className="row">{buttons}</div>;
}

class Another extends React.Component {

  constructor(props){
    super(props);
    this.state = {name: props.name};
  }
  render() {
    return (
      <button onClick={() => console.log("hi")}>{this.state.name}</button>
    );
  }
}


export default App;
