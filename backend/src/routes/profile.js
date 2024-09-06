const express = require('express');
const profile = require('../controllers/profile');

const router = express.Router();

router.get('/', profile.getProfiles);
router.post('/', profile.createProfile);
router.put('/:id', profile.updateProfile);

module.exports = router;