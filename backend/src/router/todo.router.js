import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodoId,
  updateTodo,
} from "../controller/todo.controller.js";

const router = express.Router();

router.post("/todos", createTodo);
router.get("/todos", getTodo);
router.get("/todos/:id", getTodoId);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

export default router;
