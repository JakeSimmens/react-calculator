// import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (

    <div className="container">
      <Calculator />


    </div>


  );
}

///////////////////

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      parts: [],
      currentDisplay: 0,
      result: 0
    }
  }

  render(){
    return(
      <div>
      <Display output={this.state.result}/>
      <ButtonsRow chars={["AC","x^y","x^2","/"]} />
      <ButtonsRow chars={["7","8","9","x"]} />
      <ButtonsRow chars={["4","5","6","-"]} />
      <ButtonsRow chars={["1","2","3","+"]} />
      <ButtonsRow chars={["0",".","+/-","="]} />
      </div>
    );
  }
}

function Display(props){
  let value = props.output;
  return <div className="result row">{value}</div>;
}

function ButtonsRow(props){
  let items = props.chars;

  let buttons = items.map(
    (button) => {
      return <button key={button} className="btn" onClick={
        () => processBtnPress(button)
        }>{button}</button>;
    }
  )
  return <div className="row">{buttons}</div>;
}

function processBtnPress(char) {
  console.log("pressed", char);
}




export default App;
