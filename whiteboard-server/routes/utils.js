const router = require('express').Router()
const utils = require('../resources/utils')

router.get('/search', utils.search);

module.exports = router;