import Express from 'express';
const router = Express.Router();
import dataRouter from './data.js';

router.use('/data', dataRouter);

export default router;
