import { Router } from "express"
import { createTodo, deleteTodo, getById, toggleTodoChecked, updateTodo } from "../controllers/todo.controller"

const router = Router()

router.get('/ping', (req, res) => res.send({ pong: true }))


router.get('/todos/:userID', getById)
router.post('/todos', createTodo)
router.put('/todos', updateTodo)
router.patch('/todos/toggle/:id', toggleTodoChecked)
router.delete('/todos/:id', deleteTodo)


export default router