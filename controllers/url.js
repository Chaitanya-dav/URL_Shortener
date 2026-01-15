const shortid = require("shortid");
const {Url,User} = require("../models/url");

async function createShortUrl(req,res){
    const body = req.body;
     if (!body.url){
        return res.status(400).json({error : 'url is required'});
     }
    const shortId = shortid();
    await Url.create({
        shortID:shortId,
        originalUrl:body.url,
    });

    return res.status(201).json({shortId:shortId});

}
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






module.exports = {createShortUrl,createUser};