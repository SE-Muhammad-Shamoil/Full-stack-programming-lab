const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  try {
    // For local development, we use a mock/ethereal email transporter
    // If you have real SMTP credentials, put them in .env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: process.env.SMTP_PORT || 587,
      auth: {
        user: process.env.SMTP_EMAIL || 'mock-user@ethereal.email',
        pass: process.env.SMTP_PASSWORD || 'mock-password'
      }
    });

    const message = {
      from: `${process.env.FROM_NAME || 'LifeCore Concierge'} <${process.env.FROM_EMAIL || 'noreply@lifecore.com'}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: options.html || options.message.replace(/\n/g, '<br>')
    };

    const info = await transporter.sendMail(message);

    console.log('Message sent: %s', info.messageId);
    if (!process.env.SMTP_HOST) {
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
