require('dotenv').config({path: './config.env'});

const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const Cat = mongoose.model('Cat', { name: String });

app.get('/api/kittens', async (req, res) => {
    let kittens = await Cat.find();
    res.json({
        data:kittens
    });
});