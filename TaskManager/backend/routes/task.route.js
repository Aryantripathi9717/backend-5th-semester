
import express from "express";

const taskRouter = express.Router();

const tasks = [
    { id: 1, title: "Study", hour: 8 },
    { id: 2, title: "Sleep", hour: 5 }
];

// GET: Fetch all tasks
taskRouter.get("/tasks", (req, res) => {
    return res.status(200).json(tasks);
});

// POST: Add a task
taskRouter.post("/add", (req, res) => {
    const { title, hour } = req.body;

    if (!title?.trim()) {
        return res.status(400).json({
            message: "Title is required"
        });
    }

    const newTask = {
        id: tasks.length
            ? Math.max(...tasks.map(task => task.id)) + 1
            : 1,
        title: title.trim(),
        hour: hour ?? 0
    };

    tasks.push(newTask);

    return res.status(201).json({
        message: "Task added successfully",
        task: newTask
    });
});

// DELETE: Delete a task by ID
taskRouter.delete("/delete/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    tasks.splice(index, 1);

    return res.status(200).json({
        message: "Task deleted successfully",
        tasks
    });
});

export default taskRouter;
