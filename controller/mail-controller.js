const Mail = require('../model/mail');
const { sendMailFromNodeMailer } = require('../utils/nodemailer');

async function sendMail(req, res) {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: 'All fields are required' });
        }
        const mail = new Mail({ name, email, message });
        await mail.save();
       await sendMailFromNodeMailer(name, email, message);

        res.status(200).json({success: true, message: 'Mail sent successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error sending mail' });
    }
}
async function getMails(req, res) {
    try {
        const mails = await Mail.find();
        res.status(200).json(mails);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching mails' });
    }
}
module.exports = { sendMail, getMails };