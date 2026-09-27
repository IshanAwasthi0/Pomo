import { Task } from "../types";
import TaskItem from "./TaskItem";

const TaskManager = ({tasks}: { tasks: Task[] }) => {
    return (
        <>
            <div className="flex flex-col justify-center gap-4 p-4">
                {tasks.map( (task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
        </>
    )
}

export default TaskManager