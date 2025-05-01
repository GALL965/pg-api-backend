const express = require('express');
const router = express.Router();
const controller = require('../controllers');


router.get('/users', controller.getUsers);
router.post('/users', controller.createUser);
router.delete('/users/:id', controller.deleteUser);

module.exports = router;
