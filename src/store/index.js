const todoList = []

export default (state = { todos: todoList }, action) => {

    let newState = { ...state }
    return newState;
}
