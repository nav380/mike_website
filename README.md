# MIKE Events India - Website Documentation

## Overview

This is a modern, SEO-optimized website for MIKE Events India, a premier MICE (Meetings, Incentives, Conferences, Events) and event management company. The website features a bold Neo-Brutalism design aesthetic with warm earth tones, creating an authentic and memorable user experience.

## Design Philosophy: Neo-Brutalism with Warmth

### Core Principles
- **Bold Structure**: Thick borders, modular blocks, and clear hierarchy
- **Warm Earth Tones**: Deep Forest, Terracotta, Mustard Yellow, and Coral
- **Human Touches**: Hand-drawn accents and organic shapes
- **Energetic Interactions**: Playful animations and tactile feedback
- **Organized Chaos**: Controlled randomness in element placement creates energy without confusion

### Color Palette
- **Deep Forest** `#1A3A2A` - Primary color for trust and grounding
- **Terracotta** `#E07A5F` - Secondary color for warmth and energy
- **Mustard Yellow** `#F4A261` - Accent color for optimism and creativity
- **Coral** `#F28482` - Accent color for celebration and connection
- **Off-White** `#F5F3F0` - Background color for warmth
- **Slate** `#3D405B` - Text color for readability

### Typography
- **Display**: Fraunces (variable serif, bold, slightly quirky) - 800 weight for H1/H2
- **Headings**: Archivo (grotesque sans, strong, geometric) - 700 weight for H3/H4
- **Body**: Public Sans (readable, friendly, open) - 400 regular, 600 semibold
- **Accent**: Caveat (handwritten) for annotations and personal touches

## Key Features

### 1. SEO Optimization
- **Meta Tags**: Comprehensive meta tags for search engines and social media
- **Structured Data**: JSON-LD schemas for Organization, LocalBusiness, Service, and FAQ
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Sitemap & Robots.txt**: XML sitemap and robots.txt for crawler guidance
- **Keywords**: Targeted keywords for event management, MICE services, and related terms

### 2. Responsive Design
- **Mobile-First**: Optimized for mobile devices with touch-friendly interactions
- **Breakpoints**: 320px (mobile), 768px (tablet), 1024px (desktop), 1440px+ (large desktop)
- **Mobile Menu**: Full-screen overlay navigation for mobile devices
- **Touch Targets**: Minimum 44x44px for all interactive elements

### 3. Interactive Components
- **Animated Statistics**: Counter animations when scrolled into view
- **Service Cards**: 3D hover effects with shadow elevation
- **Testimonials Carousel**: Auto-rotating client testimonials
- **FAQ Accordion**: Expandable/collapsible frequently asked questions
- **Contact Form**: Comprehensive form with validation
- **Scroll to Top**: Appears after scrolling down for easy navigation

### 4. Performance Optimization
- **Lazy Loading**: Images load as they enter viewport
- **Optimized Images**: WebP format with compression
- **Code Splitting**: Efficient bundle sizes
- **Minimal Dependencies**: Only essential libraries included

### 5. Accessibility
- **WCAG Compliance**: Designed for AA compliance (targeting AAA)
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Color Contrast**: Minimum 7:1 ratio for text

## Website Structure

### Homepage Sections
1. **Hero Section**: Full-screen hero with value proposition and CTAs
2. **Stats Bar**: Animated statistics (5+ years, 500+ events, 200+ clients)
3. **About Section**: Company overview and mission
4. **Services Showcase**: 6 core services in card grid
5. **Why Choose Us**: 4 key differentiators
6. **Testimonials**: Client testimonials carousel
7. **FAQ**: 8 frequently asked questions
8. **Contact Section**: Multi-channel contact form and information
9. **CTA Section**: Call-to-action for consultation
10. **Footer**: Links, services, and contact information

### Services Offered
1. Association Management
2. Conference Management
3. Meeting Management
4. Exhibition Management
5. Incentive Travel Management
6. Consulting Services

## Technology Stack

- **Framework**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: Wouter
- **Icons**: Lucide React
- **Build Tool**: Vite
- **TypeScript**: Full type safety
- **Package Manager**: pnpm

## Development

### Prerequisites
- Node.js 22.13.0
- pnpm 10.4.1+

### Commands
```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Type checking
pnpm check

# Format code
pnpm format

# Preview production build
pnpm preview
```

### Development Server
- Local: http://localhost:3000
- Network: Available on local network

## SEO Implementation

### Meta Tags
- Title: "MIKE Events India | Premier MICE & Conference Management Company"
- Description: Comprehensive description with keywords
- Open Graph tags for social media sharing
- Twitter Card tags for Twitter sharing

### Structured Data (JSON-LD)
1. **Organization Schema**: Company information, contact details, social media
2. **LocalBusiness Schema**: Business hours, location, ratings
3. **Service Schema**: Service catalog with offerings
4. **FAQ Schema**: Frequently asked questions for featured snippets

### Keywords Targeted
- Event management company India
- MICE services
- Conference management
- Exhibition management
- Corporate event planners
- Association management
- Incentive travel India

## Contact Information

- **Phone**: +91 98765 43210
- **Email**: info@mikevents.in
- **WhatsApp**: Available for instant messaging
- **Location**: New Delhi, India

## Brand Assets

### Taglines
- Primary: "Together We Make Magic"
- Secondary: "Think Big Dream Big"
- Promise: "We do magic to create connect"

### Visual Assets
- Hero Conference Image: Professional networking scene
- Exhibition Hall Image: Trade show environment
- Team Collaboration Image: Planning and design process
- Incentive Travel Image: Luxury destination experience
- Abstract Pattern: Geometric connection motif

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Targets

- Lighthouse Score: 90+ (all categories)
- Largest Contentful Paint: < 2.5s
- First Input Delay: < 100ms
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.8s

## Future Enhancements

1. **Blog Section**: Event planning guides and industry insights
2. **Portfolio Gallery**: Detailed case studies with images
3. **Service Detail Pages**: Dedicated pages for each service
4. **Client Portal**: Login area for existing clients
5. **Event Cost Calculator**: Interactive tool for cost estimation
6. **Multi-language Support**: Hindi and other regional languages
7. **Video Testimonials**: Client feedback in video format
8. **Live Chat**: Real-time customer support

## Deployment

The website is ready for deployment on any static hosting platform:
- Manus (built-in hosting with custom domain support)
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

### Deployment Steps
1. Create a checkpoint using the Management UI
2. Click the "Publish" button in the header
3. Configure custom domain if needed
4. Website will be live at your chosen domain

## Maintenance

### Regular Updates
- Update content regularly for SEO freshness
- Add new testimonials as they come in
- Update statistics (events, clients) quarterly
- Add blog posts (2 per month recommended)
- Monitor analytics and adjust strategy

### SEO Monitoring
- Track keyword rankings monthly
- Monitor Google Search Console for issues
- Update meta descriptions based on performance
- Add new FAQ entries based on common questions

## Support

For technical support or questions about the website:
- Review this documentation
- Check the Management UI for settings and configuration
- Contact Manus support at https://help.manus.im

## License

Copyright © 2026 MIKE Events India. All rights reserved.

---

**Built with ❤️ using Manus - World-class web development platform**
# mike_website
