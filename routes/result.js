const express = require('express');
const router = express.Router();

// render page
router.get('/',(req,res) => {
 res.render('result')
});



module.exports = router;
