import Express from 'express';
const router = Express.Router();

import client from '../controller/dataController.js';

router.get('/addProduct', client.addProduct);
//addProduct, addRelatedProduct
export default router;
