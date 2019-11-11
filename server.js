const express   = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.listen(port, () => console.log(`Server is running on port: ${port}`));

module.exports = app;