const { Router } = require('express')
const router = Router();
const { uploadPDF } = require('./../controllers/pdf.controller')

router.post('/', uploadPDF)

module.exports = router