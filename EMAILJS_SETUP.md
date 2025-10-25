# EmailJS Setup Guide

This guide will help you set up EmailJS to send contact form data to your email address.

## ⚠️ IMPORTANT: Current Issue

The contact form is currently showing "Failed to send email" because the EmailJS credentials are not configured. Follow the steps below to fix this.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Important:** Note down the **Service ID** (you'll need this)

### For Gmail Setup:
- Select "Gmail" as your email service
- You'll need to enable 2-factor authentication on your Gmail account
- Generate an "App Password" for EmailJS
- Use your Gmail address and the app password (not your regular password)

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

4. **Important:** Save the template and note down the **Template ID**

## Step 4: Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)
3. Copy this value - you'll need it for the environment variables

## Step 5: Update Environment Variables

1. Open `.env.local` in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
# EmailJS Configuration
# Get these values from https://www.emailjs.com/
EMAILJS_SERVICE_ID=service_xxxxxxxxx
EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**
```env
EMAILJS_SERVICE_ID=service_gmail123
EMAILJS_TEMPLATE_ID=template_contact456
EMAILJS_PUBLIC_KEY=user_abcdefghijklmnop
```

## Step 6: Test the Contact Form

1. Start your development server: `pnpm dev`
2. Navigate to your contact form
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

### Common Issues:

1. **"Email service not configured" error:**
   - Check that all three environment variables are set in `.env.local`
   - Make sure there are no extra spaces or quotes around the values

2. **"Failed to send email" error:**
   - Verify your EmailJS service is properly configured
   - Check that your email service (Gmail, etc.) is working
   - Ensure your template variables match exactly ({{from_name}}, {{from_email}}, etc.)

3. **Environment variables not loading:**
   - Restart your development server after updating `.env.local`
   - Make sure `.env.local` is in the project root directory

4. **Gmail authentication issues:**
   - Make sure you're using an App Password, not your regular Gmail password
   - Ensure 2-factor authentication is enabled on your Gmail account

### Debug Steps:

1. Check the browser console for any error messages
2. Check the server console (where you ran `pnpm dev`) for error logs
3. Verify your EmailJS dashboard shows successful email sends
4. Test with a simple email first before using the contact form

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates

This should be sufficient for most portfolio websites.

## Next Steps After Setup

Once you've configured EmailJS:
1. Test the contact form thoroughly
2. Consider setting up email notifications for form submissions
3. Monitor your email usage in the EmailJS dashboard
4. Set up proper error handling and user feedback