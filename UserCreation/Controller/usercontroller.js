const User = require('../model/usermodel');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/database.config')


exports.create = (req,res) => {
    console.log(req.body.userName);
    console.log("inside create user");

    const user = new User({
        userName : req.body.userName,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName
    });
    // user.save().
    // then(() => {
    //     res.send({'message':'User created successfully'});
    // });
    
    addUser(user, (err, user) =>{
        console.log("called add user");
        if(err){
           res.json({success: false, msg: "Failed to register user!"});
        
        }
        else{
            res.json({success: true, msg: "User is registered!"});
         }

    });  
};


exports.getUser = (req,res) => {

    const userName = req.body.userName;
   const password = req.body.password;

    getUserByEmail(userName, (err, user) => {
       if(err) throw err;
       if (!user){
           return res.json({success :false,  msg:'User not found!' });
       }

       comparePassword(password, user.password ,(err, isMatch) =>{
           console.log("inside node compare function");
           if(err) throw err;
           if(isMatch)
           {
               const token = jwt.sign(user.toJSON(), config.secret, {

                   expiresIn: 604800

               });

               res.json({
                   success: true,
                   token: 'JWT '+token,
                   user: {
                       id:user._id,
                       firstName: user.firstName,
                       lastName: user.lastName,
                       userName: user.userName
                   }
               });
           }else {
               return res.json({success :false , msg: 'Incorrect password!'});

           }
       });
   });


    //    var userName= req.params.userName;
    //    var password= req.params.password;

    //    var query = {userName: userName, password: password};

    // User.find(query,(error,user) => {
    //     if(!user || error){
    //         // alert("User Error");
    //         res.status(401).send({'message':'Invalid Username/Password'});
    //     }else{
    //         // alert("User Logged In");
    //         // res.send({'user':user});
    //         // return res.redirect('http://localhost:4200/signup');
    //     }
    // })
};

addUser = function(newUser, callback){
    console.log("add user function ..... creating user");
    bcrypt.genSalt(10, (err, salt) => {
 
        bcrypt.hash(newUser.password, salt, (err, hash) =>{
            if(err) throw err;

            newUser.password = hash;
            newUser.save(callback);
        });
    });
 }

comparePassword = function(candidatePassword, hash , callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    
       if(err) throw err;
       callback(null, isMatch);
    
    });
}

getUserByEmail = function(userName, callback){
    const query = {userName: userName}
   User.findOne(query, callback);

}

getUserById = function(id, callback){

    User.findById(id, callback);
 
 }

exports.delete = (req,res) => {
    User.findOneAndRemove(req.params.userName).
    then(user => {
        res.send({'message':'user deleted successfully'});
    }); 
};