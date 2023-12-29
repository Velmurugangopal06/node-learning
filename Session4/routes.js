const express = require('express');

const router = express.Router();

const users = [];

router.get('/users', (req, res, next) => {
    res.render('userlist', { 
        pageTitle: 'UserList page',
        data: users
    });
});

router.post('/users', (req, res, next) => {
    users.push({ 
        firstName: req.body.firstName, 
        lastName: req.body.lastName 
    });
    res.redirect('/users');
});

router.get('/', (req, res, next) => {
    res.render('home', { 
        pageTitle: 'Home page'
    });
});

router.use('/', (req, res, next) => {
    res.render('notfound', { 
        pageTitle: 'Not Found'
    });
});

module.exports = router;