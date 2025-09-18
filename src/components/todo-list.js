import React, { useState } from 'react';
import Prompt from './prompt';

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
            <Prompt
                title="Todo List Component"
                list={[
                    'Create an input field for adding new tasks',
                    'Add a button to submit new tasks',
                    'Display a list of all tasks with checkboxes',
                    'Allow marking tasks as complete/incomplete',
                    'Add delete functionality for each task',
                    'Show visual feedback for completed tasks (strikethrough)',
                    'Prevent adding empty tasks'
                ]}
                concepts="useState, Array state management, Immutable updates, Event handlers, Conditional rendering, Form handling"
            />
            
            <div style={{ marginTop: '2rem' }}>
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
        </div>
    )
}

export default TodoList;
