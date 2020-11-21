const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
        min: 3,
        max: 1000
    },
    Year: {
        type: Number,
        required: true,
        min: 4,
        max: 4
    },
    RunTime: {
        type: String,
        required: true,
        min: 3,
        max: 1000
    },
    Genre: {
        type: String,
        required: true,
        min: 3,
        max: 1000
    },
    Director: {
        type: String,
        required: true,
        min: 3,
        max: 1000
    },
    Actors: {
        type: String,
        required: true,
        min: 3,
        max: 1000
    },
    Plot: {
        type: String,
        required: true,
        min: 3,
        max: 1000
    },
    Rated: {
        type: String,
        required: true,
        min: 3,
        max: 1000
    },
    rating: {
        type: Number,
        required: false,
        min: 6,
        max: 255
    }, 
    review: {
        type: String,
        required: false,
        max:1024,
        min: 3
    }
});


module.exports = mongoose.model('Movie', movieSchema, 'picaflicDB')