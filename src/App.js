import React from 'react';
import { TodoList } from './components/TodoList';
import './App.css';

const todos = [{
  text: 'Take out the garbage',
  isCompleted: true,
}, {
  text: 'Paint the house',
  isCompleted: false,
}, {
  text: 'Make dinner',
  isCompleted: false,
}];

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
