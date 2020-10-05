var express = require('express');
var router = express.Router()
var User = require('../models/contectModel')

router.get('/', function(req , res){
    // res.send("hello seocho!!")
    res.render('index', {name:"soojin"})
})
router.post('/signup', function(req,res){
    console.log(req.body[1].name)
    res.send("Success")
})
module.exports = router;