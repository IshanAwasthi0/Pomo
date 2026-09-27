'use client'

import { SubmitEvent, useState } from "react";
import { addTask } from "../actions/taskActions";

const AddTaskForm = () => {
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
            <div>
                <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-10 items-center">
                    <div className="flex flex-col items-center">
                        <input
                        type="text"
                        placeholder="Title"
                        value={newTask.title}
                        onChange={(e) => setNewTask((prev) => ({...prev, title: e.target.value }))}
                        className="input-field"
                        required
                        />
                        <input 
                        type="text"
                        placeholder="Description" 
                        value={newTask.description}
                        onChange={(e) => setNewTask((prev) => ({...prev, description: e.target.value }))}
                        className="input-field"
                        required
                        />
                        <input 
                        type="text"
                        placeholder="Status" 
                        value={newTask.status}
                        onChange={(e) => setNewTask((prev) => ({...prev, status: e.target.value }))}
                        className="input-field mb-10"
                        required
                        />
                    </div>
                    <button type="submit" className="btn w-50">Add Task</button>
                </form>
            </div>
        </>
    )
}

export default AddTaskForm