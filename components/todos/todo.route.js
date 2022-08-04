const router = require('express').Router()
const {
    createTodo,
    getTodos,
    completeTodo,
    deleteTodo
} = require('./todo.controller')

router.route('/')
    .post(createTodo)
    .get(getTodos)
    .put(completeTodo)
    .delete(deleteTodo)

module.exports = router