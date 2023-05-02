import Express from 'express';
import User from '../model/user.model.js';
const router = Express.Router();
import clientRouter from './clientRouter.js';

//router.use('/admin', adminRouter);
router.use('/client', clientRouter);

export default router;
