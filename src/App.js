// import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (

    <div>
      <Button num={9} />
      <Button num={9}></Button>
      <h1>hello</h1>
      <Button num={9} />
      <Another name="tom" />
      <Another name="sam" />

      <Squares />

    </div>


  );
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

function Button(props){
  let items = [];
  for(let i=0; i < props.num; i++){
    let element = <button className="btn" key={i}>{i}</button>;
    items.push(element);
  }
  return <div>{items}</div>;
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
