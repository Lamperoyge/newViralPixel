var express = require('express');
var router = express.Router();
require('dotenv').config()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);




const msg = (data) => {
  let newData = JSON.parse(data);
  let email = newData.email
  let name = newData.name
  let description = newData.description
  let phone = newData.phone
  return{
  to: 'mustea.adrian95@gmail.com',
  from: 'viralpixel@virelpixel.studio',
  subject: `${name} is interested`,
  text: `${name} is interested in our services.His project: ${description} ; his contacts: ${email}, ${phone} `
  }
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ViralPixel - digital art' });
});

router.get('/how-we-work', function(req,res,next) {
  res.render('how', {title: 'How we work'})
})

router.post('/send/contact/:body', function(req, res, next) {
  sgMail.send(msg(req.params.body));
  res.send('');
  res.status(200)
})

module.exports = router;
