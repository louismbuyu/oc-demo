const express = require('express');

const app = express();

app.get('/', (req,res) => {
    return res.json({message: "Hello World"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});