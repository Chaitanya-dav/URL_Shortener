const express = require('express');
const {createShortUrl,createUser} = require('../controllers/url');
const router = express.Router();

router.post("/url", createShortUrl);
router.post("/user",createUser);

module.exports = router;
