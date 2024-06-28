const express = require('express');
const path = require('path');
const studentsRouter = require('./routes/students');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/student', studentsRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});