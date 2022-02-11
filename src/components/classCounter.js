import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.incrementHandler = this.incrementHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);

    this.state = {
      count: 0,
    };
  }

  incrementHandler() {
    this.setState({ count: this.state.count + 1 });
  }

  resetHandler() {
    this.setState({ count: 0 });
  }

  decrementHandler() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <article>
        <p>Count is : {this.state.count}</p>
        <section>
          <button onClick={this.incrementHandler}>+</button>
          <button onClick={this.resetHandler}>0</button>
          <button onClick={this.decrementHandler}>-</button>
        </section>
      </article>
    );
  }
}

export default ClassCounter;
