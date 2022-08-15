const express = require('express');
const router = express.Router();
const movieControllers = require('../controllers/movieControllers')

router.get('/filters', movieControllers.filters)

router.get('/movies', movieControllers.movies);

module.exports = router