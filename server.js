require("dotenv").config();
const express = require("express");
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const {google} = require('googleapis');


const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN});

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

const date = new Date();
const year = date.getFullYear();
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
var send_message = "";

app.get('/', function(req, res) {
  res.render("home", {
    currentYear: year,
    message: send_message
  });
});

app.post('/sendMail', function(req, res) {
  const fullName = req.body.fullName;
  const phoneNumber = req.body.phoneNumber;
  const email = req.body.email;
  const request = req.body.request;

  async function sendmail(fullName, phoneNumber, email, request) {
    try {
      // const accessToken = await oAuth2Client.getAccessToken();
      const transport = nodemailer.createTransport({
        service: 'smtp.gmail.com',
        port: 465,
        secure: true,
        rejectUnauthorized: false ,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
      });

      const message = {
        from: process.env.EMAIL,
        to: "maryam.gh1500@gmail.com",
        subject: "Message from Maryam Web",
        text: "Email from: " + email + "\nPhone number is: " + phoneNumber +
          "\nName and family is: " + fullName + "\nThe request is: " + request +
          "\nThe message has sent in: " + date.toLocaleDateString('en-US', options),
      };
      transport.sendMail(message, function(err) {
        if (err) {
          send_message = err;
        } else {
          send_message = "The message has sent seuccessfully!";
        }
        res.redirect('/');
      });
    } catch (error) {
      console.log (error);
    }
  }
  sendmail(fullName, phoneNumber, email, request);
});

const port = process.env.PORT || 3000 ;

app.listen(port , function() {
  console.log(`Server is up and listen to port ${port} .`);
});
