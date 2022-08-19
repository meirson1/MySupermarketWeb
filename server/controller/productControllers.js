const res = require("express/lib/response");
const Product = require("../models/Product");

const getAllProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        if(products) {
            res.status(200).send(products);
            log.info('Products sent')
        } else {
            res.status(404).send({code: 404, message:`There is an error with your products`});
        }
    } catch (error) {
        log.error(error);
        res.status(500).send({message: error.message});
    }
};

const getProductById = async (req,res) => {
    const {id} = req.params.id;

    try {
        const product = await Product.findById(id);
        if(product) {
            res.status(200).send(product);
            log.info('Product sent');
        }
        else {
            log.info({ id }, 'Product does not exist');
            res.status(404).send({code: 404, message:`Product with id ${id} does not exist`});
        }
    } catch (error) {
        log.error(error);
        res.status(500).send({message: error.message});  
    }
};

module.exports = {
    getAllProducts,
    getProductById,
};