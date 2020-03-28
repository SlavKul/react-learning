import React from 'react';
import TodoList from './Todo/TodoList'

function App() {
  const todos = [
    {id: 1, completed: false, title: 'First'},
    {id: 2, completed: false, title: 'Second'},
    {id: 3, completed: true, title: 'Third'},
  ]

  return (
    <div className="wrapper">
      <h1>Learning react programming</h1>

      <TodoList todos={todos}/>
    </div>

  );
}

export default App;
