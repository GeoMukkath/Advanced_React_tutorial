import React, { useState } from "react";
import { person_info } from "../../../objects";

const UseStateObject = () => {
  const [person, setPerson] = React.useState(person_info);

  const changeInfo = () => {
    setPerson({ ...person, age: 25, message: "Hello world" });
  };
  return (
    <>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.message}</h1>
      <button type="button" className="btn" onClick={changeInfo}>
        Change me
      </button>
    </>
  );
};

export default UseStateObject;
