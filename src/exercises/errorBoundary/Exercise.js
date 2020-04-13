import React, { useState } from "react";

export default function Exercise() {
  return (
    <>
      <div>
        <h2>Error Boundary</h2>
        <p>
          The goal of this exercise is to wrap an unreliable component in an
          error boundary to stop errors from taking down the entire app.
        </p>
        <p>
          For guidance, see{" "}
          <a href="https://reactjs.org/docs/error-boundaries.html">
            the React documentation
          </a>
          .
        </p>
      </div>
      <div className="exercise">
        <ErrorBoundary>
          <SketchyComponent />
        </ErrorBoundary>
      </div>
    </>
  );
}

// NOTE: To actually see this working, you have to use a production build.
// ie. instead of:
//
//      yarn start
//
// do:
//
//      yarn build
//      npx serve -s build
//
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return {error, hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // Could do something like log to remote service here.
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p>Got an error: {this.state.error.toString()}</p>;
    } else {
      return this.props.children;
    }
  }
}

function SketchyComponent() {
  const [buggy, setBuggy] = useState(false);

  if (buggy) {
    throw new Error("Guru mediation error!");
  } else {
    return (
      <>
        <div>Everything is fine, for now...</div>
        <button onClick={() => setBuggy(true)}>Destabilize!</button>
      </>
    );
  }
}
