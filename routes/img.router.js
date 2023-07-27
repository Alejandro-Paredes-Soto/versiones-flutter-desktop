const express = require('express');
const router = express.Router();
const { send } = require('./../controllers/img.controller')
const multer = require("multer");

const uploads = multer({dest: 'uploads/'})

router.post('/', uploads.array('miImagen'), send)

module.exports = router;