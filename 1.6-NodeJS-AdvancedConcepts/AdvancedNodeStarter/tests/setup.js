require('../models/User');

const mongoose = require('mongoose')
const keys = require('../config/keys')

jest.setTimeout(60000);
Number.prototype._called = {};

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });

