import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random title");
  const handleClick = () => {
    if (text === "Random title") {
      setText("hello world");
    } else {
      setText("Random title");
    }
  };
  return (
    <>
      <h2>useState example</h2>
      <h3>{text}</h3>
      <button className="btn" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default UseStateBasics;
