
const express = require('express');

const app = express();

app.use(express.static('./dist/RateConvertor'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/RateConvertor/'}),
);

app.listen(process.env.PORT || 8080);