const creditCard = require('../model/userCreditCards');

exports.add = (req,res) => {
    const newcard = new creditCard({
        userName : req.body.userName,
        bankName: req.body.bankName,
        accountType :req.body.accountType,
        bankUserName: req.body.bankUserName,
        bankPassword: req.body.bankPassword,
        billDueDate: req.body.billDueDate,
        transactions: req.body.transactions
    });
    console.log("card acct type" + newcard.accountType );
    newcard.save().then(() => {
        // alert("User is Created");
        res.send({'message':'Credit card added successfully'+JSON.stringify(newcard)});
    });
    
};
exports.get = (req,res) => {
    var user = req.url.split("/")[2];
    var query = ({ userName: user });
    console.log("console get credit card for user"+user);
    creditCard.find(query,(err,cc)=>{
    if(cc.length==0){
        res.send({'message':'could not find the card' + user});
    }
    else
        res.send(cc);
    });
};

