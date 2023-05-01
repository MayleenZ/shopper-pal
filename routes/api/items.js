const express = require('express');
const router = express.Router();
const itemCtrl = require('../../controllers/api/items')

router.post('/templates', itemCtrl.createItem)



module.exports = router