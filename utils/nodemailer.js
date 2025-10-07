const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: process.env.GMAIL_HOST,
  port: process.env.GMAIL_PORT,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

async function sendMailFromNodeMailer(name, email, message) {
  try {
    const mailOptions = {
      from: `Portfolio Message <${process.env.GMAIL_USER}>`,
      to: "lavshah1111@gmail.com",
      replyTo: email,
      subject: ` New Message from ${name} via Portfolio`,
    html: `
  <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f2f5f9; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 18px rgba(0,0,0,0.08);">
      
      <!-- Header Section -->
      <div style="background: linear-gradient(135deg, #007bff, #00c4b4); color: white; padding: 25px 30px; text-align: center;">
        <h2 style="margin: 0; font-size: 22px; letter-spacing: 0.5px;">💬 New Message from Your Portfolio</h2>
      </div>

      <!-- Body Section -->
      <div style="padding: 30px;">
        <p style="font-size: 16px; color: #444; margin-top: 0; line-height: 1.6;">
          You’ve received a new message via your portfolio contact form. Here are the details:
        </p>

        <!-- Sender Info Card -->
        <div style="background: #f8fbff; padding: 20px; border-left: 4px solid #007bff; border-radius: 6px; margin-top: 15px;">
          <p style="margin: 0 0 8px;"><strong>Name:</strong> <span style="color: #222;">${name}</span></p>
          <p style="margin: 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
        </div>

        <!-- Divider -->
        <hr style="margin: 30px 0; border: 0; border-top: 1px dashed #ccc;">

        <!-- Message -->
        <h3 style="color: #007bff; margin-bottom: 10px;">Message</h3>
        <p style="white-space: pre-line; line-height: 1.8; color: #333; background: #fafafa; padding: 15px 20px; border-radius: 6px; border-left: 3px solid #00c4b4;">
          ${message}
        </p>

        <p style="margin-top: 25px; font-size: 14px; color: #777;">
          You can reply directly to <a href="mailto:${email}" style="color: #007bff; font-weight: 600; text-decoration: none;">${email}</a>
        </p>
      </div>

      <!-- Footer Section -->
      <div style="background: #f1f3f6; padding: 15px 25px; text-align: center; border-top: 1px solid #e0e0e0;">
        <p style="margin: 0; color: #777; font-size: 13px;">
          ✨ This message was sent via the contact form on your portfolio.
        </p>
      </div>
    </div>
  </div>
`
    };

    await transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(" Error sending email:", error);
      }
      console.log("Email sent:", info.response);
    });
    console.log("Mail sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = { sendMailFromNodeMailer };