import React from "react";

export default function Exercise() {
  return (
    <>
      <div>
        <h2>Functional Component</h2>
        <p>
          The goal of this exercise is to convert the class component in this
          file into a functional component.
        </p>
      </div>
      <div className="exercise">
        <Component />
      </div>
    </>
  );
}

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.messages = [];
  }

  componentDidMount() {
    this.messages.push("mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    this.messages.push("updated");
  }

  componentWillUnmount() {
    // We won't actually get to see this one, but including it for completeness.
    this.messages.push("unmounting");
  }

  render() {
    this.messages.push("rendered");

    const messages = this.messages;

    return (
      <div>
        I use "lifecycle hooks" under the covers.
        <ul>
          {messages.map((message, i) => {
            return <li key={i}>{message}</li>;
          })}
        </ul>
        <button onClick={() => this.forceUpdate()}>Refresh</button>
      </div>
    );
  }
}
