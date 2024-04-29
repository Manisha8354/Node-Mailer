const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
let port = 3000
let app = express()
app.use(bodyParser.urlencoded({extended: true}))


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jimanishab@gmail.com',
      pass: 'wydr bcuf dcme msxq'
    }
  });

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res)=>{
    let name = req.body.name
    let number = req.body.number
    let email = req.body.email
    let message = req.body.message

    var mailOptions = {
        from: 'divykirtisrivastava@gmail.com',
        to: `${email}`,
        subject: 'send this gmail for practice',
        text: `Name:- ${name} 
         Number:- ${number}
          Message:- ${message}`,
        
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.send('mail send')
        }
      });

})

app.listen(port, ()=>{
    console.log(`server is running at http://127.0.0.1:${port}`)
})
