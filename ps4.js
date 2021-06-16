var express = require('express');
var fetch = require('node-fetch');
var request = require('request');


var router = express.Router();

const APIKEY = `04a55f20226c450139a4625fdac2e6a2`;








/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/searchWeatherOne', function (req, res, next) {
    var { q } = req.body;
    if (!q) {
        return res.render('index', { data: { message: "City name must not be empty", state: false } });
    }
    var url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${q}&appid=${APIKEY}`;
    new Promise(function (resolve, reject) {
        fetch(url).then(res => res.json()).then(res => {
            return resolve(res)
        })
    }).then((params) => {
        if (params.cod != 200) {
            return res.render('index', { data: { ...params, state: false } });
        }
        return res.render('index', { data: { ...params, state: true } });
    })
});

router.post('/searchWeatherTwo', async function (req, res, next) {
    var { q } = req.body;
    if (!q) {
        return res.render('index', { data: { message: "City name must not be empty", state: false } });
    }
    var url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${q}&appid=${APIKEY}`;
    var params = await fetch(url).then(res => res.json())

    if (params.cod != 200) {
        return res.render('index', { data: { ...params, state: false } });
    }
    return res.render('index', { data: { ...params, state: true } });
});

router.post('/searchWeatherThree', async function (req, res, next) {
    var { q } = req.body;
    if (!q) {
        return res.render('index', { data: { message: "City name must not be empty", state: false } });
    }
    var url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${q}&appid=${APIKEY}`;
    new Promise(function (resolve, reject) {
        request(url, (error, response, body) => {
            return resolve(body)
        })
    }).then((body) => {
        body = JSON.parse(body)
        if (body.cod != 200) {
            return res.render('index', { data: { ...body, state: false } });
        }
        return res.render('index', { data: { ...body, state: true } });
    })
});

module.exports = router;
