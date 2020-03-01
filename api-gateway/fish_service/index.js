const express = require('express');

const app = express();

app.get('/', (req, res) =>
    res.send('xin chào from fish_service')
);

app.listen(3100, () =>
    console.log('fish_service is listening on port 3100.')
);
