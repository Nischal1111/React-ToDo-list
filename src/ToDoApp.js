import React, { useState, useEffect } from 'react';
import "./App.css"

function TodoApp() {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [id, setId] = useState(1);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurrentTime(getCurrentTime());
        },1000)

        return()=> {
            clearInterval(timer);
        }
    },[])


    const handleInputChange = (e) => {
    setInput(e.target.value);
    };

    const handleAdd = () => {
        if(input==""){
            alert("Please add a task.")
        }
        if (input.trim()!=""){
            const newTodo = {
                Givenid:id,
                text:input,
            };
        setTodo([...todo, newTodo]);
        setInput('');
        setId(id+1)
        }
    };

    const handleDeleteTodo = (id) => {
        setTodo(todo.filter((item) => item.Givenid !== id))
        
    };

    const getCurrentTime = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
    };


return (
    <div className='container'>
        <h1 className='heading'>Todo App</h1>
        <div className='inputContainer'>
            <input type="text" value={input} onChange={handleInputChange}/>
            <button onClick={handleAdd} className='addButton'>
                Add Todo
            </button>
        </div>
        <ul className='todoList'>
        {todo.map((Singletodo, index) => (
            <li key={index} className='todoItem'>
            {Singletodo.text}
            <button onClick={() => handleDeleteTodo(Singletodo.Givenid)} className='deleteButton'>
                Delete
            </button>
            </li>
        ))}
        </ul>
        <div className='currentTime'>Current Time: {currentTime}</div>
    </div>
    );
}

export default TodoApp;