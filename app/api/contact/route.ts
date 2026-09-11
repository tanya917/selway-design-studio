import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, projectType, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // For now, just log the submission
    // In production, you'd send an email or save to a database
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      projectType,
      message,
      submittedAt: new Date().toISOString(),
    })

    // TODO: Integrate with email service (SendGrid, Nodemailer, etc.)
    // or save to a database

    return NextResponse.json(
      { success: true, message: 'Message received' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
