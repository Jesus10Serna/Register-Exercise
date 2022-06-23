const express = require('express');

// Router
const { registerRouter } = require('./routes/register.routes')

// Util
//const { db } = require('')

const app = express()

app.use(express.json())

app.use('/api/v1/register', registerRouter)

db.authenticate()
    .then(() => console.log('Db authenticated'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('Db synced'))
    .catch(err => console.log(err))

app.listen(4000, () => {
    console.log('express app runing')
})