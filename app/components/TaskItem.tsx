'use client'

import { Task } from "../types"
import { deleteTask } from "../actions/taskActions"


const TaskItem = ({task}: {task: Task}) => {
    return (
        <div className="card-container relative">
            <h2 className="font-lobster text-4xl">{task.title}</h2>
            <p className="font-courier text-xl">{task.description}</p>
            <p className="font-courier text-xl">Status: {task.status}</p>
            <button
            onClick={ () => {
                deleteTask(task.id)
            }}
            className="text-tomato absolute top-10 right-10 text-3xl"
            >X</button>
        </div>
    )
}

export default TaskItem