import React, {useEffect, useRef, useState} from "react";

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

function Component() {
  const mounting = useRef(true);
  const messages = useRef([]);

  const [, setUpdate] = useState(0);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (mounting.current) {
      messages.current.push('mounted');
      mounting.current = false;
      setUpdate(x => x + 1);
    } else {
      messages.current.push('updated');
    }

    return () => {
      // Note: With hooks, we can't distinguish between really unmounting and
      // just tearing-down and re-running during an update.
      messages.current.push('unmounted');
    };
  });

  messages.current.push('rendered');

  return (
    <div>
      I use "hooks" under the covers.
      <ul>
        {messages.current.map((message, i) => {
          return <li key={i}>{message}</li>;
        })}
      </ul>
      <button onClick={() => setUpdate(x => x + 1)}>Refresh</button>
    </div>
  );
}
