
const express = require('express');

const app = express();

app.use(express.static('./dist/rate-convertor'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/rate-convertor/'}),
);

app.listen(process.env.PORT || 8080);