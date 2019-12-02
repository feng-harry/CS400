const express = require("express");
const router = express.Router();
const db = require('../mongo/mongo');

db.connect((err, client) => {
  if (err) {
    console.log(`ERR: ${err}`);
  } else {
    console.log(`Connected`);
  }
});

const timeInMss = Date.now();

router.route("/").get(function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');

  const checkMongoDB = callback => {
    const collection = db.getDB().collection("prices")
    console.log(`Backend data 1: ${req.query.id}`);

    collection.findOne({ id: req.query.id }, (err, item) => {
      if (!item) {
        console.log("Item not in DB. Calling API...");
        callback(false);
      } else if (timeInMss - item.lastUpdated >= 86400000) {
        console.log("Item in DB, but is not up to date. Calling API...");
        callback(true);
      } else {
        console.log("Item is in DB. Fetching from DB...");
        // res.render("item_price", {
        //   price: item.price
        // });
        res.json({ price: item.price });
      }
    });
  };

  const getDataFromAPI = isInDB => {
    const https = require("https");
    const url_base = "https://services.runescape.com/m=itemdb_rs/api/graph/";
    https
      .get(url_base + req.query.id + ".json", resp => {
        let data = "";

        // A chunk of data has been received.
        resp.on("data", chunk => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          const current_date = Object.keys(JSON.parse(data).daily)[179];
          const current_price = JSON.parse(data).daily[current_date];
          // res.render("item_price", {
          //   price: current_price
          // });
          console.log(`Backend data 2: ${current_price}`);

          res.json({ price: current_price });

          const collection = db.getDB().collection("prices");
          if (isInDB) {
            collection.updateOne,
              ({ id: req.query.id },
              { $set: { lastUpdated: current_date, price: current_price } });
          } else {
            collection.insertOne(
              {
                id: req.query.id,
                lastUpdated: parseInt(current_date),
                price: current_price
              },
              (err, result) => {}
            );
          }
          // return {price: current_price};
        });
      })
      .on("error", err => {
        console.log("Error: " + err.message);
      });
  };

  checkMongoDB(getDataFromAPI);
});

module.exports = router;
