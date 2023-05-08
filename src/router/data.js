import Express from 'express';
const router = Express.Router();

import client from '../controller/client.controller.js';

router.get('/addProduct', client.addProduct);
//addProduct, addRelatedProduct
export default router;
