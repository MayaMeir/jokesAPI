const express = require('express');
const cors = require('cors');
const app = express();
require('./data/database');
const jokeModel = require('./Models/joke');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get('/', (req, res) => {
    jokeModel.find({}, (err, documents) => {
        const randNum = Math.floor(Math.random() * documents.length); 
        const result = documents[randNum];
        err ? res.status(500).send('error') : res.status(200).send(result);
    })
})

app.get('/GiveMeTwo', (req, res) => {
    jokeModel.find({}, (err, documents) => {
        const randNum1 = Math.floor(Math.random() * documents.length); 
        const randNum2 = Math.floor(Math.random() * documents.length); 
        const result1 = documents[randNum1];
        const result2 = documents[randNum2];
        const jokes = [result1, result2];
        err ? res.status(500).send('error') : res.status(200).send(jokes);
    })
})

app.post('/add', (req, res) => {
    const joke = new jokeModel(req.body);
    joke.save().then(() => res.send("success"));
});




app.listen(3001, () => console.log('server is runing..'))