import { Request, Response } from "express";
import { create, getAll, remove, toggleChecked, update } from "../db/todoFunctions";

export const getById = async (req: Request, res: Response) => {
    const { userID } = req.params
    const todos = await getAll(Number(userID))

    res.send(todos)
}


export const createTodo = async (req: Request, res: Response) => {
    const bodyTodo = req.body

    try{
        const done = await create(bodyTodo)
        if(done) return res.sendStatus(201)
        return res.status(500).send("Erro interno ao criar")
    } catch(e){
        res.status(400).send(e)
    }
}


export const toggleTodoChecked = async (req: Request, res: Response) => {
    try{
        const updatedTodo = await toggleChecked(parseInt(req.params.id))
        res.send(updatedTodo)
    } catch(e) {
        res.status(400).send(e)
    }
}


export const updateTodo = async (req: Request, res: Response) => {
    try{
        const result = await update(req.body)
        res.send(result)
    } catch(e) {
        res.status(500).send(e)
    }
}


export const deleteTodo = async (req: Request, res: Response) => {
    try{
        const result = await remove(parseInt(req.params.id))
        res.send(result)
    } catch(e) {
        res.status(400).send(e)
    }
}
