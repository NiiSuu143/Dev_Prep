/************
 * nodemailer
 *      -> technical detail -> SMTP Service
 *      -> messsage object
 * *************/  


const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();
const fs = require("fs");

async function updateTemplateHelper(templatePath, toReplaceObject) {
    let templateContent = await fs.promises.readFile(templatePath, "utf-8");
    const keyArrs = Object.keys(toReplaceObject);
    keyArrs.forEach(key => {
        templateContent = templateContent.replace(`#{${key}}`, toReplaceObject[key]);
    })
    return templateContent;
}

async function emailSender(templatePath, recieverEmail, toReplaceObject) {
    try {
        const content = await updateTemplateHelper(templatePath, toReplaceObject);

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
          to: recieverEmail, // Change to your recipient
          from: 'ecvinaspati@gmail.com', // Change to your verified sender
          subject: 'Sending First Email',
          text: 'and easy to do anywhere, even with Node.js',
          html: content
        }
         
        const transporter = nodemailer.createTransport(sendGridDetails);
        await transporter.sendMail(msg);
    } catch (err) {
        console.log("email not send because of this error", err);
    }
}


//demo purpose
// const toReplaceObject = {
//     name : "Dabii",
//     otp : "1234"
// }

// emailSender("./templates/otp.html", "sunandaleitanthem888@gmail.com", toReplaceObject).then(() => {
//     console.log("Email is send");
// })

module.exports = emailSender;