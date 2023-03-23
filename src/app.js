const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const Router = require('./router');
const cookie = require('cookie-parser');
require('dotenv').config();

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    cors({
        origin: [process.env.hostFE],
        optionsSuccessStatus: 200,
    }),
);
app.use(cookie());

//router api
app.use('/api', Router);

//start
app.listen(process.env.PORT || 3150, () => {
    console.log(`serve listen in localhost ${3150}`);
});
