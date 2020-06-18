
export async function loadTodos() {
    const response = await fetch('http://localhost:3300/todos');
    return response.json();
}

export async function deleteTodo(todo){
    const response = await fetch(`http://localhost:3300/todos/${todo.id}`,{method:'DELETE'});
    return response.json();
}
