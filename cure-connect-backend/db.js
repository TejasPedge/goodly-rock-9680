const mongoose = require('mongoose');

const connect = mongoose.connect(process.env.CURE_CONNECT_URL);

module.exports = {connect};