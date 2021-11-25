const express = require('express');

const router = express.Router();


const Controller = require('../controllers/Controller')


router.get('/landon/whethers', Controller.londonWhether)
router.get('/whethers', Controller.citiesWhether)

module.exports = router;
