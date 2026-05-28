import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const adminEmail = process.env.CONTACT_EMAIL ?? '11balkishan11@gmail.com';
const resendApiKey = process.env.RESEND_API_KEY;
const senderEmail = process.env.SENDER_EMAIL ?? `no-reply@${process.env.DOMAIN ?? 'example.com'}`;

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body as { name?: string; email?: string; message?: string };

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  if (!resendApiKey) {
    return NextResponse.json({ error: 'RESEND_API_KEY is not configured.' }, { status: 500 });
  }

  const resend = new Resend(resendApiKey);

  try {
    const { data } = await resend.emails.send({
      from: senderEmail,
      to: adminEmail,
      replyTo: email,
      subject: `New message from ${name} via portfolio contact form`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    console.log('Email send request accepted:', data.id);
    return NextResponse.json({ success: true, emailId: data.id });
  } catch (error) {
    console.error('Resend email failed:', error);
    return NextResponse.json({ error: 'Unable to send message at this time. Please try again later.' }, { status: 500 });
  }
}
