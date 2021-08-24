import Task from "./models";
import {getPagination} from "../../libs/getPagination";

export const findAllTasks = async (req, res) => {
  try {

    const {size, page, title} = req.query;

    const {limit, offset} = getPagination(page, size);

    const condition = title ? {title: {$regex: new RegExp(title, "i")}} : {};

    const tasks = await Task.paginate(condition, {offset, limit});
    res.json({
      totalTareas : tasks.totalDocs,
      tareas: tasks.docs,
      totalPaginas: tasks.totalPages,
      paginaActual: tasks.page - 1
    });
  } catch (err) {
    res.status(500).json({ message: err.message || "Algo salio mal" });
  }
};

export const createTask = async (req, res) => {
 if (!req.body.title) {
   return res.status(400).json({ message: "El titulo es requerido" });
 }

 try {
   const { title, description, done } = req.body;

   const newTask = new Task({ title, description, done });
   const taskSaved = await newTask.save();
  res.json(taskSaved);
 } catch (err) {
   res
     .status(500)
     .json({ message: err.message || "Algo salio mal al crear la tarea" });
 }

};

export const findByIdTask = async (req, res) => {
  const { id } = req.params;

  try {
    const taskId = await Task.findById(id);

    if (!taskId) {
      return res
        .status(404)
        .json({ message: `La tarea con el id "${id}" no existe` });
    }

    res.json(taskId);
  } catch (err) {
    res
      .status(500)
      .json({
        message:
          err.message || `Algo salio mal al buscar la tarea con el id ${id}`,
      });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const taskId = await Task.findByIdAndDelete(id);

    if (!taskId) {
      return res
        .status(404)
        .json({ message: `La tarea con el id "${id}" no existe` });
    }

    res.json({
      message: "Task deleted con el ID",
    });
  } catch (err) {
    res
      .status(500)
      .json({
        message:
          err.message || `Algo salio mal al eliminar la tarea con el id ${id}`,
      });
  }
};

export const findAllDoneTasks = async (req, res) => {
  const tasks = await Task.find({ done: true });
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const taskId = await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    message: "Task actualizada",
  });
};

//Por ultima que se agrego
