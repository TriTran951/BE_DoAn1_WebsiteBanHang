import Express from 'express';
const router = Express.Router();

import client from '../controller/client.Controller.js';

router.get('/exec', client.Exec);

export default router;
