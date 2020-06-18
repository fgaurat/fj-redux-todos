import {TodoTable} from './TodoTable'
import { connect } from 'react-redux'
import { loadTodos } from '../actions/todo.actions';



const mapStateToProps = state => ({
    todos:state.todos
})

const mapDispatchToProps = dispatch => ({
    loadTodos : () => dispatch(loadTodos()),
    deleteTodo : (todo) => dispatch({type:"DELETE_TODO",payload:todo})
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoTable);


