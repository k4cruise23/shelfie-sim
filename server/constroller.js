

// updateAddress: (req, res) => {
//     const db = req.app.get('db')
//     const {address} = req.body
//     const {id} = req.params
//     db.update_address([address, id]).then(result => {
//         res.status(200).send(result)
//     })
// }

module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db'); 
        db.read_products()
        .then(products => {
            res.status(200).send(products)
        })
    },
    getProduct: (req, res) => {
        const db = req.app.get('db'); 
        const { id } = req.params; 
        db.get_product([id])
        .then(product => {
            res.status(200).send(product)
        })
    },
    createProduct: (req, res) => {
        const db = req.app.get('db');
        const { name, price, img } = req.body; 
        db.create_product([name, price, img])
        .then(() => {
            res.status(200).send('Product has been created')
        })
    },
    updateProduct: (req, res ) => {
        const db = req.app.get('db'); 
        const { id } = req.params; 
        const { name, price, img } = req.body; 
        db.update_products([name, price, img, id])
        .then(() => {
            res.status(200).send(`Product ${id} has been updated`)
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params; 
        db.delete_product([id])
        .then(() =>{
            res.status(200).send(`Product ID: ${id} was deleted`)
        })
        .catch(error => console.log('deleteProduct:', error))
    }
}