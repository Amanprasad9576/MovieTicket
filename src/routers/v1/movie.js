const express = require('express');

const router = express.Router();

router.get('/movie',(req,res)=>{
    res.send("Movie router");
})

module.exports = router;
