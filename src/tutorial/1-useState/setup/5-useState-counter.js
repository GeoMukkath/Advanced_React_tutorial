import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const upByOne = () => {
    setValue(value + 1);
  };
  const downByOne = () => {
    setValue(value + -1);
  };
  return (
    <>
      <section>
        <h1>Regular counter</h1>
        <h3>{value}</h3>
        <button type="button" className="btn" onClick={upByOne}>
          +1
        </button>
        <button type="button" className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button type="button" className="btn" onClick={downByOne}>
          -1
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
