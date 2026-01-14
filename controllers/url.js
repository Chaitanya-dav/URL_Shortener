const shortid = require("shortid");
const {Url} = require("../models/url");

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
module.exports = {createShortUrl};