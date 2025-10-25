import { NextRequest, NextResponse } from 'next/server'
import emailjs from '@emailjs/nodejs'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // EmailJS configuration
    const serviceId = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID
    const publicKey = process.env.EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Prepare email template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: 'dev.ahmed.elsied@gmail.com',
      reply_to: email,
    }

    // Send email using EmailJS
    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    )

    if (result.status === 200) {
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      )
    } else {
      throw new Error('Failed to send email')
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}