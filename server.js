const express = require('express'),
      dotenv=require('dotenv');
      payU=require('./routes/payU'),
      cors = require('cors'),
      app=express();
      // loading env variables
      dotenv.config({path:'./configs/config.env'});
      app.use(cors());
      app.set('view engine', 'ejs');
      const port = 4000 || process.env.DEV_PORT;
      // Mounting routes
      app.get('/',(req, res) => {
          res.render('payment');
      })
      app.use('/api/v1/payment_gateway/payumoney',payU);
    

      app.listen(port,()=>console.log(`server is running at ${port}`));