module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')
        db.read_products().then(result => {
            res.status(200).send(result)
        })
    },
    addProduct: async (req, res) => {
        const db = req.app.get('db')
        let {item, price, image} = req.body
        const products = await db.create_product({item, price, image})
        res.status(200).send(products)
    },
    deleteProduct: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const remove = await db.delete_product([id])
        res.status(200).send(remove)
    },
    updateProduct: async (req, res) => {
        const db = req.app.get('db')
        const {product_name, product_price, image_url} = req.body
        const {id} = req.params
        const update =  await db.update_products([product_name, product_price, image_url, id])
        res.status(200).send(update)
    }

}

// updateAddress: (req, res) => {
//     const db = req.app.get('db')
//     const {address} = req.body
//     const {id} = req.params
//     db.update_address([address, id]).then(result => {
//         res.status(200).send(result)
//     })
// }