import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoTableContainer from './components/TodoTableContainer';

function App() {
  return (
    <div className="container">
      <h1>Todo List</h1>
    <TodoTableContainer/>
    </div>
  );
}

export default App;
