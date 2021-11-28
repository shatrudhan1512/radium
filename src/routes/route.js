const express = require('express');

const router = express.Router();


const Controller = require('../controllers/Controller')


router.get('/coinslist', Controller.cryptoCoin)


module.exports = router;