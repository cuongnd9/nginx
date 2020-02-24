const express = require('express');

const app = express();

app.get('/', (req, res) => 
    res.json('xin chào from cat_service')
);

app.listen(8100, () => 
    console.log('cat_service is listening on port 3300.')
);
