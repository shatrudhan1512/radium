const express = require('express');

const router = express.Router();


const allController = require('../controllers/allController')
const middlewareController = require('../middlewares/middlewares')


router.get('/date',middlewareController.mid1, allController.dateLog)
router.get('/ip',middlewareController.mid2, allController.ipLog)
router.get('/route', middlewareController.mid3, allController.route)

module.exports = router;