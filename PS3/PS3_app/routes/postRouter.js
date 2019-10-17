var express = require('express');
var router = express.Router();

router.route('/')
    .get(function (req, res, next) {
        res.send("Uh-oh. You should be sending a POST request instead. Make sure you have a 'name' and 'age' key.")
    })
    .post(function (req, res, next) {
        res.render('postView', {title: "POST", name: req.body.name, age: req.body.age});
    });


module.exports = router;