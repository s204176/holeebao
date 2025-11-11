# Holee Bao - Coming Soon Landing Page

A modern, animated "Coming Soon" landing page for Holee Bao, a new steamed bao restaurant in Copenhagen.

## 🥟 About

Holee Bao is bringing authentic steamed baos to Copenhagen's Åboulevard area. This landing page features beautiful animations and effects to build anticipation for the launch.

## ✨ Features

- **Animated Steam Effects**: Subtle steam particles rising from the logo using Framer Motion
- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Email Signup**: Integrated email validation and signup form for launch notifications
- **Modern Tech Stack**: Built with React 18, TypeScript, Tailwind CSS, and Vite
- **SEO Optimized**: Complete meta tags for social sharing and search engines
- **Smooth Animations**: 60fps animations with Framer Motion
- **Copenhagen Aesthetic**: Clean, modern design with warm color palette

## 🚀 Getting Started

1) Install dependencies

```bash
npm install
```

2) Add logo image

Place your logo image (`steamer_holeebao_v1.png`) in the `public/assets/` directory.

3) Run development server

```bash
npm run dev
```

4) Build for production

```bash
npm run build
```

5) Preview production build

```bash
npm run preview
```

## 🎨 Tech Stack

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Lightning-fast build tool
- **Tailwind CSS v3**: Utility-first CSS framework
- **Framer Motion**: Production-ready animation library

## 📁 Project Structure

```
holeebao/
├── public/
│   └── assets/           # Logo and images
├── src/
│   ├── components/       # React components
│   │   ├── SteamEffect.tsx      # Animated steam particles
│   │   ├── EmailSignup.tsx      # Email subscription form
│   │   ├── FloatingBaos.tsx     # Background decorations
│   │   └── SocialLinks.tsx      # Social media icons
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template with SEO meta tags
└── tailwind.config.js   # Tailwind configuration with custom theme
```

## 🎨 Color Palette

The design uses a warm, inviting color scheme:

- **Bao White**: `#FAFAFA` - Clean background
- **Bao Cream**: `#F5F1E8` - Warm accent
- **Bao Red**: `#D32F2F` - Primary brand color
- **Bao Steam**: `#E8EAF6` - Subtle effect highlights

## 📧 Email Signup

The email signup form includes:
- Email validation
- Success/error states
- Smooth animations
- Accessible form fields

## 🔧 Customization

To customize the landing page:

1. **Colors**: Edit `tailwind.config.js` to modify the color palette
2. **Content**: Update text and copy in `src/App.tsx`
3. **Animations**: Adjust timing and effects in component files
4. **SEO**: Modify meta tags in `index.html`

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📄 License

© 2024 Holee Bao. All rights reserved.
