'use strict'

const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://127.0.0.1:27017/test');
db.Promise = global.Promise;

// db.connection.on('error', function(error) {
//     console.log('___db：error');
// });

// db.connection.on('open', function() {
//     console.log('___db:open');
// });


const Schema = mongoose.Schema;

const users = {
    name: String,
    age: Number
};

mongoose.model('users', new Schema(users));
