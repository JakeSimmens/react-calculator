// import logo from './logo.svg';
import React from 'react';
//import ReactDOM from 'react-dom';
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
    let ONE_TENTH = .1;
    this.state = {
      prevNum: null,
      currentNum: 0,
      currentOp: null,
      display: 0,
      rightSideOfDecimal: false,
      nextTenthCounter: ONE_TENTH,
      clearDisplayNext: false
    }
  }

  handleNumClick(num) {
    let addDigitToDisplay;
    let decimalTenth = this.state.nextTenthCounter;
    console.log("num: ", this.state);

    if(this.state.clearDisplayNext){
      if(this.state.rightSideOfDecimal){
        addDigitToDisplay = num * decimalTenth;
        decimalTenth *= .1;
      } else {
        addDigitToDisplay = num;
      }
    } else {
      if(this.state.rightSideOfDecimal){
        addDigitToDisplay = this.state.display + Math.round(decimalTenth * num, decimalTenth);
        decimalTenth *= .1;
      } else {
        addDigitToDisplay = this.state.display * 10 + num;
      }

    }

    this.setState( (state) => {
      return {
        display: addDigitToDisplay,
        currentNum: addDigitToDisplay,
        nextTenthCounter: decimalTenth,
        clearDisplayNext: false
      };
    });
  }

  handleDecimalClick(){

    this.setState( () => {
      console.log(this.state);
      let display;

      if(this.state.clearDisplayNext){
          display = 0;
      } else {
          display = this.state.display;
      }

      return {
        rightSideOfDecimal: true,
        prevNum: this.state.currentNum,
        currentNum: 0,
        display: display
      };
    });

  }

  //try parseFloat

  handleEqualsClick(){

    if(this.state.currentOp === "+"){
      this.setState( (state) => {
        let result = this.state.prevNum + this.state.currentNum;
        return {
          display: result,
          currentNum: result,
          currentOp: null,
          prevNum: null,
          clearDisplayNext: true,
          rightSideOfDecimal: false
        }
      });
    }

    if(this.state.currentOp === "-"){
      this.setState( (state) => {
        let result = this.state.prevNum - this.state.currentNum;
        return {
          display: result,
          currentNum: result,
          currentOp: null,
          prevNum: null,
          clearDisplayNext: true,
          rightSideOfDecimal: false
        }
      });
    }

    if(this.state.currentOp === "x"){
      this.setState( (state) => {
        let result = this.state.prevNum * this.state.currentNum;
        return {
          display: result,
          currentNum: result,
          currentOp: null,
          prevNum: null,
          clearDisplayNext: true,
          rightSideOfDecimal: false
        }
      });
    }

    if(this.state.currentOp === "/"){
      this.setState( (state) => {
        let result = this.state.prevNum / this.state.currentNum;
        return {
          display: result,
          currentNum: result,
          currentOp: null,
          prevNum: null,
          clearDisplayNext: true,
          rightSideOfDecimal: false
        }
      });
    }
  }


  handleOpClick(op) {

    if(op === "AC"){
      this.setState( (state) => {
        return {
          prevNum: null,
          currentNum: 0,
          currentOp: null,
          display: 0,
          rightSideOfDecimal: false,
          nextTenthCounter: .1,
          clearDisplayNext: false
          }
        });
    }

    if(op === "X^Y"){
      
    }

    this.setState((state) => {
      return {
        currentOp: op,
        prevNum: this.state.currentNum,
        clearDisplayNext: true,
        rightSideOfDecimal: false
      };
    })
  }


  render(){
    return(
      <div>
        <Display output = {this.state.display}/>

        <div className="row">
          <BtnForNum buttonNum={"AC"} onClick={() => this.handleOpClick("AC")}/>
          <BtnForNum buttonNum={"X^Y"} onClick={() => this.handleOpClick("X^Y")}/>
          <BtnForNum buttonNum={"X^2"} onClick={() => this.handleNumClick("X^2")}/>
          <BtnForOperation operation={"/"} className="btn" onClick={() => this.handleOpClick("/")} />
        </div>
        <div className="row">
          <BtnForNum buttonNum={7} onClick={() => this.handleNumClick(7)}/>
          <BtnForNum buttonNum={8} onClick={() => this.handleNumClick(8)}/>
          <BtnForNum buttonNum={9} onClick={() => this.handleNumClick(9)}/>
          <BtnForOperation operation={"x"} className="btn" onClick={() => this.handleOpClick("x")} />
        </div>
        <div className="row">
          <BtnForNum buttonNum={4} onClick={() => this.handleNumClick(4)}/>
          <BtnForNum buttonNum={5} onClick={() => this.handleNumClick(5)}/>
          <BtnForNum buttonNum={6} onClick={() => this.handleNumClick(6)}/>
          <BtnForOperation operation={"-"} className="btn" onClick={() => this.handleOpClick("-")} />
        </div>
        <div className="row">
          <BtnForNum buttonNum={1} onClick={() => this.handleNumClick(1)}/>
          <BtnForNum buttonNum={2} onClick={() => this.handleNumClick(2)}/>
          <BtnForNum buttonNum={3} onClick={() => this.handleNumClick(3)}/>
          <BtnForOperation operation={"+"} className="btn" onClick={() => this.handleOpClick("+")} />
        </div>
        <div className="row">
          <BtnForNum buttonNum={0} onClick={() => this.handleNumClick(0)}/>
          <BtnForNum buttonNum={"."} onClick={() => this.handleDecimalClick()}/>
          <BtnForNum buttonNum={0} onClick={() => this.handleNumClick(0)}/>
          <BtnForEquals operation={"="} className="btn" onClick={() => this.handleEqualsClick("=")} />
        </div>

      </div>
    );
  }
}


function BtnForNum(props){
    let buttonNum = props.buttonNum;
    return <button 
      className="btn"
      key={buttonNum}
      onClick= {() => props.onClick()}
      >
      {buttonNum}
    </button>;
  }

function BtnForOperation(props){
  let btnOper = props.operation;
  return <button 
    className="btn"
    key={btnOper}
    onClick= {() => props.onClick()}
    >
    {btnOper}
  </button>;
}

function BtnForEquals(props){
  let btnOper = props.operation;
  return <button 
    className="btn"
    key={btnOper}
    onClick= {() => props.onClick()}
    >
      {btnOper}
  </button>;
}

function Display(props){
  return (
      <div className="result row">{props.output}</div>
  );
  
}


export default App;
