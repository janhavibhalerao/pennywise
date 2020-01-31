const mongoose = require('mongoose');

const Budget = mongoose.Schema({

    userName: String,
    month: String,
    userBudget: Number
});

module.exports = mongoose.model('Budget', Budget);