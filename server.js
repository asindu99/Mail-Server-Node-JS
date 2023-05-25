const { error, info } = require('console');
const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 5000;

//middleware 


app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html')
})



app.post('/posts', (req, res) => {
    console.log(req.body);

    const transpoter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'asindushashan99@gmail.com',
            pass: 'wxwxkywiypwwaqxr'
        }
        
    })

    const mailOptions = {
        from: req.body.email,
        to: 'asindushashan99@gmail.com',
        subjet: `Message from ${req.body.email}: ${req.body.emailSubject}`,
        text: req.body.message1
    }

    transpoter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
            res.send('erorr');
        } else {
            console.log('email Sent:' + info.response);
            res.send('success');
        }
    })


})

app.listen(PORT, ()=>{
    console.log(`Server is on running ${PORT}`)
} )