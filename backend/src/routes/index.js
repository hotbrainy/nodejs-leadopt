const express = require('express');

const router = express.Router();
const profile = require("./profile");

router.get('/', (req, res)=>{
    res.send('Hello World from API');
});
router.use('/profile', profile);

module.exports = router;