import { Router } from "express";
import * as taskCtrl from "./controllers"

const routerTask = Router();

routerTask.get('/tasks', taskCtrl.findAllTasks);

routerTask.post('/tasks', taskCtrl.createTask);

routerTask.get('/tasks/done',taskCtrl.findAllDoneTasks)

routerTask.get('/tasks/:id', taskCtrl.findByIdTask);

routerTask.delete('/tasks/:id', taskCtrl.deleteTask);

routerTask.put('/tasks/:id', taskCtrl.updateTask);

export default routerTask;