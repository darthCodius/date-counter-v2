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

  const handleStepBack = () => {
    setStep((s) => s - 1);
  };

  const handleStepForward = () => {
    setStep((s) => s + 1);
  };

  const handleCountBack = () => {
    setCount((c) => c - step);
  };

  const handleCountForward = () => {
    setCount((c) => c + step);
  };

  return (
    <>
      <div>
        <button onClick={handleStepBack}>-</button>Step: {step}
        <button onClick={handleStepForward}>+</button>
      </div>

      <div>
        <button onClick={handleCountBack}>-</button>Count: {count}
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
    </>
  );
}
