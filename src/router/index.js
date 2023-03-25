import Express from 'express';
const router = Express.Router();

//router.use('/admin', adminRouter);
router.get('/', (req, res, next) => {
    return res.status(200).json('Hello world');
});

export default router;
