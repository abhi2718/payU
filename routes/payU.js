const express = require('express'),
      router = express.Router(),
      {
            reqForPayment,
            reqForPaymentSuccess,
            reqForPaymentFail
      } = require('../controllers/payU');
      
      router.route('/')
            .post(reqForPayment);
      router.route('/success')
            .get(reqForPaymentSuccess);
      router.route('/fail')
            .get(reqForPaymentFail);


      module.exports = router;