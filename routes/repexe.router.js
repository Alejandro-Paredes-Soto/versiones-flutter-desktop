const { Router } = require('express');
const { findAllVersion, downloadVersion } = require('./../controllers/repexe.controller')

const router = Router();

router.get('/downloadVersion', downloadVersion)

router.get('/allVersiones', findAllVersion);

module.exports = router;