import { useDispatch } from "react-redux"
import { clearCompleted, markAllCompleted } from "../todos/todosSlice"

export default function Actions() {

    const dispatch = useDispatch()

    const onMarkAllCompletedClick = () => dispatch(markAllCompleted())
    const onClearCompletedClick = () => dispatch(clearCompleted())

    return (
        <div className="actions">
            <h5>Actions</h5>
            <button className="button" onClick={onMarkAllCompletedClick}>
                Mark All Completed
                </button>
            <button className="button" onClick={onClearCompletedClick}>
                Clear Completed
                </button>
        </div>
    )
}
