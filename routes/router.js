const express = require('express');
const router = express.Router();
const main = require('../controller/MainController.js');

router.get('/', main.index);
router.get('/movie', main.movie);
router.get('/celebritylist', main.celebritylist);
router.get('/topmovies', main.topmovie);
router.get('/news', main.news);
router.get('/movie-details', main.moviedetails);
router.get('/blog-details', main.blogdetails);



module.exports = router;