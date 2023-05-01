const express = require('express');
const router = express.Router();
const templateCtrl = require('../../controllers/api/templates')

//GET items
router.get('/saved', templateCtrl.allTemplates)

router.post('create', templateCtrl.createTemplate)

module.exports = router