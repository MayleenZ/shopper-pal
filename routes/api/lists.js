const express = require('express');
const router = express.Router();
const listCtrl = require('../../controllers/api/lists');

router.get('/saved', listCtrl.allLists)

router.post('/create', listCtrl.createList)

module.exports = router;
