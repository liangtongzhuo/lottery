'use strict'
const express = require('express')
const app = express();
app.engine('html', require('express-art-template'));


app.set('views', __dirname + '/views');
app.use('/static', express.static('public'));


app.get('/', function (req, res) {
    res.render('index.html', {
        user: {
            name: '李先生',
            tags: ['art', 'template', 'nodejs']
        }
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
