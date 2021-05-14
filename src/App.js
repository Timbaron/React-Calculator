import React, { useEffect, useState } from 'react'
import './App.css';

export function App() {
  const numbers = [1,2,3,4,5,6,7,8,9];
  const operations = ["+","-","*","/"];

  const [firstNumber,setFirstNumber] = useState("");
  const [secondNumber,setSecondNumber] = useState("");
  const [operation,setOperation] = useState("");

  useEffect(
    () => {
    console.log(Number(firstNumber) + " " + operation + " " + secondNumber);

    }, [firstNumber,secondNumber, operation]
  );

  
  function clickNumbers(val){
    if(operation == ""){
    setFirstNumber(firstNumber + val);
    }
    else{
      setSecondNumber(secondNumber + val);
    }
  }

  function clickOperation(val) {
    setOperation(val);
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display"></div>
          <div className="buttons">
            <div className="leftSide">
              <div id="clearBtn">Clear</div>
                <div className="numbers">
                  {numbers.map((val,key) => {
                    return (
                      <div id="individualNumber"
                      onClick={() => {clickNumbers(val)}}
                      >{val}</div>
                    )
                  })}
                </div>
              </div>
              <div className="leftSide">
                {operations.map((val,key) => {
                  return <div id="operations" 
                  onClick={() => {clickOperation(val)}}
                  >{val}</div>
                } )}
          </div>
        </div>
      </div>
    </div>
  )
}
