const express = require('express');
const router = express.Router();
const userRouter = require('./user.routes')
const movieRouter = require('./movie.routes');

router.use('/movie',movieRouter);
router.use('/user',userRouter);

module.exports = router;