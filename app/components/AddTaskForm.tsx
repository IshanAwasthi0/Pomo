'use client'

import { SubmitEvent, useState } from "react";
import { Task } from "../types";
import { addTask } from "../actions/taskActions";

const AddTaskForm = ({tasks} : {tasks: Task[]}) => {
    const [newTask, setNewTask] = useState({ title: "", description: "", status: "" });
    
    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await addTask({task: newTask});
            setNewTask({ title: "", description: "", status: "" });
        } catch (error) {
            console.error("Error adding task:", error);
        }
    }

    return (
        <>
            <div className="flex justify-center gap-2 p-4 border border-gray-500 rounded-md w-100 h-70">
                <form
                onSubmit={handleSubmit}
                className="flex gap-2 flex-col">
                    <input
                    type="text" placeholder="title"
                    value={newTask.title}
                    onChange={(e) => setNewTask((prev) => ({...prev, title: e.target.value }))}
                    className="border border-gray-500 rounded-md px-2 py-1 w-80 h-12"
                    />
                    <input 
                    type="text" placeholder="description" 
                    value={newTask.description}
                    onChange={(e) => setNewTask((prev) => ({...prev, description: e.target.value }))}
                    className="border border-gray-500 rounded-md px-2 py-1 w-80 h-12"
                    />
                    <input 
                    type="text" placeholder="status" 
                    value={newTask.status}
                    onChange={(e) => setNewTask((prev) => ({...prev, status: e.target.value }))}
                    className="border border-gray-500 rounded-md px-2 py-1 w-80 h-12 mb-4"
                    />
                    <button type="submit" className="bg-white text-black px-4 py-2 rounded-md">Add Task</button>
                </form>
            </div>
        </>
    )
}

export default AddTaskForm