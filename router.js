const express = require('express');
const router = express.Router();


 router.get('/', function (req, res, next) {
     res.render('tempalte', {string1: 'Hey Alex, you are so cool!!'});
    }) //partb

    .post('/', function (req, res, next) {
     console.log(req.body); res.render('template', {string2: req.body, len: req.body.len});
     })
     .get('/', function(req, res, next) {
     })
//part c
     //part d
     .get('/names', function(req, res, next) {
         console.log(req.params); console.log(req.params.name); res.render('template', {string2: req.params.name});
     })
module.exports = router;