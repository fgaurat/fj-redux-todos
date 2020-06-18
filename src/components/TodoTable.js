import React, { useEffect } from 'react';

export function TodoTable(props) {
  
  const todos = props.todos;

  useEffect(_ => {
    props.loadTodos()
  }, [])

  return (

    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>dueDate</th>
          <th>completed</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo =>
          <TodoTableItem todo={todo} key={todo.id} onDeleteTodo={props.deleteTodo} />
        )}
      </tbody>
    </table>
  );
}



function TodoTableItem(props) {
  const todo = props.todo;

  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.completed ? 'done' : '! done'}</td>
      <td>{new Date(todo.dueDate).toLocaleDateString()}</td>
      <td>
        <button className="btn btn-danger" onClick={_ => props.onDeleteTodo(todo)}>delete</button>
      </td>
    </tr>)
}






