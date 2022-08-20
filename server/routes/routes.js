const express = require("express");
const router = express.Router();
const ClientSchema = require("../models/Client")
const { getAllProducts, getProductById } = require("../controller/productControllers"); 

router.post("/signup",(req,res)=>{
    const client = new ClientSchema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    client.save().then(data=>res.json(data)).catch(err=>res.json(err))
})

router.get("/api/products",(req,res)=>{
    getAllProducts(req, res);
})

router.get("/api/products/:id",(req, res)=>{
    getProductById(req, res);
})

module.exports = router;