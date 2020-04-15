import React, {useState} from 'react';
import { averageOddPositiveIntegers } from './utilityfunctions';
import axios from 'axios'
import { response } from 'express';


// The main application file.

export default function App() {

  const [newTodo, setNewTodo] = useState('')
  const[todos, setTodos] = useState([])

function handleNewTodoChange(e) {
    e.preventDefault()
    setNewTodo(e.target.value)
  }

function handleNewTodo(e){

    /*sending post request to server
    
    */
  //var postSend = averageOddPositiveIntegers(JSON.parse(newTodo));

      e.preventDefault()

    
      if(newTodo === '') return

      setTodos([...todos, {
        id: Date.now(), 
        text: newTodo, 
        averageofArray: averageOddPositiveIntegers(JSON.parse(newTodo))}
      ])
    e.target.reset();


    axios.post('https://jsonplaceholder.typicode.com/posts',todos)
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
      <form onSubmit={handleNewTodo}>
        <input placeholder="Please enter an array..." onChange={handleNewTodoChange} />
        <ul>
        {todos.map((todo) => (
            <li key={todo.id}>{todo.text} and the average of all its positive odd numbers is {todo.averageofArray}</li>
        ))}

      </ul> 
      </form>
    </div>

  )
}


