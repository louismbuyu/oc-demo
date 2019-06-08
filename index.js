const express = require('express');

const app = express();

app.get('/', (req,res) => {
    return res.json({message: "Hello World"});
});

const PORT = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const IP = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(PORT, IP);
console.log('Server running on http://%s:%s', IP, PORT);