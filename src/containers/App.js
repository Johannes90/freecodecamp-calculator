import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Calculator">
          <div className="Backplate">
            <div className="Display">
              <h2>8234*234</h2>
            </div>
            <div className="Key-plate">Keys go here</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
