const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.FROM_EMAIL,
        subject: 'Welcome to Task Manager APP',
        text: `Thanks for joining in, ${name}. Let me know how you get along with the app.`
    }).then(() => {}, error => {
            console.error(error);
        
            if (error.response) {
              console.error(error.response.body)
            }
          }); 
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.FROM_EMAIL,
        subject: 'Sorry to see you go!',
        text: `GoodBye, ${name}. I hope to see you sometime soon.`
    }).then(() => {}, error => {
            console.error(error);
        
            if (error.response) {
              console.error(error.response.body)
            }
          }); 
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail 
}

// sgMail.send({
//     to: 'abhirathore103@gmail.com',
//     from: 'abhirathore103@gmail.com',
//     subject: 'This is my first task creation',
//     text: 'I hope this one gets to you'
// }).then(() => {}, error => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   });


