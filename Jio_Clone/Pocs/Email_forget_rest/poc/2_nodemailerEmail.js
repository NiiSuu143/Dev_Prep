/************
 * nodemailer
 *      -> technical detail -> SMTP Service
 *      -> messsage object
 * *************/  


const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();


// through which service you have to send the email
const sendGridDetails = {
    host : "smtp.sendgrid.net",
    port : 465,
    secure : true,
    auth : {
        user : "apikey",
        pass : process.env.SENDGRID_API_KEY
    }
}

const msg = {
  to: 'sunandaleitanthem888@gmail.com', // Change to your recipient
  from: 'ecvinaspati@gmail.com', // Change to your verified sender
  subject: 'Sending First Email',
  text: 'and easy to do anywhere, even with Node.js',

  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}


const transporter = nodemailer.createTransport(sendGridDetails);

transporter
    .sendMail(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })