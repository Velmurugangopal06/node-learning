const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log("This is the first middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("This is the second middleware");
//     next();
// });


// app.use((req, res, next) => {
//     console.log("This is the third middleware");
//     res.send('<div>Return to Html</div>')
// });

app.use('/users', (req, res, next) => {
    console.log('This /users middleware');
    res.send('<div>This /users html</div>');
});

app.use('/', (req, res, next) => {
    console.log("This is root path middleware");
    res.send('<div>This rootpath html</div>');
});

app.listen(3000);