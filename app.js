const express = require('express');
const PORT = 8000;
const app = express();
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes')

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', movieRoutes);