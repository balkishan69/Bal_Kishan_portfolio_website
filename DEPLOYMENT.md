# Bal Kishan Portfolio - Deployment Guide

## Quick Deploy to Vercel

The portfolio is production-ready and optimized for deployment.

### Prerequisites
- Node.js 18+ installed
- Vercel account (https://vercel.com)

### One-Click Deployment

Simply connect your GitHub repository to Vercel and it will auto-deploy on every push.

### Manual Deployment

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Confirm project settings
   - Select production deployment

### Environment Variables

No environment variables are required. This is a fully static site.

### Build Command
```bash
npm run build
```

### Output Directory
```
.next
```

## Performance Metrics

- **First Load JS**: 141 kB
- **Route Size**: 62 kB
- **Build Time**: < 30 seconds
- **Lighthouse Score**: 95+ (expected)

## Features

✅ Fully responsive design (mobile, tablet, desktop)
✅ Dark mode (default)
✅ Particle background animations
✅ 3D/2D hover effects
✅ Smooth scroll animations
✅ SEO optimized with Open Graph tags
✅ Production-grade Next.js setup
✅ Zero external dependencies for core functionality

## DNS Setup

After deployment, you can add a custom domain:

1. Go to Vercel Project Settings
2. Navigate to "Domains"
3. Add your domain (e.g., balkishan.dev)
4. Update DNS records as shown by Vercel

Suggested domain names:
- `balkishan.dev`
- `balkishan-portfolio.dev`
- `bal-kishan.dev`

## Troubleshooting

### Build Fails
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Performance Issues
- Check Lighthouse in Vercel Analytics
- Optimize images (already done for profile.png)
- Check for external API delays

## Monitoring

Vercel provides built-in analytics:
- View deployments history
- Monitor performance metrics
- Track user analytics
- Check error logs

## Updates & Maintenance

To update content:
1. Edit files in the `lib/data.ts` (for portfolio content)
2. Commit changes to GitHub
3. Vercel auto-deploys on push

## Support

For Vercel-specific issues:
- https://vercel.com/docs
- https://vercel.com/support
