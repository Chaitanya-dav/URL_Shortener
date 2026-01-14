const express = require('express');
const app = express();
const {Url} = require('./models/url');
const path = require('path');
const connectDB = require('./connect');
connectDB('mongodb://localhost:27017/shortUrlDB').then(()=>{
    console.log('connected to DB');
});

app.use(express.json());
app.use('/url', require('./routes/url'));
app.get('/',async (req,res)=>{
   const urls = await Url.find({});
   return res.status(200).end( `
    <html>
    <head><title>URL Shortner</title></head>
    <body>
    <h1>All Shortened URLs</h1>
    <form method="POST" action="/url">
    <label>enter URL to shorten:</label>
    <input type="text" name="url" placeholder="Enter URL here"/>
    <button type="submit">Shorten URL</button>
    </form>
    <ol>
    ${urls.map(url => `<li> originalurl : <a href="${url.originalUrl}" target = "_blank">${url.originalUrl}</a> - shorturl : <a href="http://localhost:3000/${url.shortID}" target = "_blank">http://localhost:3000/${url.shortID}</a></li>`).join('')}
    </ol>
    </body>
    <script>
    document.querySelector('form').addEventListener('submit', async (e)=>{
        e.preventDefault();
        const url = e.target.url.value;
        const res = await fetch('/url',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({url})
        });
        const data = await res.json();
        alert('Shortened URL ID: ' + data.shortId);
        window.location.reload();
    });

    </script>
    </html>`)
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
})