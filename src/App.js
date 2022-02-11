import React, { Component } from "react";
import { createStore } from "redux";
import counter from "../src/reducers/index";

import ClassCounter from "./components/ClassCounter";
import MainCounter from "./components/MainCouter";

class App extends Component {
  render() {
    const store = createStore(counter);

    return (
      <div>
        <div>
          <ClassCounter />
        </div>
        <div>
          <MainCounter
            value={store.getState()}
            incrementHandler={() => store.dispatch({ type: "INC" })}
            decrementHandler={() => store.dispatch({ type: "DEC" })}
            resetHandler={() => store.dispatch({ type: "RESET" })}
          />
        </div>
      </div>
    );
  }
}

export default App;
