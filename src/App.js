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
    this.state = {
      prevNum: null,
      currentNum: 0,
      currentOp: null,
      currentDisplay: 0,
      decimalForNext: false,
      decimalLocation: .1,
      clearDisplayNext: false
    }
  }

  handleNumClick(num) {
    let addDigitToDisplay;
    // if(decimalForNext){
    //   num = num/10
    // }

    if(this.state.clearDisplayNext){
      addDigitToDisplay = num;
    } else {
      

      addDigitToDisplay = this.state.currentDisplay * 10 + num;
    }

    this.setState( (state) => {
      return {
        currentDisplay: addDigitToDisplay,
        currentNum: addDigitToDisplay,
        clearDisplayNext: false
      };
    });
  }

  handleEqualsClick(){

    if(this.state.currentOp === "+"){
      this.setState( (state) => {
        let result = this.state.prevNum + this.state.currentNum;
        return {
          currentDisplay: result,
          currentNum: result,
          currentOp: null,
          prevNum: null,
          decimalForNext: false
        }
      });
    }

    if(this.state.currentOp === "-"){
      this.setState( (state) => {
        let result = this.state.prevNum - this.state.currentNum;
        return {
          currentDisplay: result,
          currentNum: result,
          currentOp: null,
          prevNum: null,
          decimalForNext: false
        }
      });
    }

    if(this.state.currentOp === "x"){
      this.setState( (state) => {
        let result = this.state.prevNum * this.state.currentNum;
        return {
          currentDisplay: result,
          currentNum: result,
          currentOp: null,
          prevNum: null,
          decimalForNext: false
        }
      });
    }

    if(this.state.currentOp === "/"){
      this.setState( (state) => {
        let result = this.state.prevNum / this.state.currentNum;
        return {
          currentDisplay: result,
          currentNum: result,
          currentOp: null,
          prevNum: null,
          decimalForNext: false
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
          currentDisplay: 0,
          decimalForNext: false,
          decimalLocation: .1,
          clearDisplayNext: false
          }
        });
    }

    this.setState((state) => {
      return {
        currentOp: op,
        prevNum: this.state.currentNum,
        clearDisplayNext: true,
        decimalForNext: false
      };
    })
  }



  handleDecimalClick(){
    this.setState( (state) => {
      let display;

      if(this.state.clearDisplayNext){
          display = "0.";
      } else {
          display = this.state.currentDisplay.toString().concat(".");
      }

      return {
        decimalForNext: true,
        currentDisplay: display
      };
    });
  }



  render(){
    return(
      <div>
        <Display output = {this.state.currentDisplay}/>

        <div className="row">
          <BtnForNum buttonNum={"AC"} onClick={() => this.handleOpClick("AC")}/>
          <BtnForNum buttonNum={"X^Y"} onClick={() => this.handleNumClick(0)}/>
          <BtnForNum buttonNum={"X^2"} onClick={() => this.handleNumClick(0)}/>
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

/* <ButtonsRow chars={["AC","x^y","x^2","/"]} />
<ButtonsRow chars={["7","8","9","x"]} />
<ButtonsRow chars={["4","5","6","-"]} />
<ButtonsRow chars={["1","2","3","+"]} />
<ButtonsRow chars={["0",".","+/-","="]} /> */

// function Display(props){
//   return (
//       <div className="result row">{props.output}</div>
//   );
  
// }

function Display(props){
  return (
      <div className="result row">{props.output}</div>
  );
  
}


export default App;
