const express = require('express');

const app = express();

app.get('/', (req, res) => 
    res.send('xin chào from cat_service')
);

app.listen(3300, () => 
    console.log('cat_service is listening on port 3300.')
);
