const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('dist'));
const routes = require('./server/routes');

// Application routes
routes(app);

app.get(
    '/*',
    (req, res) =>
        console.log('*****DEFAULT ROUTE*****') ||
        res.sendFile(path.join(__dirname, '/dist/index.html'))
);

app.listen(8080, () => {
    console.log('My Movie Collection app listening on port 8080')
});