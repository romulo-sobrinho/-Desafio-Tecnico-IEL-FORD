const express = require('express');
const router = express.Router();
const movieControllers = require('../controllers/movieControllers')
const cors = require('cors')

router.use(cors())

router.get('/filters', movieControllers.filters)

router.get('/movies', movieControllers.movies);

module.exports = router