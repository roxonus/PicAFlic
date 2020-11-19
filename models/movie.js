const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
        min: 3,
        max: 1000
    },
    rating: {
        type: Number,
        required: true,
        min: 6,
        max: 255
    }, 
    review: {
        type: String,
        required: true,
        max:1024,
        min: 3
    }
});


module.exports = mongoose.model('Movie', movieSchema, 'picaflicDB')