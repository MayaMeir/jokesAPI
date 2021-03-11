const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jokeSchema = new Schema({
    id: Number,
    setup: String,
    punchline: String
});

module.exports = mongoose.model('jokes', jokeSchema);