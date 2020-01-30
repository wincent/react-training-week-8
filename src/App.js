import React, { Suspense, lazy, useState } from "react";

const Exercises = {
  useIsMounted: lazy(() => import("./exercises/useIsMounted/Exercise")),
  usePrevious: lazy(() => import("./exercises/usePrevious/Exercise")),
  functionalComponent: lazy(() =>
    import("./exercises/functionalComponent/Exercise")
  ),
  errorBoundary: lazy(() => import("./exercises/errorBoundary/Exercise"))
};

function App() {
  const [activeExercise, setActiveExercise] = useState("useIsMounted");

  const Exercise = Exercises[activeExercise];

  return (
    <div>
      <h1>Exercises</h1>
      <select
        onChange={event => setActiveExercise(event.target.value)}
        value={activeExercise}
      >
        {Object.keys(Exercises).map(name => {
          return (
            <option key={name} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      {
        <Suspense fallback={<div>Loading&hellip;</div>}>
          <Exercise />
        </Suspense>
      }
    </div>
  );
}

export default App;
