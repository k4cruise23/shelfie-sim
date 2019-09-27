require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./constroller.js')


app.use(express.json())

app.get('/api/inventory', ctrl.getInventory); 
app.get('/api/product/:id', ctrl.getProduct)
app.post('/api/product', ctrl.createProduct); 
app.put('/api/products/:id', ctrl.updateProduct); 
app.delete('/api/products/:id', ctrl.deleteProduct)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} happy peeps`))
}).catch(err => console.log(err))


