import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as TimesSolid } from './times-solid.svg'
import { todoToggled, todoDeleted, colorChanged } from './todosSlice'


export const availableColors = ['green', 'blue', 'orange', 'purple', 'red']
export const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

const TodoListItem = ({ id }) => {

    const todo = useSelector(state => state.todos.entities[id])
    const dispatch = useDispatch()

    const { text, completed, color } = todo
    const colorOptions = availableColors.map((c) => (
        <option key={c} value={c}>
            {capitalize(c)}
        </option>
    ))

    function handleCompletedChanged() {
        dispatch(todoToggled(todo.id))
    }

    function handleDelete() {
        dispatch(todoDeleted(todo.id))
    }

    function handlChangeColor(e) {
        dispatch(colorChanged(todo.id, e.target.value))
    }

    return (
        <li>
            <div className="view">
                <div className="segment label">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={completed}
                        onChange={handleCompletedChanged}
                    />
                    <div className="todo-text">{text}</div>
                </div>
                <div className="segment buttons">
                    <select
                        className="colorPicker"
                        defaultValue={color}
                        style={{ color }}
                        onChange={handlChangeColor}
                    >
                        <option value=""></option>
                        {colorOptions}
                    </select>
                    <button className="destroy" onClick={handleDelete}>
                        <TimesSolid />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default TodoListItem
