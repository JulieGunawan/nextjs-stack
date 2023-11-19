import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';

//emailType shows what type of email is being sent such as:  forgot password, verification, etc
export const sendEmail = async({email, emailType, userId}: any) => {
    try{
        //created hashed token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        //update the verifyToken and expiry date to 24 hours after now
        await User.findByIdAndUpdate(userId, {verifyToken: hashedToken,
           verifyTokenExpiration: Date.now() + 24*3600000})

        if(emailType === "VERIFY"){
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiration: Date.now() + 24*3600000
            })
        } else if (emailType === "RESET"){
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiration: Date.now() + 24*3600000
            })
        }

        //create transporter
        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.MAILTRAP_USER, 
                pass: process.env.MAILTRAP_PASSWORD
            }
        });

        const mailOptions = {
            from: 'cprg352.cprg352@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" || "Reset your password",
            html: `<p>Click <a href="${process.env.domain}/verifyemail?token=${hashedToken}>here</a> to 
            ${emailType === "VERIFY" ? "verify" : "reset"}</p>`
        };
        
        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse;
    } catch (error: any) {
        throw new Error(error.message);
    }
}