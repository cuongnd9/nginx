const express = require('express');

const app = express();

app.get('/', (req, res) => 
    res.send('xin chào from dog_service')
);

app.listen(3200, () => 
    console.log('dog_service is listening on port 3200.')
);
