var express = require('express');
var router = express.Router();

router.route('/')
    .get(function (req, res, next) {
        res.render('getView', { retResponse: 'This is a GET' });
    });


module.exports = router;