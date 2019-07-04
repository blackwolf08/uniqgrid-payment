const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const dotenv = require('dotenv');
dotenv.config();

var instance = new Razorpay({
  key_id: process.env.PUBLIC_KEY,
  key_secret: process.env.SECRET_KEY
});

router.post('/data', (req, res) => {
  let order_id;
  let amount = req.body.amount * 100;
  console.log(amount);
  instance.orders
    .create({
      amount: amount,
      currency: 'INR',
      receipt: '#256545',
      payment_capture: 1,
      notes: {}
    })
    .then(res => {
      order_id = res.id;
    });
  res.render('recharge', {
    order_id,
    amount: req.body.amount * 100
  });
});

router.post('/success', (req, res) => {
  instance.payments.capture(req.body.razorpay_payment_id, 500).then(res => {
    console.log('capturer', res);
  });
  instance.payments
    .fetch(req.body.razorpay_payment_id)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      res.redirect('/views/failure');
    });
  res.redirect('/views/success');
});

module.exports = router;
