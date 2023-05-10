import Express from 'express';
import clientRouter from './clientRouter.js';
import dataRouter from './dataRouter.js';

const router = Express.Router();

router.use('/client', clientRouter);
router.use('/data', dataRouter);

export default router;
