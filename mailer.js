nodemailer = require('nodemailer');


// service provider, credentials, handshaking

    transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure:true,
        auth:{
            user: 'tkumari930451@gmail.com',
            pass: 'jbns xmtg gdjy gfkv'
        }
    })


//mail object
mail = {
    from: 'tkumari930451@gmail.com',
    to: 'smritiranjan65@gmail.com',
    subject: 'OTP',
    text: `Your otp for signin is value`
}

//send mail
transporter.sendMail(mail, (err, data) => {
    if (err) {
        console.log(err)
    }else {
        console.log(data)
    }
})