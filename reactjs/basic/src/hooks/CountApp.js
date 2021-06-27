import React, { useEffect, useState } from "react";

function CountApp() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  console.log("CountApp ------------");

  useEffect(() => {
    console.log("My Count is:  ", count);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Start count</button>
      {count === 18 && <ChildApp />}
      {users.map(u => u.name)}
    </div>
  );
}

function ChildApp() {
  useEffect(() => {
    console.log("ChildApp useEffect ....");
    return () => {
      console.log("ChildApp unmount ....");
      console.log({CountApp});
    };
  }, []);

  return <div>My Child App...</div>;
}
export default CountApp;