import nodemailer from 'nodemailer'
import User from '@/models/userModel';
import bcrypt from 'bcryptjs/dist/bcrypt';
import bcryptjs from 'bcryptjs';

export const sendEmail = async({email, emailType, userId}) =>
{
    try {
        const hashedToken = await bcrypt.hash(userId.toString(), 10)

        if(emailType === "VERIFY"){
          await User.findByIdAndUpdate(userId, 
            {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000}
          )
        } else if(emailType === "RESET"){
          await User.findByIdAndUpdate(userId, 
            {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000}
          )
        }

// Looking to send emails in production? Check out our Email API/SMTP product!
var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7b8305a53c017d",
    pass: "13f0fa67c6951b"
  }
});

          const mailOptions = {
            from: 'xyz', // sender address
            to: email, // list of receivers
            subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to 
            ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy paste the link below in your browser.<br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`, // html body
          }

         const mailResponse =  await transport.sendMail(mailOptions)
         return mailResponse
    } catch (error) {
        throw new Error(error.message)
    }
}