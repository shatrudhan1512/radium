const productModel = require('../models/productModel')

const createProduct = async function(req, res) {
    const productDetails = req.body
    const createdProduct = await productModel.create(productDetails)
    res.send( {data:createdProduct})
}

module.exports.createProduct = createProduct