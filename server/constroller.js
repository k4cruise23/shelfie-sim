module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')
        db.read_products().then(result => {
            res.status(200).send(result)
        })
    },
    addProduct: (req, res) => {
        const db = req.app.get('db')
        let {item, price, image} = req.body
        db.create_products([item, price, image])
        .then(() => res.sendStatus(200))
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product([id]).then(() => res.sendStatus(200))
    }
}