
import React, { useEffect, useState } from "react";

function GetTask() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [hour,setHour] = useState(0)

    const API = "http://localhost:4000/task";

    // GET: Fetch all tasks
    async function getTasks() {
        try {
            const response = await fetch(`${API}/tasks`);

            if (!response.ok) {
                throw new Error("Failed to fetch tasks");
            }

            const data = await response.json();

            setTasks(data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    }

    useEffect(() => {
        getTasks();
    }, []);

    // POST: Add a task
    async function addTask(e) {
        e.preventDefault();

        if (!title.trim()) {
            alert("Please enter a task title");
            return;
        }

        try {
            const response = await fetch(`${API}/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title: title.trim() })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to add task");
            }

            setTitle("");
            await getTasks();
        } catch (error) {
            console.error("Error adding task:", error);
        }
    }

    // DELETE: Delete a task
    async function deleteTask(id) {
        try {
            const response = await fetch(`${API}/delete/${id}`, {
                method: "DELETE"
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to delete task");
            }

            await getTasks();
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    }

    return (
        <>
            <h2>Task List</h2>

            <form onSubmit={addTask}>
                <input
                    type="text"
                    placeholder="Enter task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter hour"
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                />

                <button type="submit">Add Task</button>
            </form>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} — {task.hour} hours

                        <button onClick={() => deleteTask(task.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default GetTask;
