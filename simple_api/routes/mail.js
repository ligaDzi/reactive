//Отправка письма от клиента
const nodemailer  = require('nodemailer');

exports.post = async function(ctx, next) {
    
    const { email } = ctx.request.body;

    const smtpTransport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
          user: "adyamain123456789@gmail.com",  
          pass: "LIGAGAGAGA"
      }
    });

    let mailOptions = {
        from: email,
        to: 'adyamain123456789@gmail.com',
        subject: 'Reactive.com Запрос',
        text: 'Запрос с сайта',
        html: `
            <span>Свяжитесь со мной.</span><br/>
            <span>Мой email: </span><b>${email}</b><br/>
        `
    };

    let transportResponse = await smtpTransport.sendMail(mailOptions);
    ctx.body = 'OK';

    console.log(transportResponse);
}