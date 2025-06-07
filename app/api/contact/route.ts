import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate the request data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content for you (to receive)
    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: 'samarthkolarkar7777@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border-left: 4px solid #8b5cf6; margin: 20px 0;">
            <h3>Message:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px;">
            This email was sent from your portfolio website contact form.
          </p>
        </div>
      `,
    };

    // Email content for the sender (auto-reply)
    const mailOptionsToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for your message. I've received your inquiry and will get back to you as soon as possible.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Your message:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <p>Best regards,<br/>
          <strong>Samarth Kolarkar</strong><br/>
          Full Stack Developer & GenAI Innovator</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px;">
              📧 samarthkolarkar7777@gmail.com<br/>
              📱 +91 7620842092<br/>
              🌐 Portfolio: <a href="http://localhost:3000" style="color: #8b5cf6;">Visit Website</a>
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptionsToYou);
    await transporter.sendMail(mailOptionsToSender);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully! Thank you for your message.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later.' 
      },
      { status: 500 }
    );
  }
} 