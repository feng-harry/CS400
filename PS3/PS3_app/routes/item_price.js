var express = require('express');
var router = express.Router();

router.route('/')
    .get(function(req, res, next) {
        const https = require('https');
        const url_base = "https://services.runescape.com/m=itemdb_rs/api/graph/";
        https.get(url_base + req.query.id + '.json', (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                const current_date = Object.keys(JSON.parse(data).daily)[179];
                res.render('item_price', {price: JSON.parse(data).daily[current_date]});
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    });

module.exports = router;
