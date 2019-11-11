const express = require("express");
const router = express.Router();

const mongo = require("mongodb").MongoClient;
const mongo_url = "mongodb://localhost:27017";
var db = null;
var c = null;

const timeInMss = Date.now();

mongo.connect(
  mongo_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err, client) => {
    if (err) {
      console.log(err);
    }
    db = client.db("cs400_project");
    c = client;
  }
);
router.route("/").get(function(req, res, next) {
  const checkMongoDB = callback => {
    const collection = db.collection("prices");
    collection.findOne({ id: req.query.id }, (err, item) => {
      if (!item) {
        console.log("Item not in DB. Calling API...");
        callback(false);
      } else if (timeInMss - item.lastUpdated >= 86400000) {
        console.log("Item in DB, but is not up to date. Calling API...");
        callback(true);
      } else {
        console.log("Item is in DB. Fetching from DB...");
        res.render("item_price", {
          price: item.price
        });
      }
    });
  };

  const getDataFromAPI = isInDB => {
    const https = require("https");
    const url_base = "https://services.runescape.com/m=itemdb_rs/api/graph/";
    https
      .get(url_base + req.query.id + ".json", resp => {
        let data = "";

        // A chunk of data has been recieved.
        resp.on("data", chunk => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          const current_date = Object.keys(JSON.parse(data).daily)[179];
          const current_price = JSON.parse(data).daily[current_date];
          res.render("item_price", {
            price: current_price
          });
          const collection = db.collection("prices");
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
        });
      })
      .on("error", err => {
        console.log("Error: " + err.message);
      });
  };

  checkMongoDB(getDataFromAPI);
});

module.exports = router;
