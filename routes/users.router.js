const { Router } = require('express')
const { login, create, findAll } = require('./../controllers/user.controller')
const router = Router()

router.get('/', findAll)
router.post('/', create)

module.exports = router