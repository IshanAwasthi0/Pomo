import { Task } from "../types"
import { deleteTask } from "../actions/taskActions"


const TaskItem = ({task}: {task: Task}) => {
    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.status}</p>
            <button
            onClick={ () => {
                deleteTask(task.id)
            }}
            >Delete</button>
        </div>
    )
}

export default TaskItem