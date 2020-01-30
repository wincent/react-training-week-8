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

// TODO: actually implement this class
class ErrorBoundary extends React.Component {
  render() {
    return this.props.children;
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
