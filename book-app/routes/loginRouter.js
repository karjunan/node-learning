const config = require('../config.json')
const jwt = require('jsonwebtoken');
const express = require('express');
const loginRouter = express.Router();
const Role = require('../helper/role');


const users = [
    { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin },
    { id: 2, username: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: Role.User }
];


function login() {
    console.log('Inside login');
    loginRouter.route('/login')
    .post((req,res,next) => {
        console.log("Routing inside login route",req.body);
        const {username,password} = req.body;
        console.log("Destructured Value => ", username, password)
        authenticate(username,password);
        // result.then(v => console.log("Value", v.token))
        // .catch(k => console.log("Errors ", k))
        // console.log('Result ',result);
        res.send("");
    })
    
    return loginRouter

}

function authenticate({ username, password }) {
    console.log("User Name is => "+ username)
    const user = users.find(u => u.username === username && u.password === password);
    console.log("Authenticated user " , user);
    if (user) {
        
        const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
        const { password, ...userWithoutPassword } = user;
        return {
            ...userWithoutPassword,
            token
        };
    }
}

module.exports = {
    authenticate,
    login
};