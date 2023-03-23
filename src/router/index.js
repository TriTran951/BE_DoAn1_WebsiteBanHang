const router = require('express').Router();
const path = require('path');

//router.use('/admin', adminRouter);
router.get('/', (req, res, next) => {
    return res.status(200).json('Hello world');
});

module.exports = router;
