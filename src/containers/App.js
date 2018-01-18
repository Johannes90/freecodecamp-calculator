import React, { Component } from "react";
import "./App.css";
import Key from "../components/Key/key";

class App extends Component {
  state = {
    result: [0],
    online: true
  };

  numberAction = number => {
    this.setState((prevState, props) => {
      let newResult = prevState.result;
      if (newResult.length === 1 && newResult[0] === 0) {
        newResult = [parseInt(number, 10)];
      } else {
        newResult.push(parseInt(number, 10));
      }
      return {
        result: newResult
      };
    });
  };

  operatorAction = operator => {
    this.setState((prevState, props) => {
      let newResult = prevState.result;
      newResult.push(operator);
      return {
        result: newResult
      };
    });
  };

  keyArr = [
    {
      operator: "Cl",
      action: () => {
        this.setState({
          result: [0]
        });
      },
      color: "#D0021B"
    },
    {
      operator: "De",
      action: () => {
        if (this.state.result !== [0]) {
          if (this.state.result.length > 1) {
            this.setState((prevState, props) => {
              return {
                result: prevState.result.slice(0, -1)
              };
            });
          } else {
            this.setState({
              result: [0]
            });
          }
        }
      },
      color: "#D0021B"
    },
    {
      operator: "*",
      action: this.operatorAction,
      color: "#4A90E2"
    },
    {
      operator: "7",
      action: this.numberAction
    },
    {
      operator: "8",
      action: this.numberAction
    },
    {
      operator: "9",
      action: this.numberAction
    },
    {
      operator: "/",
      action: this.operatorAction,
      color: "#4A90E2"
    },
    {
      operator: "4",
      action: this.numberAction
    },
    {
      operator: "5",
      action: this.numberAction
    },
    {
      operator: "6",
      action: this.numberAction
    },
    {
      operator: "+",
      action: this.operatorAction,
      color: "#4A90E2"
    },
    {
      operator: "1",
      action: this.numberAction
    },
    {
      operator: "2",
      action: this.numberAction
    },
    {
      operator: "3",
      action: this.numberAction
    },
    {
      operator: "-",
      action: this.operatorAction,
      color: "#4A90E2"
    },
    {
      operator: "On",
      action: () => {
        this.setState((prevState, props) => {
          return {
            online: !prevState.online
          };
        });
      },
      color: "#F5A623"
    },
    {
      operator: "0",
      action: this.numberAction
    },
    {
      operator: ".",
      action: this.operatorAction
    },
    {
      operator: "=",
      action: () => {
        const formula = eval(this.state.result.join("")).toFixed(2);
        const screenArr = formula.toString().split("");
        console.log(screenArr);
        this.setState({ result: screenArr });
      },
      color: "#4A90E2"
    }
  ];
  keys = this.keyArr.reverse().map(key => {
    return (
      <Key
        operator={key.operator}
        key={key.operator}
        action={key.action}
        color={key.color}
      />
    );
  });
  render() {
    return (
      <div className="App">
        <div className="Calculator">
          <div className="Backplate">
            <div className="Display">
              {this.state.online ? <h1>{this.state.result.join("")}</h1> : null}
            </div>
            <div className="Key-plate">{this.keys}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
