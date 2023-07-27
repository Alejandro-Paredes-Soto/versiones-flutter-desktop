const  { Router } = require('express')
const router = Router();
const { connectionDb } = require('./../controllers/residencial.controller')

router.get('/', connectionDb)

module.exports = router