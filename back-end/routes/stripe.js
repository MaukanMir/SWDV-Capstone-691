const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_INFO)
// const KEY = process.env.STRIPE_KEY
// const stripe = require("stripe")(KEY);

//  const KEY = process.env.STRIPE_SECRET_KEY;
 const stripe = require("stripe")("sk_test_51JsCLxBXsQJ7BZBNP0hBPWt02oVtPV58PyahHsXmMaM4jLEh6Xo1GuogrHqVmFC2Ad30Fb4kFpIzlrkXI2K8JnqP00jysYDxZr");



router.post("/payment", (req,res)=>{

    stripe.charges.create({
    source:req.body.tokenId,
    amount: req.body.amount,
    currency:"usd"
    }, (stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr)
        }else{
            res.status(200).json(stripeRes)
        }
    });

});

module.exports = router;

// STRIPE_KEY = sk_test_51JsCLxBXsQJ7BZBNP0hBPWt02oVtPV58PyahHsXmMaM4jLEh6Xo1GuogrHqVmFC2Ad30Fb4kFpIzlrkXI2K8JnqP00jysYDxZr
