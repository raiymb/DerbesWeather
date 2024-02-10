const express = require('express');
const router = express.Router();
const { addUser, editUser, deleteUser, getUser, getUserHistory, updateLanguagePreference } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');

router.get('/', auth, getUser);

router.get('/history', auth, getUserHistory);

router.post('/', [auth, admin], addUser); 
router.put('/:id', [auth, admin], editUser); 
router.delete('/:id', [auth, admin], deleteUser); 
router.get('/profile', auth, getUser);
router.post('/update-language', updateLanguagePreference);

module.exports = router;
