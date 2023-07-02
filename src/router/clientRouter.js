import Express from 'express';
import clientController from '../controller/clientController.js';
const router = Express.Router();

//router.use('/admin', adminRouter);
router.get('/homeproduct', clientController.HomeController);
router.get('/dienthoai', clientController.SmartPhoneController);
router.get('/laptop', clientController.LaptopController);
router.get('/tablet', clientController.TabletController);
router.get('/dongho', clientController.WatchController);
router.get('/tainghe', clientController.EarphoneController);
router.post('/getProduct', clientController.getProduct);

export default router;
