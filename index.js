const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {Url} = require('./models/url');
const path = require('path');

const {signupUser} = require('./controllers/url');

mongoose.connect('mongodb://localhost:27017/shortUrlDB').then(()=>{
    console.log('connected to DB');
});

app.use(express.json());
app.use('/', require('./routes/url'));


app.set('view engine','ejs');
// app.set('views',path.join(__dirname,'views'));
app.get('/', async (req,res)=>{
    const urls = await Url.find({});
    return res.status(200).render('Home', {urls:urls});
})
app.get('/signup',(req,res)=>{
    res.status(200).render('Signup');
})
  



app.get('/:shortId', async (req,res)=>{
    const shortId = req.params.shortId;
    const entry = await Url.findOne({shortID:shortId});
    if(entry){
    return res.redirect(entry.originalUrl);
    }
});

app.listen(3000,()=>{
    console.log("Server is running on port http://localhost:3000/");
});