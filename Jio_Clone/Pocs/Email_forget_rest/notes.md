## Agenda
* login signup review
* How Email are send -> SHTP
* `Sendgrid` -> to send email
* creating service provider agnostic Emails -> `nodemailer`
* Forget and Rest sPassword Flow

## Touch points where usually mails are sent in the user lifecycle
* SignUp
    * Confirm Email
    * Welcome Email (*)
* Payment flow Email
    * payment -> purchase plan
    * cancel -> cencel plan
* Forget Password
    * OTP share, reset linked