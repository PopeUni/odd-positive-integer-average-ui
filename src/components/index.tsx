import React, { useState } from "react";
import { averageOddPositiveIntegers } from "./utilityfunctions";
import axios from "axios";

// The main application file.

export default function App() {
  const [newArray, setNewArray] = useState("");
  const [arrays, setArrays] = useState([]);

  function handleNewarrayChange(e) {
    e.preventDefault();
    setNewArray(e.target.value);
  }

  function handleNewarray(e) {
    e.preventDefault();

    if (newArray === "") return;

    setArrays([
      ...arrays,
      {
        id: Date.now(),
        text: newArray,
        averageofArray: averageOddPositiveIntegers(JSON.parse(newArray)),
      },
    ]);

    axios({
      method: "post",
      url: "http://localhost:3003/odd-positive-average",
      data: {
        GUIResult: arrays,
      },
    });

    e.target.reset();
  }

  return (
    <div className="index">
      <h1>Odd Positive Integer Average UI</h1>
      <form onSubmit={handleNewarray}>
        <input
          placeholder="Please enter an array..."
          onChange={handleNewarrayChange}
        />
        <ul>
          {arrays.map((array) => (
            <li key={array.id}>
              {array.text} and the average of all its positive odd numbers is{" "}
              {array.averageofArray}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
