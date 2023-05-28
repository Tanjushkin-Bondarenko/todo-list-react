import React from 'react'
import { useState } from 'react'

export const ToDoItem = ({ todo, onRemove, index }) => {
  const [check, setCheck] = useState(false);
  const [done, setDone] = useState(false);
  const checkTask = () => {
    if (check) {
      setCheck(false)
      setDone("")
    } else {
      setCheck(true);
      setDone("done")
    }
   }


  return (
      <li className='task'>
          
      <input onChange={checkTask} className='check' type='checkbox' name={index} /> 
      <p className={`taskText ${check ? 'checked' : 'notChecked'}`}>{todo}</p>
      <span className={check ? 'done' : ''}>{done}</span>
          <button className='remove' onClick={onRemove}>Remove</button>
   </li>
  )
}
