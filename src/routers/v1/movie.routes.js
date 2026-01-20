const express = require('express');
const router = express.Router();

const { movieController } = require('../../controller');


router.get('/',(req,res)=>{
    res.send("Movie router");
});

router.post('/createMovie',movieController.createMovie);
router.get('/getMovie/:id',movieController.getMovie);
router.delete('/deleteMovie/:id',movieController.deleteMovie);


module.exports = router;
