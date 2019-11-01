import React from "react";
import logo from "./logo.svg";
import "./App.css";

import DatePickerManually from "./Components/FirstLearn/DatePickerManually";
import DatePickerUsage from "./Components/FirstLearn/DatePickerUsage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DatePickerUsage />
        <DatePickerManually />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
