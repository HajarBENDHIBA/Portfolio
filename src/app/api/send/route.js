import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Parse the JSON body from the request
    const { to, subject, message } = await req.json();

    // Validate the required fields
    if (!to || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "All fields are required!" }),
        { status: 400 }
      );
    }

    // Create the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL, // Your Gmail address
        pass: process.env.GMAIL_PASSWORD, // Your Gmail App Password
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.GMAIL_EMAIL, // Sender email address
      to, // Recipient from the request
      subject, // Subject from the request
      text: message, // Message content from the request
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully", info }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
