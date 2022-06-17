const express = require("express");
const {data} = require("../data.json");
const {projects} = data;
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index',{projects});
})

module.exports = router