import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const upByOne = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    console.log("call useEffect");
    if (value > 0) {
      document.title = `New messages(${value})`;
    }
  });

  useEffect(() => {
    console.log("Second useEffect");
  }, [value]);

  console.log("render component");
  return (
    <>
      <h3>{value}</h3>
      <button type="button" className="btn" onClick={upByOne}>
        +1
      </button>
    </>
  );
};

export default UseEffectBasics;
