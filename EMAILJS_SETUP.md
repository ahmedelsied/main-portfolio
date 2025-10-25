# EmailJS Setup Guide

This guide will help you set up EmailJS to send contact form data to your email address.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
Hello Ahmed,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Reply directly to: {{reply_to}}

Best regards,
Your Portfolio Website
```

4. Save the template and note down the **Template ID**

## Step 4: Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## Step 5: Update Environment Variables

1. Open `.env.local` in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
EMAILJS_SERVICE_ID=your_actual_service_id
EMAILJS_TEMPLATE_ID=your_actual_template_id
EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Contact Form

1. Start your development server: `pnpm dev`
2. Navigate to your contact form
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

- Make sure all environment variables are set correctly
- Check the EmailJS dashboard for any error logs
- Verify that your email service is properly configured
- Ensure the template variables match exactly ({{from_name}}, {{from_email}}, etc.)

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates

This should be sufficient for most portfolio websites.