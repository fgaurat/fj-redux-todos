import React from 'react';

export function TodoForm(props){
  

  console.log(props)

    return (
      <form onSubmit={props.submitTodo}>
        <div className="form-group">
          <label htmlFor="inputTitle">Title</label>
          <input
            type="text"
            className="form-control"
            id="inputTitle"
            name="title"
            value={props.values.title}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputTitle">dueDate</label>
          <input
            type="date"
            className="form-control"
            name="dueDate"
            id="inputDueDate"
            value={props.values.dueDate}
            onChange={props.handleChange}
          />
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="inputDone"
            name="done"
            checked={props.values.done}
            onChange={props.handleChange}
          />
          <label className="form-check-label" htmlFor="inputDone">
            Done
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
}
