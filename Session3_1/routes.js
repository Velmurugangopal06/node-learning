const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views/userlist.html'))
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views/home.html'))
});

router.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views/notfound.html'))
});

module.exports = router;