/* eslint no-console: "off" */
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
