
var express = require('express');
var path = require('path');
var cors = require('cors');

var indexRouter = require('./routes/ps4');


//bind app 
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.redirect('/ps4')
})

app.use('/ps4', indexRouter);


//set listening port
app.listen(3000);