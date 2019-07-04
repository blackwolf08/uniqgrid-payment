const express = require('express');
const router = express.Router();

router.get('/payment-view', (req, res) => {
  res.render('payment-view');
});
router.get('/transaction-history', (req, res) => {
  res.render('transaction-history');
});
router.get('/contact-us', (req, res) => {
  res.render('contact-us');
});
router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/success', (req, res) => {
  res.send('<h1>Success</h1>');
});
router.get('/failure', (req, res) => {
  res.send('<h1>Failure</h1>');
});

module.exports = router;
