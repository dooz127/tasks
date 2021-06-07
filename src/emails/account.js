const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (name, email) => {
  sgMail.send({
    to: email,
    from: 'dooz127@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendCancellationEmail = (name, email) => {
  sgMail.send({
    to: email,
    from: 'dooz127@gmail.com',
    subject: 'Are you sure you want to cancel?',
    text: 'So sorry to see you go! Is there anything we can do to get you to change your mind?'
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
};
