import { prisma } from '../instances/prisma'
import { existsOrError } from '../validation/general'

interface ToDo {
    id?: number
    label: string
    checked?: boolean
    collection_id: number
}



export const getAll = async (userID: number) => {
    const todos = await prisma.toDo.findMany({
        where: { collection_id: userID }
    })

    return todos
}


export const create = async (todo: ToDo) => {
    try {
        existsOrError(todo.label, "Informe um nome para sua tarefa")
        existsOrError(todo.collection_id, "Erro, coleção inexistente")
    } catch(e) {
        throw e
    }

    console.log("Criando...")
    const affected = await prisma.toDo.create({
        data: {...todo}
    })

    if(affected) return true
    return false
}


export const toggleChecked = async (id: number) => {
    const todo = await prisma.toDo.findFirst({
        where: { id }
    }) 

    if(!todo) throw "Tarefa não encontrada"

    todo.checked = !todo.checked

    await prisma.toDo.update({
        where: { id },
        data: { checked: todo.checked }
    })

    return todo
}

export const update = async (data: ToDo) => {
    const affected = await prisma.toDo.update({
        where: { id: data.id },
        data
    })

    if(affected) return affected
    throw "Não foi possível atualizar"
}

export const remove = async (id: number) => {
    const affected = await prisma.toDo.delete({
        where: { id }
    })

    if(affected) return `Tarefa de id ${id} apagada com sucesso`
    throw "Não foi possível apagar"
}