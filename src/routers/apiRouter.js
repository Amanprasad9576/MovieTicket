const express = require('express');
const { MovieRouter } = require('./v1/index');

const router = express.Router();

router.use('/v1',MovieRouter);

module.exports = router;


