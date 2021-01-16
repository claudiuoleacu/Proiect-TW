const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();

const app = express();

app.use("/public", express.static(process.cwd() + "/public")); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  auth: {
    user: process.env.SERVER_EMAIL,
    pass: process.env.SERVER_PASS,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post("/send", (req, res) => {

  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    console.log(fields);
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });

    const mail = {
      from: data.nume,
      to: process.env.SERVER_EMAIL,
      subject: data.subiect,
      text: `${data.nume} \n<${data.email}> \n<${data.tel}> \n${data.mesaj}`,
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
      } else {
        res.status(200).send("Email successfully sent to recipient!");
      }
    });
  });
});

app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/public/form_bs.html");
});