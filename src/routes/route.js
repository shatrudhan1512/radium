const express = require('express');

const router = express.Router();


const Controller = require('../controllers/Controller')


router.get('/whethers', Controller.citiesWhether)
router.get('/cities/whethers', Controller.londonWhether)

module.exports = router;
