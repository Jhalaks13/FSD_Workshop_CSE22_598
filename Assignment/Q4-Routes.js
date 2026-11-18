
const express = require('express');

const app = express();

app.use(express.json());

let tasks = [
    { id: 1, task: "Complete assignment", completed: false },
    { id: 2, task: "Study Node.js", completed: false }
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = {
        id: Date.now(),
        task: req.body.task,
        completed: false
    };

    if (!newTask.task) {
        return res.status(400).json({
            message: "Task name is required"
        });
    }

    tasks.push(newTask);

    res.status(201).json({
        message: "Task added successfully",
        task: newTask
    });
});

app.put('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    task.completed = true;

    res.json({
        message: "Task completed successfully",
        task: task
    });
});

app.delete('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);

    const oldLength = tasks.length;

    tasks = tasks.filter(t => t.id !== id);

    if (tasks.length === oldLength) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.json({
        message: "Task deleted successfully"
    });
});

app.listen(3001, () => {
    console.log("To-Do App running at http://localhost:3001");
});
