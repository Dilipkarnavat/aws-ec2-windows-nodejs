import express from 'express'
import con from './Server.js'
import { OAuth2Client } from 'google-auth-library'
import otpGenerator from 'otp-generator'
import twilio from 'twilio'
import nodemailer from 'nodemailer'
import path from 'path'
const router = express.Router()
// import fast2sms from 'fast-two-sms'
// import generateOTP from '../frontend/src/Generate_otp.js'
const accountSid = "AC1c0cd30e118221249377eb2373469b6c";
const authToken = "b5bef11bb71b4dd7df6257a3b2dedb51";
const client = twilio(accountSid, authToken)
let OTP;
// const __dirname=path.resolve()
// router.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname ,'../frontend/public/index.html'))

// })
router.get('/mail', async (req, res) => {
    // console.log(__dirname,path.join(__dirname));
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'dovie88@ethereal.email',
            pass: 'tat8PWwgHdvRTK7Qvv'
        },
    });
    let info = await transporter.sendMail({
        from: 'dovie88@ethereal.email', // sender address
        to: "dilipkarnavat958@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
    console.log("Message sent: %s", info);

})
router.post('/jwtToken', async (req, res) => {
    const jwtToken = req.body.jwtToken
    console.log(jwtToken);
    res.send(await verify('1005239920662-08pb4fagotksm96m876klkr4dv79lde4.apps.googleusercontent.com', jwtToken))
})

async function verify(client_id, jwtToken) {
    const client = new OAuth2Client(client_id);
    // Call the verifyIdToken to
    // varify and decode it
    const ticket = await client.verifyIdToken({
        idToken: jwtToken,
        audience: client_id,
    });
    // Get the JSON with all the user info
    const payload = ticket.getPayload();
    // This is a JSON object that contains
    // all the user info
    return payload;
}
router.put('/edit/:id', (req, res) => {
    const id = req.params.id
    const newpassword = req.body.newpassword
    console.log(newpassword, id)
    con.query(`UPDATE new_account SET password = ?  WHERE id =${id}`, newpassword, (err, result, feilds) => {
        res.status(200).send([req.body])
        console.log("updated succussfully...", result, feilds)
    })
})
router.post('/verify_email', (req, res) => {
    const email = req.body.email
    const sql2 = "SELECT COUNT(*) AS count FROM new_account WHERE email = ?";

    con.query(sql2, [email], (err, result) => {
        const count = result[0].count;
        console.log(result[0])
        const emailexist = count !== 0 && 1;
        res.json({ emailexist });
    })

})
router.post('/signup', (req, res) => {
    // console.log(uname);
    // console.log(typeof(con.query()));
    try {

        // const { Uname, email, tel, city, address, password } = req.body;
        const uname = req.body.Uname;
        const email = req.body.email;
        const tel = req.body.tel;
        const city = req.body.city;
        const address = req.body.address;
        const password = req.body.password;

        var sql = "INSERT INTO new_account (uname, email,tel,city,address,password) VALUES (?,?,?,?,?,?)";
        con.query(sql, [uname, email, tel, city, address, password], (err, result, feilds) => {
            res.status(200).send([req.body])
            console.log("insrtd succussfully...", result, feilds)
        });


    } catch (error) {
        console.error(error.response.data)
    }
})
router.get('/getdata', (req, res) => {
    con.query('SELECT * FROM new_account', (err, result) => {
        res.status(200).send(result)
    })
})
router.post('/otpsent', (req, res) => {

    res.status(200).send(req.body.number)
    console.log(req.body.number);
    sendMessage(req.body.number, res)
})
router.get('/getotp', (req, res) => {
    res.json(OTP);
});
function sendMessage(number, res) {
    OTP = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
    console.log("otp is : ", OTP);
    // var options = { authorization: "PeVvGZqdIE8BnK5D32R04luTAQcyOghUXYCsLJ1tFmorpfxHSidDmJAybo76QRZ4TXzKxhMP1geCquwv", message: `your OTP code is:${otp}`, numbers: [number] }
    //    await fast2sms.sendMessage(options).then(response=>{
    //         console.log("sms sent successfully...",response)
    //       }).catch((err)=>{
    //         console.log("some error...");
    //       })
    // Download the helper library from https://www.twilio.com/docs/node/install
    // Set environment variables for your credentials
    // Read more at http://twil.io/secure


    client.messages
        .create({ body: `your otp is :${OTP}`, from: "+14406717788", to: `+91${number}` })
        .then(message => console.log(message));

}
export default router;