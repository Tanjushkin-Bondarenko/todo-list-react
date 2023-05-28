import React, { useState, useEffect } from 'react';
import { ToDoItem } from './ToDoItem';
import './style.scss'
import { BsPlusSquareFill } from 'react-icons/bs';

export const ToDoList = () => {
    const [todos, setToDos] = useState([]);
    const [todo, setTodo] = useState('');
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todos))
    }, [todos]);
  
    useEffect(() => {
     const storageTodos = JSON.parse(localStorage.getItem('todo')) || []; 
        setToDos(storageTodos);
    }, [])
    
    const addTodo = () => {
        const newTodo = todo;
        if (newTodo) {
            setToDos([...todos, newTodo])
        }
    }
    const createTodo = (e) =>{
    setTodo(e.target.value)
    }
    const removeToDo = (index)=>{
        const newTodos = [...todos];
        newTodos.splice(index, 1)
        setToDos(newTodos)
    }
    return (
        <div>
            <h1>Todo list</h1>
            
            <input className='inputTask' type='text' value={todo} onChange={createTodo}/> 
   <div className='btn' onClick={addTodo}><BsPlusSquareFill /> add task</div>
            <ul>
                {todos.map((todo, index) => (
                    <ToDoItem
                        className='todo'
                        key={index}
                        todo={todo}
                        onRemove = {()=> removeToDo(index)}
                    />
                ))}
            </ul>
        </div>
    )
}