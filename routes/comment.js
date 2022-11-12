const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');

router.post('/recipe/:id/comment', commentCtrl.create);
router.delete('/recipe/:recipeid/comment/:commentid', commentCtrl.delete);

module.exports = router;