const express = require('express');

const app = express();

app.get('/', (req, res) =>
    res.send('xin chào')
);

app.listen(3000, () =>
    console.log('cat_service is listening on port 3000.')
);
