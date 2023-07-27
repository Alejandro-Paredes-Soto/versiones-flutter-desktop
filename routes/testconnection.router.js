const { Router } = require('express')
const router = Router()
const { connection } = require('./../controllers/testconeccion.controller')

router.get('/', connection)

module.exports = router