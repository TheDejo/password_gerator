import React from 'react';

import  '../App.css'

const resultEl = document.querySelector('#result')
const lengthEl = document.querySelector('#length')
const generateEl = document.querySelector('#generate')
const uppercaseEl = document.querySelector('#uppercase')
const lowercaseEl = document.querySelector('#result')
const numbersEl = document.querySelector('#numbers')
const symbolsEl = document.querySelector('#symbols')
const clipboardEl = document.querySelector('#clipboard')



generateEl.addEventListener('click', () => {
  const length = +lengthEl.value
  const hasLower = lowercaseEl.checked
  const hasUpper = uppercaseEl.checked
  const hasNumber = numbersEl.checked
  const hasSymbol = symbolsEl.checked
  
})

const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 48)
}

const getRandomSymbol = () => {
  const symbols = '!£$%^&*()_+@><'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

const App = () => {
  return (
    <div className="body">
      <div className="container">
        <h2>Password Generator</h2>
        <div className="result-container">
          <span className="result"></span>
          <button className="btn" id="clipboard">
            <ii className="far fa-clipboard"></ii>
          </button>
        </div>
        <div className="settings">
          <div className = "setting">
            <label>Password Length</label>
            <input type="number" id="length" min="4" max="20" value ="20"></input>
          </div>
          <div className="setting">
            <label>Include uppercase leters</label>
            <input type="checkbox" id="uppercase" checked></input>
          </div>
          <div className="setting">
            <label>Include lowercase leters</label>
            <input type="checkbox" id="lowercase" checked></input>
          </div>
          <div className="setting">
            <label>Include numbers </label>
            <input type="checkbox" id="numbers" checked></input> 
          </div>
          <div className="setting">
            <label>Include symbols </label>
            <input type="checkbox" id="symbols" checked></input>
          </div>
        </div>
        <button className="btn btn-large" id="generate">Generate Password</button>
      </div>
    </div>
  );
};

export default App;