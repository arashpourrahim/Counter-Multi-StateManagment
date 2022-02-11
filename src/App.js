import React, { Component } from "react";
import ClassCounter from "./components/ClassCounter";
import MainCounter from "./components/MainCouter";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <ClassCounter />
        </div>
        <div>
          <MainCounter />
        </div>
      </div>
    );
  }
}

export default App;
