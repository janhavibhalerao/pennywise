const userBudget = require('../model/userbudget');

exports.add = (req,res) => {
    const budget = new userBudget({
        userName : req.body.userName,
        month:req.body.month,
        userBudget: req.body.userBudget

    });

    addBudget(budget, (err, foundbudget) =>{
        console.log("call add budget" + JSON.stringify(budget));
        if(err){
           res.json({success: false, msg: "Failed to register user Budget!"});
        
        }
        else{
            res.json({success: true, msg: "User Budget Saved!"});
         }

    });  

};

addBudget = function(newBudget, callback){
    console.log("inside add2" + JSON.stringify(newBudget));
getUserbyBudget(newBudget,(err, budget)=>{
console.log("Already found budget" + JSON.stringify(budget));
if(budget){
   console.log('message Budget already exist');
}
else{

    newBudget.save(callback);
}
});

}
getUserbyBudget = function(budget, callback){
    const query = {userName: budget.userName, month:budget.month}
    userBudget.findOne(query, callback);

}

exports.getBudget = (req,res) => {
    var user = req.url.split("/")[2];
    var query = ({ userName: user });
    console.log("console get  user budget for "+user);

    userBudget.find(query,(err,budgetlist)=>{
    if(budgetlist.length ==0 ){
        res.send({'message':'could not find user' + user});
    }
    else{
    console.log("found list"+JSON.stringify(budgetlist));
        res.send(budgetlist);
    }
    });
};