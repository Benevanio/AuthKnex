const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/homeController.js');
const UserController = require('../controllers/UserController.js');
router.get('/', HomeController.index);

router.post('/user', UserController.create);
router.get('/user/:email', UserController.findByEmail);
router.get('/user/id/:id', UserController.findById);
router.put('/user/:id', UserController.update);
router.get('/users', UserController.findAll);
router.put('/user/edit', UserController.edit);
router.delete('/user/delete', UserController.delete);


module.exports = router;