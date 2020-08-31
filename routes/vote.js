const express = require('express');
const router = express.Router();
const blockchain = require("../blockchain/blockchain");



// render page
router.get('/',(req,res) => {
 res.render('vote');
});

router.post('/', (req, res) => {
    aadhar = req.body.aadhar;
    let info = {"voterID":req.body.ID,"aadharID":aadhar,"candidate":req.body.candydate};
    blockchain.addBlock(info);
    res.redirect('vote/success');
});

router.get("/result",(req,res) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(blockchain,null,4));
});

router.get('/success', (req, res) => {
    res.render('placed');
})
module.exports = router;
