const {User} = require('../models/url');

async function createUser(req,res){
    const body = req.body;
    if(!body.name || !body.email ||!body.password){
        return res.status(400).json({error : 'name, email and password are required'});
    }
    await User.create({
        name:body.name,
        email: body.email,
        password: body.password,
    });
    return res.status(201).json({
        name : body.name,
        email : body.email,
        password : body.password,
    })
}

module.exports = {createUser};