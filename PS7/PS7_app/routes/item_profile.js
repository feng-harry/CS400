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

router.route("/").get(function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  const checkMongoDB = callback => {
    console.log("FIRST");
    const collection = db.getDB().collection("items");
    collection.findOne({ id: req.query.id }, (err, item) => {
      if (!item) {
        console.log("Item not in DB. Calling API...");
        callback();
      } else {
        console.log("Item is in DB. Fetching from DB...");
        // res.render("item_profile", {
        //   name: item.name,
        //   desc: item.desc,
        //   img_url: item.img_url,
        //   cached: "True"
        // });
        res.json(
            { name: item.name,
              desc: item.desc,
              imgUrl: item.img_url
            });
      }
    });
  };

  const getDataFromAPI = () => {
    const request = require("request");
    console.log("SECOND");
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
        // res.render("item_profile", {
        //   name: body_jsobj.item.name,
        //   desc: body_jsobj.item.description,
        //   img_url: body_jsobj.item.icon_large,
        //   cached: "False"
        // });
        res.json(
            { name: item.name,
              desc: item.desc,
              imgUrl: item.img_url
            });
        const collection = db.getDB().collection("items");

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
});

module.exports = router;
