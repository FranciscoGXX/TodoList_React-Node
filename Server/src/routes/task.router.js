
import { Router } from "express";
import { completeTask, CreateTask, deleteTask, GetTasks } from "../controllers/task.controller.js";

const taskRouter= new Router();



taskRouter.get("/api/task",GetTasks);

taskRouter.post("/api/task",CreateTask)

taskRouter.put("/api/task/:ID",completeTask)

taskRouter.delete("/api/task/:ID",deleteTask)

export default taskRouter;