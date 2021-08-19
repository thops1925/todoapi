const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todo = require('./routes/TodoRoutes')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

const db = process.env.URIT;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => console.log('open connection'))

app.use('/thops', todo)
app.listen(port, () => console.log('listening on port'))