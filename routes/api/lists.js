const express = require('express');
const router = express.Router();
const listCtrl = require('../../controllers/api/lists');

router.get('/saved', listCtrl.allLists)

router.post('/create', listCtrl.createList)

router.delete('/saved/:id', listCtrl.deleteList)

module.exports = router;
