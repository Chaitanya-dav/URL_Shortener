const express = require('express');
const {createShortUrl, signupUser} = require('../controllers/url');
const router = express.Router();

router.post("/url", createShortUrl);
router.post("/user",signupUser);

module.exports = router;
