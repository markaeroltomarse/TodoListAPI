const asyncHandler = require('express-async-handler')

let repo = require('./todo.repository')


const createTodo = asyncHandler(async (req, res) => {
    const {
        todo_title,
    } = req.body

    if (!todo_title) {
        res.status(400)
        throw new Error("Bad request: POST")
    }

    await repo.createTodo(todo_title)

    res.status(200).json({
        msg:'Created',
    })
})

const completeTodo = asyncHandler(async (req, res) => {
    const {
        todo_id
    } = req.body

    if (!todo_id) {
        res.status(400)
        throw new Error("Bad request: PUT")
    }
    
    if (!(await repo.getTodosById(todo_id))[0]) {
        res.status(404)
        throw new Error("Todo not found: PUT")
    }

    let todo = await repo.completeTodo(todo_id)

    res.status(200).json({
        todo,
        msg:'Todo completed!'
    })
})

const getTodos = asyncHandler(async (req, res) => {
    let todos = await repo.getTodos()
    res.json(todos)
})

const deleteTodo = asyncHandler(async (req, res) => {
    const {
        todo_id
    } = req.query

    console.log(req.query.todo_id)

    if (!todo_id) {
        res.status(400)
        throw new Error("Bad request: DELETE")
    }

    if (!(await repo.getTodosById(todo_id))[0]) {
        res.status(404)
        throw new Error("Todo not found: DELETE")
    }

    let todo = await repo.deleteTodo(todo_id)

    res.status(200).json({
        msg:"Successfully deleted",
        todo
    })
})

module.exports = {
    createTodo,
    deleteTodo,
    getTodos,
    completeTodo
}