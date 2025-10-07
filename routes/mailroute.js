const express = require('express');
const route=express.Router();
const mailController=require('../controller/mail-controller');
route.post('/sendmail',mailController.sendMail);
route.get('/getmails',mailController.getMails);
module.exports=route;