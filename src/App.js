import { useState } from "react";

export default function App() {
  return (
    <div className="container">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleCountBack = () => {
    setCount((c) => c - step);
  };

  const handleCountForward = () => {
    setCount((c) => c + step);
  };

  function handleReset() {
    setStep(0);
    setCount(0);
  }

  return (
    <>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      {step}
      {/* <div>
        <button onClick={handleStepBack}>-</button>Step: {step}
        <button onClick={handleStepForward}>+</button>
      </div> */}
      <div>
        <button onClick={handleCountBack}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleCountForward}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {(count !== 0 || step !== 0) && (
        <button onClick={handleReset}>Reset</button>
      )}
    </>
  );
}
