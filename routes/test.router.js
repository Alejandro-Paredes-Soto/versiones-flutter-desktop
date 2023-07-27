const  { Router } = require('express')

const router = Router();
const { updateUser } = require('./../controllers/test.controller')

router.patch('/',  updateUser)

module.exports = router