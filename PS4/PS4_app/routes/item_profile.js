var express = require('express');
var router = express.Router();

router.route('/')
    .post(function(req, res, next) {
        var request = require("request");

        var options = { method: 'POST',
            url: 'http://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json',
            qs: { item: req.body.id },
            form: { item: req.body.id } };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            else {
                const body_jsobj = JSON.parse(body);
                res.render('item_profile', {name: body_jsobj.item.name, desc: body_jsobj.item.description, img_url: body_jsobj.item.icon_large});
            }
        });

    });

module.exports = router;
