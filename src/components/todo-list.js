import React, { useState } from 'react';

function TodoList() {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const addTask = () => {
        if (task.trim() === '' ) return;
        setTodos(prevTodos => [...prevTodos, { text: task, completed: false}]);
        setTask('');
    }

    const toggleDone = (index) => {
        setTodos(prev => 
            prev.map((todo, i) => 
                i === index ? { ...todo, completed: !todo.completed } : todo
        )
    );
    };

    const removeTask = (indexToRemove) => {
        setTodos(prevTodos => prevTodos.filter((_, index) => index !== indexToRemove))
    }

    return(
        <div>
            <input
            value={task}
            onChange={ (e) => setTask(e.target.value) }
            />
            <button onClick={addTask}> Add Task </button>

            <br />

            { todos && todos.map((todo, i) => (
                <li 
                key={i} 
                style={{ textDecoration: todo.completed ? 'line-through' : 'none', margin: '0.5 rem 0'}}
                > 
                    <button onClick={() => toggleDone(i)}>✅</button>
                    <button onClick={() => removeTask(i)}>🗑️</button>
                    {todo.text}
                </li>
            ))}
        </div>
    )
}

export default TodoList;
