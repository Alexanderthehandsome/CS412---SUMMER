var express = require("express");
var fetch = require("node-fetch");
var request = require("request");
var redis = require("redis");

var client = redis.createClient(6379, "127.0.0.1");

client.on("ready", function (res) {
  console.log("redis ready");

  // client.flushdb()
});
client.on("end", function (err) {
  console.log("redis end");
});

client.on("error", function (err) {
  console.log(err);
});

client.on("connect", function () {
  console.log("redis connect success!");
});

var router = express.Router();

const APIKEY = `04a55f20226c450139a4625fdac2e6a2`;

function setValueToRedis(key = "a", val = "123") {
  return new Promise((resolve, reject) => {
    client.set(key, val, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  })
    .then((res) => res)
    .catch((err) => err);
}

function getValueToRedis(key) {
  return new Promise((resolve, reject) => {
    client.get(key, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  })
    .then((res) => res)
    .catch((err) => err);
}

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.post("/searchWeatherTwo", async function (req, res, next) {
  var { q } = req.body;
  if (!q) {
    return res.json({ message: "City name must not be empty" });
  }

  var data = await getValueToRedis(q);
  if (data) {
    return res.json({ list: [{ ...JSON.parse(data), isCache: true }] });
  } else {
    var url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${q}&appid=${APIKEY}`;
    var params = await fetch(url).then((res) => res.json());

    if (params.cod != 200) {
      return res.json({ ...params, isCache: false });
    }
    await setValueToRedis(q, JSON.stringify(params));

    client.expire(q, 10, (err, isSuccess) => {
      console.log("isSuccess -> :", isSuccess);
    });

    return res.json({ list: [{ ...params, isCache: false }] });
  }
});

module.exports = router;
