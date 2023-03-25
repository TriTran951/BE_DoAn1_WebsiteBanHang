import Express from 'express';
import User from '../model/user.model.js';
const router = Express.Router();

//router.use('/admin', adminRouter);
router.get('/', async (req, res, next) => {
    const small = new User({ HoTen: 'small' });
    small.save();
    return res.status(200).json('Hello world');
});

export default router;
