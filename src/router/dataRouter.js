import Express from 'express';
const router = Express.Router();

import client from '../controller/dataController.js';

router.get('/test', client.addRelatedProduct);
//http://localhost:3150/api/data/test
//
//addProduct, addRelatedProduct
export default router;
