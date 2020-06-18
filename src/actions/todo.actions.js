
import {loadTodos as loadTodosService} from '../services/TodoDAO'

export const loadTodos = () =>{

    return async (dispatch) => {
        const todos = await loadTodosService()
        const action = {type:"TODO_LOAD_OK",payload:todos}
        dispatch(action)
    }
}