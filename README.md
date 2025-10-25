# Ahmed's Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases Ahmed's work as a backend software engineer specializing in Laravel, PHP, and modern web technologies.

## 🚀 Features

- **Modern Design**: Clean, minimal design with smooth animations and transitions
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Performance Optimized**: Built with Next.js 14 for optimal performance and SEO
- **TypeScript**: Full type safety throughout the application
- **Animations**: Smooth scroll animations using Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📋 Sections

- **Hero Section**: Eye-catching introduction with call-to-action
- **About Section**: Personal information, skills, and experience
- **Projects Section**: Showcase of featured projects with live demos
- **Blog Preview**: Latest technical blog posts
- **Contact Section**: Contact form and social media links
- **Footer**: Additional links and information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ahmed/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local` with your actual values.

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update the following files with your personal information:

- `components/About.tsx` - Update bio, skills, and experience
- `components/Projects.tsx` - Add your projects
- `components/BlogPreview.tsx` - Add your blog posts
- `components/Contact.tsx` - Update contact information
- `app/layout.tsx` - Update SEO meta tags

### Styling

The website uses Tailwind CSS with custom colors defined in `tailwind.config.js`. You can customize:

- Primary and accent colors
- Fonts
- Animations
- Component styles

### Images

Replace placeholder images with your own:

- Profile photo in `components/About.tsx`
- Project images in `components/Projects.tsx`
- Blog post images in `components/BlogPreview.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy automatically on every push to main branch

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎨 Customization Guide

### Colors

The website uses a custom color palette defined in `tailwind.config.js`:

- Primary: Teal shades
- Accent: Blue shades
- You can easily change these colors by updating the config file

### Animations

Animations are powered by Framer Motion and can be customized in each component. The main animation types are:

- Fade in/out
- Slide up/down/left/right
- Scale effects
- Hover animations

### Content

All content is easily customizable through the component files. Simply update the data objects in each component to reflect your information.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ahmed/portfolio-website/issues).

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out:

- Email: ahmed@example.com
- LinkedIn: [linkedin.com/in/ahmed](https://linkedin.com/in/ahmed)
- GitHub: [github.com/ahmed](https://github.com/ahmed)

---

Made with ❤️ by Ahmed