module.exports = {
    test: (req, res) => {
        console.log('test')
        res.status(200).send('no')
    }
}