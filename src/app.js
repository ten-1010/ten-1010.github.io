const express = require('express');
const path = require('path');
const studentsRouter = require('./routes/students');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/student', studentsRouter);

app.listen(port, () => {
    console.log(`Server is running at https://github.com/ten-1010/ten-1010.github.io`);
});