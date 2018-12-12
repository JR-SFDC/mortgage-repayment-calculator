const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// blah
app.get('/', (req, res) => res.sendFile('index.html', { root: __dirname }));
app.use(express.static('public'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 