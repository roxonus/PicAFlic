const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
// Routes
router.get('/', (req, res) => {
    Movie.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});
router.post('/movie', (req, res) => {
    const data = req.body;
    const newMoviePost = new Movie(data);
    newMoviePost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // BlogPost
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});
router.get('/name', (req, res) => {
    const data =  {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});
module.exports = router;