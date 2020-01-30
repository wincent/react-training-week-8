import React, { useState } from "react";

function usePrevious(value) {
  // TODO: actually implement!
  return NaN;
}

export default function Exercise() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h2>usePrevious()</h2>
        <p>
          The goal of this exercise is to implement a <code>usePrevious</code>{" "}
          hook, to handle the common use case of finding out what the value of
          something was on the previous render.
        </p>
      </div>
      <p>Desired usage:</p>
      <pre>
        <code>
          {`
                const previousCount = usePrevious(count);

                return (
                  <p>
                    Count is now {count}.
                    Count on last render was {previousCount}.
                  </p>
                );
        `}
        </code>
      </pre>
      <p>
        Once you have implemented your solution, compare it with{" "}
        <a href="https://github.com/liferay/liferay-portal/blob/master/modules/apps/frontend-js/frontend-js-react-web/src/main/resources/META-INF/resources/js/hooks/usePrevious.es.js">
          the one in liferay-portal
        </a>
        .
      </p>
      <div className="exercise">
        <button onClick={() => setCount(n => n + 1)}>Increment</button>
        <Counter count={count} />
      </div>
    </>
  );
}

function Counter({ count }) {
  const previousCount = usePrevious(count);

  return (
    <p>
      Count is now {count}. Count on last render was {previousCount}.
    </p>
  );
}
