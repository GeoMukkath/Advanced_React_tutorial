import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <>
      <h2>Github users</h2>
    </>
  );
};

export default UseEffectFetchData;
