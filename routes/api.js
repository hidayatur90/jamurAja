const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');


router.get('/user', UserController.showUsers);

module.exports = router;