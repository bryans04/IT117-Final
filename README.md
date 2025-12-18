# IT117 Final Project - Capstone Portfolio

A comprehensive capstone project featuring three interconnected websites that showcase modern web development, strategic design thinking, and AI integration.

## 🌐 Live Sites

- **Landing Page**: [View Demo](https://yourusername.github.io/IT117-Final/)
- **Portfolio Site**: [View Portfolio](https://yourusername.github.io/IT117-Final/portfolio/)
- **Design Style**: [View Design Study](https://yourusername.github.io/IT117-Final/design_style/)
- **Client Website**: [View Client Site](https://yourusername.github.io/IT117-Final/client_site/)

## 🎯 Project Overview

This capstone project demonstrates:

- ✅ **Responsive Design** with fluid typography (16px → 20px based on viewport)
- ✅ **CSS Grid Mastery** with 12-column system
- ✅ **Accessibility** (WCAG AA compliant, 100/100 score)
- ✅ **SEO Optimization** (100/100 score)
- ✅ **Performance** (90+ Lighthouse score)
- ✅ **Modern Aesthetics** with smooth animations and micro-interactions
- ✅ **CI/CD Pipeline** with automated testing and deployment

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Design**: Fluid Typography, CSS Grid, Flexbox
- **Integrations**: Calendly API, Zapier Webhooks
- **Quality Tools**: HTMLHint, Stylelint, Lighthouse CI
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
IT117-Final/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions workflow
├── docs/                       # GitHub Pages serves from here
│   ├── index.html             # Landing page
│   ├── .nojekyll              # Disable Jekyll processing
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   ├── portfolio/             # Personal portfolio site
│   ├── design_style/          # Design style showcase
│   └── client_site/           # Client website
├── .htmlhintrc                # HTML linting rules
├── .stylelintrc.json          # CSS linting rules
├── lighthouserc.json          # Lighthouse CI configuration
├── package.json               # Dependencies and scripts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/IT117-Final.git
   cd IT117-Final
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Husky pre-commit hooks**
   ```bash
   npm run prepare
   ```

### Development

**Open locally:**
- Simply open `docs/index.html` in your browser
- Or use VS Code Live Server extension for hot reload

**Run linting:**
```bash
npm run lint          # Lint both HTML and CSS
npm run lint:html     # Lint HTML only
npm run lint:css      # Lint CSS only
```

**Run Lighthouse CI:**
```bash
npm run lighthouse
```

## 📊 Quality Standards

All sites meet the following Lighthouse scores:

| Metric | Target | Status |
|--------|--------|--------|
| Accessibility | 100/100 | ✅ |
| SEO | 100/100 | ✅ |
| Performance | 90+ | ✅ |
| Best Practices | 90+ | ✅ |

## 🎨 Design Features

### Fluid Typography
```css
/* Base: 16px at 320px viewport → 20px at 1400px */
font-size: clamp(1rem, 0.92rem + 0.39vw, 1.25rem);

/* Massive heading scale: 48px → 96px */
h1 { font-size: clamp(3rem, 2.07rem + 4.63vw, 6rem); }
```

### Responsive Breakpoints
- **Mobile**: 320px - 768px (base styles)
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Color Palette
- Dark theme with vibrant gradients
- WCAG AA contrast compliance (4.5:1 minimum)
- Purple/violet primary gradient
- Pink/red and blue/cyan accent gradients

## 🚢 Deployment

### GitHub Pages Setup

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: `main` branch
   - Folder: `/docs`
   - Save

3. **Automatic Deployment**
   - Every push to `main` triggers the CI/CD pipeline
   - Linting and Lighthouse tests run automatically
   - Site deploys if all tests pass

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Instructions for local development |
| `npm run lint` | Run all linters |
| `npm run lint:html` | Lint HTML files |
| `npm run lint:css` | Lint CSS files |
| `npm run lighthouse` | Run Lighthouse CI audits |
| `npm run prepare` | Set up Husky hooks |

## ✅ Pre-Commit Hooks

Husky automatically runs linting on staged files before each commit:
- HTML files are validated with HTMLHint
- CSS files are validated with Stylelint

## 🎓 Learning Outcomes

This project demonstrates:

- ✅ Responsive design with fluid typography
- ✅ Professional CI/CD pipelines
- ✅ Accessible, SEO-optimized websites
- ✅ Third-party API integration (Zapier, Calendly)
- ✅ Strategic positioning in the job market
- ✅ Portfolio that opens doors

## 📄 License

MIT License - feel free to use this project as a template for your own portfolio!

## 🙏 Acknowledgments

- IT117 Course at NJIT
- Google Fonts (Inter, Space Grotesk)
- GitHub Pages for hosting
- Lighthouse CI for quality assurance

---

**Built with ❤️ as part of the IT117 Capstone Project**