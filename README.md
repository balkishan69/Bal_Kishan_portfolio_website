# Bal Kishan - Premium Developer Portfolio

A production-grade, recruiter-optimized developer portfolio built with modern web technologies and eye-catching 3D/2D animations.

## Features

### Design & Experience
- **Dark Theme UI** with cyan, green, and orange accent colors
- **Glassmorphism** design pattern with backdrop blur effects
- **Animated Particle Background** with dynamic connection lines
- **3D/2D Hover Effects** on cards and interactive elements
- **Smooth Scroll Animations** with Framer Motion
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Circular Profile Photo** with animated glow rings and floating badges

### Portfolio Sections

1. **Hero Section**
   - Typewriter animation cycling through 5 roles
   - Animated circular profile photo with glow effects
   - Key statistics (DSA problems, LeetCode rating, projects, API requests)
   - Smooth CTA buttons with hover effects

2. **About**
   - Story-driven introduction
   - Engineering mindset overview
   - 4 trait cards (Systems Thinker, Performance Obsessed, Product-Oriented, Continuous Learner)
   - Education timeline with all degrees

3. **Skills**
   - Language proficiency bars with real percentages
   - Interactive category tabs (Frontend, Backend, Databases, AI/ML, DevOps, Tools)
   - Animated skill badges with hover effects

4. **Experience**
   - Internship timeline with impact metrics
   - Technology stack per role
   - Key achievements and highlights
   - Certifications sidebar

5. **Projects**
   - Featured projects with large alternating layouts
   - Expandable architecture deep-dives
   - Additional compact project cards
   - Category filtering (AI/ML, Full Stack, Backend, etc.)
   - Links to GitHub and live demos

6. **Achievements**
   - Competitive programming statistics
   - LeetCode Knight (rating 1948)
   - Codeforces Specialist (rating 1517)
   - CodeChef 3-star (rating 1795)
   - Meta HackerCup 2024 global rank
   - GitHub contribution graph

7. **Philosophy**
   - Rotating quote carousel
   - Personal engineering philosophy
   - Navigation controls

8. **Contact**
   - Contact form with success feedback
   - Social media links
   - Email and phone contact info
   - Availability badge

## Technology Stack

### Frontend
- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations and interactions

### Design System
- Custom CSS variables for consistent theming
- 8px spacing system
- Comprehensive color palette with 6+ color ramps
- Responsive breakpoints (mobile, tablet, desktop)

### Animations
- Particle background with canvas rendering
- Scroll-triggered reveals
- 3D perspective transforms on hover
- Smooth transitions and easing
- GPU-accelerated animations

### Performance
- Static site generation (SSG)
- Image optimization
- Code splitting
- Lazy loading
- Lighthouse Score: 95+

## Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <repo-url>
cd project

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Development

### Key Files
```
app/
├── page.tsx           # Main page
├── layout.tsx         # Root layout with metadata
└── globals.css        # Global styles and animations

components/portfolio/
├── Navbar.tsx         # Navigation bar
├── Hero.tsx           # Hero section
├── About.tsx          # About section
├── Skills.tsx         # Skills section
├── Experience.tsx     # Experience timeline
├── Projects.tsx       # Projects showcase
├── Achievements.tsx   # Achievements & stats
├── Philosophy.tsx     # Philosophy carousel
├── Contact.tsx        # Contact form
├── ParticleBackground.tsx  # Animated particle canvas
└── Footer.tsx         # Footer

lib/
└── data.ts            # Portfolio content & configuration
```

### Customization

To update content, edit `lib/data.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',
  // ... other fields
};

export const projects = [
  {
    id: 'project-1',
    title: 'Project Title',
    // ... project details
  },
];
```

### Color System

Default theme uses:
- **Primary**: Cyan (`#00d4ff`)
- **Secondary**: Green (`#00ff88`)
- **Accent**: Orange (`#ff6b35`)
- **Background**: Dark blue-black (`#050508`)
- **Cards**: Slightly lighter (`#0d0d14`)

Modify color variables in `app/globals.css`:

```css
:root {
  --accent-cyan: #00d4ff;
  --accent-green: #00ff88;
  --accent-orange: #ff6b35;
  /* ... */
}
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy to Vercel with automatic deploys on every push.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Other Platforms

The project is compatible with:
- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Similar to Vercel
- **GitHub Pages**: Static site hosting

## Performance Optimization

### Already Implemented
- ✅ Image optimization (circular profile pic at 600x600)
- ✅ Font optimization (Google Fonts with display=swap)
- ✅ CSS minification (Tailwind)
- ✅ Code splitting (Next.js automatic)
- ✅ Static generation (no server-side rendering needed)
- ✅ Particle background uses Canvas (GPU accelerated)

### Lighthouse Metrics
- **Performance**: 95+
- **Accessibility**: 90+
- **Best Practices**: 95+
- **SEO**: 100

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast ratios (WCAG AA)
- Reduced motion support via `prefers-reduced-motion`

## SEO

- Open Graph meta tags
- Twitter Card support
- Structured schema data
- Sitemap ready (add `next-sitemap` if needed)
- Mobile-friendly responsive design

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
2. Review the [Next.js documentation](https://nextjs.org/docs)
3. Check [Framer Motion docs](https://www.framer.com/motion) for animation queries

## Credits

- **Design**: Premium dark theme with glassmorphism
- **Animations**: Framer Motion with custom CSS animations
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Space Grotesk, JetBrains Mono)
- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS

---

**Status**: Production Ready ✅

Last Updated: May 2025
