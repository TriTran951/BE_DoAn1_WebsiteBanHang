import express from 'express';
import cors from 'cors';
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

    app.use(
        cors({
            origin: [process.env.hostFE],
            optionsSuccessStatus: 200,
        }),
    );
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
