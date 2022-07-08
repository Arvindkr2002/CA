import nodemailer from "nodemailer";

export async function sendEmail(email: string, content: string) {
  const account = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: account.user, 
      pass: account.pass  
    }
  });

  const mailOptions = {
    from: '"Fred Foo" <foo@example.com>',
    to: "foo@example.com",
    subject: "Hello", 
    text: content, 
  };

  const info = await transporter.sendMail(mailOptions);

}