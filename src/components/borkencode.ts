/*
import React, {useState} from 'react';
import { averageOddPositiveIntegers } from './utilityfunctions';
import axios from 'axios'
import {response} from 'express'



// The main application file.

export default function App() {

  const [newarray, setNewarray] = useState('')
  const[arrays, setarrays] = useState([])

  function handleNewarrayChange(e) {
      e.preventDefault()
      setNewarray(e.target.value)
    }

  function handleNewarray(e){

        e.preventDefault()

        if(newarray === '') return

        setarrays([...arrays, {
          id: Date.now(), 
          text: newarray, 
          averageofArray: averageOddPositiveIntegers(JSON.parse(newarray))}
        ])
      e.target.reset();

      
      axios.post('https://jsonplaceholder.typicode.com/posts',arrays)
      .then( response => {
      console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    }

    return (
      <div className="index">
        <h1>Odd Positive Integer Average UI</h1>
        <form onSubmit={handleNewarray}>
          <input placeholder="Please enter an array..." onChange={handleNewarrayChange} />
          <ul>
          {arrays.map((array) => (
              <li key={array.id}>{array.text} and the average of all its positive odd numbers is {array.averageofArray}</li>
          ))}

        </ul> 
        </form>
      </div>

    )
}
*/
