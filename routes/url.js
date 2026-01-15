const express = require('express');
const {createShortUrl} = require('../controllers/url');
const {createUser} = require('../controllers/user');
const router = express.Router();

router.post("/", createShortUrl);
router.post("/",createUser);
module.exports = router;
