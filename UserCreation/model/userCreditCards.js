const mongoose = require('mongoose');

const CreditCard = mongoose.Schema({
    userName: String, //associated pennywise account
    bankName: String, //discover
    accountType : String,
    bankUserName: String,
    bankPassword: String,
    billDueDate: Date,
    transactions:[{
        category : String, //grocery,transport, shopping
        date : Date,
        description: String, //place of transaction
        amount: Number
    }]
});

module.exports = mongoose.model('CreditCard', CreditCard);