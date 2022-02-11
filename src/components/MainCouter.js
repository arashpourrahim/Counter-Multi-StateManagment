import React, { Component } from "react";

class MainCounter extends Component {
  render() {
    const { value, incrementHandler, decrementHandler, resetHandler } =
      this.props;
    return (
      <article>
        <p>Count is: {value}</p>
        <section>
          <button onClick={incrementHandler}>+</button>
          <button onClick={resetHandler}>0</button>
          <button onClick={decrementHandler}>-</button>
        </section>
      </article>
    );
  }
}

export default MainCounter;
