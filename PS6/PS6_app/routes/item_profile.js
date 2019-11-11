const express = require("express");
const router = express.Router();

const mongo = require("mongodb").MongoClient;
const mongo_url = "mongodb://localhost:27017";
var db = null;
var c = null;

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
    const collection = db.collection("items");
    collection.findOne({ id: req.query.id }, (err, item) => {
      if (!item) {
        console.log("Item not in DB. Calling API...");
        callback();
      } else {
        console.log("Item is in DB. Fetching from DB...");
        res.render("item_profile", {
          name: item.name,
          desc: item.desc,
          img_url: item.img_url,
          cached: "True"
        });
      }
    });
  };

  const getDataFromAPI = () => {
    const request = require("request");

    const options = {
      method: "GET",
      url:
        "http://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json",
      qs: { item: req.query.id }
    };

    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      else {
        const body_jsobj = JSON.parse(body);
        res.render("item_profile", {
          name: body_jsobj.item.name,
          desc: body_jsobj.item.description,
          img_url: body_jsobj.item.icon_large,
          cached: "False"
        });
        const collection = db.collection("items");

        collection.insertOne(
          {
            id: req.query.id,
            name: body_jsobj.item.name,
            desc: body_jsobj.item.description,
            img_url: body_jsobj.item.icon_large
          },
          (err, result) => {}
        );
      }
    });
  };

  checkMongoDB(getDataFromAPI);
  // c.close();
});

module.exports = router;
