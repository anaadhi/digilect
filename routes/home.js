const express = require('express');
const router = express.Router();

// render page
router.get('/',(req,res) => {
 res.render('index')
});



module.exports = router;
