const express = require("express");
const router = express.Router();
const ClientSchema = require("../models/Client")

router.post("/signup",(req,res)=>{
    const client = new ClientSchema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    client.save().then(data=>res.json(data)).catch(err=>res.json(err))
})

module.exports = router;