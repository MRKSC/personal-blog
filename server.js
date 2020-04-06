//-------------------------------------------------------------------------------------
// modules
const path = require('path');
const express = require('express'); // module
const cors = require('cors'); // module
const router = express.Router(); // module
const nodemailer = require('nodemailer'); // module
const app = express(); // express app
//-------------------------------------------------------------------------------------
// middleware
app.use(cors()); // out of server communication
app.use(express.json()); // parse JSON
app.use('/', router);
app.use(express.static(path.join(__dirname, 'client/build')));
//-------------------------------------------------------------------------------------
// routes

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.get('/work', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.get('/personal-blog', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
//-------------------------------------------------------------------------------------
// NodeMailer
//Nodemailer connection and verification
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.JUIKYKIHFJJRTYJDH,
        pass: process.env.YIOYPYIPKFDFGYHYUJ
    }
});
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});
//-------------------------------------------------------------------------------------
//NodeMailer
//sending message
router.post('/api/send', (req, res, next) => {
    let {name, email, message} = req.body;
    let content = `name: ${name} \n email: ${email} \n message: ${message} `;
    let mail = {
        from: name,
        to: 'sadecky.marek@gmail.com',
        subject: `New Message from MRKSC ${name}`,
        text: content
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'error'
            })
        } else {
            res.json({
                status: 'success'
            });
        }
    });
});

//-------------------------------------------------------------------------------------
// PORT
require('dotenv').config();
const port = process.env.PORT || 5000;
app.listen(port, ()  => {console.log(`We are online on port ${port}`)});