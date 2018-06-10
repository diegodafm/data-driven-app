const express = require('express');
const path = require('path');
const app = express();

const BUILD_DIR = path.resolve(__dirname, '../../../build');

app.use(express.static(BUILD_DIR)); //serves the index.html
app.listen(3000); //listens on port 3000 -> http://localhost:3000/