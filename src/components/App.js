import React from 'react';

import  '../App.css'

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
            <input type="checkbox" id="uppercase" checked></input>
          </div>
          <div className="setting">
            <label>Include numbers </label>
            <input type="checkbox" id="uppercase" checked></input> 
          </div>
          <div className="setting">
            <label>Include symbols </label>
            <input type="checkbox" id="uppercase" checked></input>
          </div>
        </div>
        <button className="btn btn-large" id="generate">Generate Password</button>
      </div>
    </div>
  );
};

export default App;