module.exports = app => {
    app.use('/api/v1/todos', require('../components/todos/todo.route'))
}