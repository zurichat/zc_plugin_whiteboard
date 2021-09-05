const router = require('express').Router()
const utils = require('../controllers/utils')

router.get('/search', utils.search);

module.exports = router;