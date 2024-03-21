import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const formData = req.body;

    // Create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      // Configure your email provider settings here
      // Example for using Gmail:
      service: "Gmail",
      auth: {
        user: "rajarya75.it@gmail.com",
        pass: "aoigztmjwdxukwps",
      },
    });

    // Setup email data
    let mailOptions = {
      from: '"REDAPi" <rajarya75.it@gmail.com>',
      to: "rajarya75.it@gmail.com",
      subject: "New Form Submission",
      html: `
        <p>Name: <b>${formData.firstName} ${formData.lastName}</b></p>
        <p>Company Name : <b>${formData.companyName}</b></p>
        <p>Email: <b>${formData.email}</b></p>
        <p>Phone: <b>${formData.phone}</b></p>
        <p>Region: <b>${formData.region}</b></p>
        <p>Country: <b>${formData.country}</b></p>
        <p>Message: <b>${formData.message}</b></p>
        `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent: " + info.response);
        res.send("Email sent successfully");
      }
    });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
