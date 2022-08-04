const express = require('express')

const app = express()

//Config
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//.env
require('dotenv/config')


// Cors Policy
const cors = require("cors")
app.use(cors())


//Routes
require('./loaders/routes')(app)

// Error handler
const {
    errorHandler
} = require('./middlewares/errors')
app.use(errorHandler)


// Start the app
const PORT = process.env.PORT || 5000
app.listen(PORT, async () => {
    console.log(`Todos service listening on port ${PORT}`)
})

