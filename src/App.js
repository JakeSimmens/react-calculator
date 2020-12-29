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

class Calculator extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      prevNum: null,
      currentNum: 0,
      currentOp: null,
      display: "",
      rightSideOfDecimal: false,
      clearDisplayNext: false
    }
  }

  handleNumClick(num) {

    let resultStr;
    let currentNum;

    if(this.state.clearDisplayNext){
      resultStr = num.toString();
      currentNum = parseFloat(resultStr);
    } else {
      resultStr = this.state.display.concat(num.toString());
      currentNum = parseFloat(resultStr);
    }



    this.setState( () => {
      return {
        display: resultStr,
        currentNum: currentNum,
        clearDisplayNext: false
      };
    });
  }

  handleDecimalClick(){

    if(this.state.rightSideOfDecimal){
      return;
    }

    this.setState( () => {

      let display;
      let updatePrevNum = this.state.prevNum;

      if(this.state.clearDisplayNext){
        updatePrevNum = this.state.currentNum;
        display = "0.";

      } else {
          display = this.state.display.concat(".");
      }

      return {
        rightSideOfDecimal: true,
        prevNum: updatePrevNum,
        currentNum: 0,
        clearDisplayNext: false,
        display: display
      };
    });

  }

  handleEqualsClick(){

    if(this.state.prevNum === null){
      return;
    }

    let firstNum = this.state.prevNum;
    let secondNum = this.state.currentNum;

    if(this.state.currentOp === "+"){
      this.setState( (state) => {
        let result = firstNum + secondNum;
        return {
          clearDisplayNext: true,
          currentNum: result,
          currentOp: null,
          display: result.toString(),
          prevNum: null,
          rightSideOfDecimal: false
        }
      });
    }

    if(this.state.currentOp === "-"){
      this.setState( () => {
        let result = firstNum - secondNum;
        return {
          clearDisplayNext: true,
          currentNum: result,
          currentOp: null,
          display: result.toString(),
          prevNum: null,
          rightSideOfDecimal: false
        }
      });
    }

    if(this.state.currentOp === "x"){
      this.setState( () => {
        let result = firstNum * secondNum;
        return {
          clearDisplayNext: true,
          currentNum: result,
          currentOp: null,
          display: result.toString(),
          prevNum: null,
          rightSideOfDecimal: false
        }
      });
    }

    if(this.state.currentOp === "/"){
      this.setState( () => {
        let result = firstNum / secondNum;
        return {
          clearDisplayNext: true,
          currentNum: result,
          currentOp: null,
          display: result.toString(),
          prevNum: null,
          rightSideOfDecimal: false
        }
      });
    }

    if(this.state.currentOp === "^"){
      this.setState( () => {
        let result = Math.pow(firstNum, secondNum)
        return {
          clearDisplayNext: true,
          currentNum: result,
          currentOp: null,
          display: result.toString(),
          prevNum: null,
          rightSideOfDecimal: false
        }
      });
    }
  }


  handleOpClick(op) {

    if(op === "AC"){
      this.setState( () => {
        return {
          clearDisplayNext: false,
          currentNum: 0,
          currentOp: null,
          display: "",
          prevNum: null,
          rightSideOfDecimal: false,
          }
        });
    }


    this.setState(() => {
      return {
        clearDisplayNext: true,
        currentOp: op,
        prevNum: this.state.currentNum,
        rightSideOfDecimal: false
      };
    });
  }


  render(){
    return(
      <div>
        <Display output = {this.state.display}/>

        <div className="row">
          <BtnForNum buttonNum={"AC"} onClick={() => this.handleOpClick("AC")}/>
          <BtnForNum buttonNum={"X^Y"} onClick={() => this.handleOpClick("^")}/>
          <BtnForNum buttonNum={"?"} onClick={() => {}}/>
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
