import Express from 'express';
import clientController from '../controller/clientController.js';
const router = Express.Router();

//router.use('/admin', adminRouter);
router.get('/homeproduct', clientController.HomeController);

router.post('/adddata');

export default router;
