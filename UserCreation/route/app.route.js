module.exports = (app) => {
    const user = require('../controller/userController');
    const BankAccount = require('../Controller/creditCardController');
    const budget = require('../Controller/userBudgetController');

    app.post('/user',user.create);
    //app.get('/user/:userName/:password',user.getUser);
    app.post('/user/authenticate',user.getUser)
    app.delete('/user/:userName',user.delete);

    app.post('/creditcard', BankAccount.add);
    app.get('/creditcard/:user', BankAccount.get);

    app.post('/addbudget', budget.add);
    app.get('/getbudget/:userName', budget.getBudget);
    
}