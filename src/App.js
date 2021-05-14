import React from 'react'
import './App.css';

export function App() {
  const numbers = [1,2,3,4,5,6,7,8,9];
  const operations = ["+","-","*","/"];
  return (
    <div className="App">
      <div className="calculator">
        <div className="display"></div>
          <div className="buttons">
            <div className="leftSide">
              <div id="clearBtn">Clear</div>
                <div className="numbers">
                  {numbers.map((val,key) => {
                    return <div id="individualNumber">{val}</div>
                  })}
                </div>
              </div>
              <div className="leftSide">
                {operations.map((val,key) => {
                  return <div id="operations">{val}</div>
                } )}
          </div>
        </div>
      </div>
    </div>
  )
}
