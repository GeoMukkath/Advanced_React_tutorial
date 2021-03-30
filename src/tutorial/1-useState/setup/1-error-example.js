import React from "react";

const ErrorExample = () => {
  let title = "Random title";
  const handleClick = () => {
    title = "Hello Geo";
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default ErrorExample;
