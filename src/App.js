import React from 'react';
import AnimalFactsApp from './components/animal-facts';
import ColorPicker from './components/color-picker';
import LiveInput from './components/live-input';
import TodoList from './components/todo-list';
import FetchUser from './components/fetch-user';
import Counter from './components/counter';
import TimerPrompt from './components/prompts/timer-prompt';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '1rem' }}>
      <h1>🧠 React Interview Gym</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2>1. Animals Facts</h2>
        <AnimalFactsApp />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>2. Color Picker</h2>
        <ColorPicker />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>3. Live Input</h2>
        <LiveInput />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>4. Todo List</h2>
        <TodoList />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>5. Fetch User</h2>
        <FetchUser />
      </section>


      <section style={{ marginBottom: '2rem' }}>
        <h2>6. Counter</h2>
        <Counter />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>7. Timer Prompt</h2>
        <TimerPrompt />
      </section>
    </div>
  );
}

export default App;