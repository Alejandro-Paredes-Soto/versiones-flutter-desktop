const { Router } = require('express')
const router = Router();
const { add, findAll } = require('./../controllers/encuestas.controller')

router.get('/', findAll)
router.post('/', add)


module.exports = router