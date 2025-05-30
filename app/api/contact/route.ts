import { NextRequest, NextResponse } from 'next/server';

// Placeholder for environment variables if email sending were to be implemented
// const RESEND_API_KEY = process.env.RESEND_API_KEY;
// const MAIL_TO = process.env.MAIL_TO;
// const MAIL_FROM = process.env.MAIL_FROM;

export async function POST(request: NextRequest) {
  // As per user instruction, email sending is not implemented.
  // This endpoint will simulate a successful submission.

  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation (can be more robust)
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
        return NextResponse.json({ message: 'Invalid data types for fields.' }, { status: 400 });
    }

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Received contact form submission (simulated):');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Simulate successful processing without sending email
    return NextResponse.json({ message: 'Message received! We\'ll be in touch soon.' }, { status: 200 });

  } catch (error) {
    console.error('Error processing contact form (simulated):', error);
    // Check if error is an instance of Error to safely access message property
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return NextResponse.json({ message: `Server error: ${errorMessage}` }, { status: 500 });
  }
}
