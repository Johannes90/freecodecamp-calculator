import React, { Component } from "react";
import "./App.css";
import Key from "../components/Key/key";

class App extends Component {
  keyArr = [
    {
      operator: "Cl",
      action: input => input
    },
    {
      operator: "De",
      action: input => input
    },
    {
      operator: "x",
      action: input => input
    },
    {
      operator: "7",
      action: input => input
    },
    {
      operator: "8",
      action: input => input
    },
    {
      operator: "9",
      action: input => input
    },
    {
      operator: "/",
      action: input => input
    },
    {
      operator: "4",
      action: input => input
    },
    {
      operator: "5",
      action: input => input
    },
    {
      operator: "6",
      action: input => input
    },
    {
      operator: "+",
      action: input => input
    },
    {
      operator: "1",
      action: input => input
    },
    {
      operator: "2",
      action: input => input
    },
    {
      operator: "3",
      action: input => input
    },
    {
      operator: "-",
      action: input => input
    },
    {
      operator: "On",
      action: input => input
    },
    {
      operator: "0",
      action: input => input
    },
    {
      operator: ".",
      action: input => input
    },
    {
      operator: "=",
      action: input => input
    }
  ];
  keys = this.keyArr.map(key => {
    return (
      <Key operator={key.operator} key={key.operator} action={key.action} />
    );
  });
  render() {
    return (
      <div className="App">
        <div className="Calculator">
          <div className="Backplate">
            <div className="Display">
              <h2>8234*234</h2>
            </div>
            <div className="Key-plate">{this.keys}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
