require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./constroller')

const app = express()

app.use(express.json())

app.get('api/inventory', ctrl.getProducts)
app.post('api/inventory', ctrl.addProduct)
app.delete('/api/inventory/:id', ctrl.deleteProduct)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} happy peeps`))
}).catch(err => console.log(err))


