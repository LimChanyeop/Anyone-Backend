var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/user.ctrl');

// GET users listing.
router.get('/', userCtrl.getUsers);

module.exports = router;