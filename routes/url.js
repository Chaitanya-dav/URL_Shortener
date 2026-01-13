const express = require('express');
const {createShortUrl} = require('../controllers/url');
const router = express.Router();

router.post("/", createShortUrl);
module.exports = router;
