import express from 'express';
import cookie from 'cookie-parser';
import Router from './router/index.js';
import dotenv from 'dotenv';
dotenv.config();
import connectDb from './config/connectDB.js';

connectDb()
    .then(() => {
        bootServer();
    })
    .catch((error) => {
        console.log(error);
        process.exit();
    });

const bootServer = () => {
    const app = express();

    //parser
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // Add headers before the routes are defined
    app.use(function (req, res, next) {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', process.env.hostFE);

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });

    app.use(cookie());
    //router api
    app.use('/api', Router);

    //handle error url
    app.use(function (req, res, next) {
        if (req.accepts('json')) {
            res.json({ error: 'Not found' });
            return;
        }
        res.type('txt').send('Not found');
    });
    //start
    app.listen(process.env.PORT || 3150, () => {
        console.log(`server run in ${process.env.baseURL}:${process.env.PORT}`);
    });
};
