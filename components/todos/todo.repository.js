const connection = require('../../database')

const createTodo = (todo_title) => {
    return connection(`
        INSERT INTO Todos (todo_title, completed) VALUES 
        ('${todo_title}', '')
    `)
}

const completeTodo = (id) => {
    return connection(`
        UPDATE Todos SET
            completed='${new Date()}'
        WHERE
            todo_id=${id}
    `)
}

const getTodos = () => {
    return connection(`
        SELECT todo_id, todo_title, completed, created FROM Todos
    `)
}

const getTodosById = (todo_id) => {
    return connection(`
        SELECT todo_id FROM Todos
        WHERE todo_id=${todo_id}
    `)
}

const deleteTodo = (todo_id) => {
    return connection(`
        DELETE FROM Todos WHERE todo_id=${todo_id}
    `)
}

module.exports = {
    createTodo,
    deleteTodo,
    getTodos,
    completeTodo,
    getTodosById
}