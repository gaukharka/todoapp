import React, { useState } from "react";

function App() {
  const [list, setList] = useState("");
  const [item, setItem] = useState([]);

  function handleChange(event) {
    setList(event.target.value);
  }

  function handleClick(event) {
    setItem((prevValue) => {
      return [...prevValue, list];
    });
    setList("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={list} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoList) => (
            <li>{todoList}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
