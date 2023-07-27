const { Router } = require('express')
const router = Router()
const { send } = require('./../controllers/eventosSocket.controller')

router.get('/mensaje', send)

module.exports = router