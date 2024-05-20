import React, { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  let result = 0;

  const handleAddition = () => {
    const inputValue = Number(inputRef.current.value);
    result += inputValue;
    resultRef.current.textContent = result;
  };

  const handleSubtraction = () => {
    const inputValue = Number(inputRef.current.value);
    result -= inputValue;
    resultRef.current.textContent = result;
  };

  const handleReset = () => {
    result = 0;
    inputRef.current.value = "";
    resultRef.current.textContent = result;
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input ref={inputRef} type="number" /> 만큼을{" "}
        <button onClick={handleAddition}>더할게요</button>{" "}
        <button onClick={handleSubtraction}>뺄게요</button>
        <button onClick={handleReset}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p ref={resultRef}>0</p>
      </div>
    </div>
  );
}
