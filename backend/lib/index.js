const express = require("express")
const app = express()
require("dotenv").config()

const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())

app.post("/send_mail", cors(), async (req, res) => {
    let {text} = req.body
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    console.log(res);

    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: "test@test.com",
        subject: "test email",
        html: `<div className="email" style="
        border: 1px solid #1b1464;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
        ">
        <img width="170px" className="stax-logo" src="static/logo.png" />
        <h2> Hello There! </h2>
        <p>${text}</p>
        <p> Stax Of Stories </p>
        </div>
    `
    })
})

app.listen((process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000")
}))