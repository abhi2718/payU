const {generateSHA512} = require('../utils/sha'),
       request = require('request');

      exports.reqForPayment = (req, res, next) => {
        const pay = {
          txnid:'10',
          amount:1000 ,
          firstname:"Abhishek",
          email:"abhiwebdev2718@gmail.com",
          productinfo:'edu'
        };
        const hashString = process.env.Merchant_Key + 
                           + '|' + pay.txnid
                           + '|' + pay.amount 
                           + '|' + pay.productinfo 
                           + '|' + pay.firstname 
                           + '|' + pay.email 
                           + '|' + '||||||||||'
                           + process.env.Merchant_Salt_V1 ;
       const hash = generateSHA512(hashString);
       pay.key = process.env.Merchant_Key //store in in different file;
       pay.surl = '/api/v1/payment_gateway/payumoney/success';
       pay.furl = '/api/v1/payment_gateway/payumoney/fail';
       pay.hash = hash;
       request.post({
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        url: 'https://test.payu.in/_payment',
        form: pay
        }, function (error, httpRes, body) {
       if (error) 
        res.send(
        {status: false, 
        message:error.toString()
        }
        );
       if (httpRes.statusCode === 200) {
        res.send(body);
        } else if (httpRes.statusCode >= 300 && 
        httpRes.statusCode <= 400) {
        res.redirect(httpRes.headers.location.toString());
        }
        })
      }

      exports.reqForPaymentSuccess=(req,res,next) => {
        res.json({success:true})
      }
      exports.reqForPaymentFail=(req,res,next) => {
        res.json({success:false})
      }






 