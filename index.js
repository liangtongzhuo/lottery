'use strict'
const express = require('express')
const app = express();
require('./db.js')
const mongoose = require('mongoose');

app.engine('html', require('express-art-template'));
app.set('views', __dirname + '/views');
app.use('/static', express.static('public'));


app.get('/', function (req, res) {
    res.render('index.html', {
        // user: {
        //     name: '李先生',
        //     tags: ['art', 'template', 'nodejs']
        // }
    });
});

// 获取获奖用户数据用户数据
app.get('api/get', function (req, res) {
    mongoose.model('users')(req.params.tab).find({})
        .exec(function(err, docs) {
            if (err) {
                next(err);
                return;
            };
            res.json(docs);
        });
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(3000, (err) => {
    console.log(err);
});
