import { combineReducers } from 'redux'
import todoReducer from './features/todos/todosSlice'
import filterSlice from './features/filter/filterSlice'

const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterSlice
})

export default rootReducer