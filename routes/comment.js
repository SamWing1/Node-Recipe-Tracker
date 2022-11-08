const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');

router.post('/recipe/:id/comment', commentCtrl.create);

module.exports = router;