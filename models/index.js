const mongoose = require('mongoose');

mongoose.set('debug', true);

mongoose.connect();

mongoose.Promise = Promise;

module.exports.Data = require('./data');
