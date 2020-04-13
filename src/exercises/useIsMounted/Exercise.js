import React, { useEffect, useState } from "react";

function useIsMounted() {
  // TODO: actually implement!
  return () => true;
}

export default function Exercise() {
  const [showChild, setShowChild] = useState(true);

  return (
    <>
      <div>
        <h2>useIsMounted()</h2>
        <p>
          The goal of this exercise is to implement a <code>useIsMounted</code>{" "}
          hook.
        </p>
        <p>Desired usage:</p>
        <pre>
          <code>
            {`
                const isMounted = useIsMounted();

                setTimeout(() => {
                  if (isMounted()) {
                    alert('Still mounted!');
                  } else {
                    alert('Dismounted!');
                  }
                }, 1000);
        `}
          </code>
        </pre>
        <p>
          Once you have implemented your solution, compare it with{" "}
          <a href="https://github.com/liferay/liferay-portal/blob/master/modules/apps/frontend-js/frontend-js-react-web/src/main/resources/META-INF/resources/js/hooks/useIsMounted.es.js">
            the one in liferay-portal
          </a>
          .
        </p>
      </div>
      <div>
        <button disabled={showChild} onClick={() => setShowChild(true)}>
          Show child
        </button>
        <button disabled={!showChild} onClick={() => setShowChild(false)}>
          Hide
        </button>

        {showChild ? <Child /> : null}
      </div>
    </>
  );
}

function Child() {
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const isMounted = useIsMounted();

  useEffect(() => {
    setTimeout(() => {
      if (isMounted()) {
        setBackgroundColor("#eee");
      }
    }, 5000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="exercise"
      style={{
        backgroundColor
      }}
    >
      <h3>Child</h3>
      <p>Background will turn gray 5 seconds after mount.</p>
      <p>
        Expect an error in your browser console if you hide the button before 5
        seconds have passed.
      </p>
    </div>
  );
}
