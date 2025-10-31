# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

**Jump Higher** is a motivational audio training landing page that delivers a free MP3 download in exchange for email signup. The methodology is adapted from professional horse training techniques - using the concept of an "inner rider" to encourage and bond with oneself.

**Current Status**: MVP implementation - single landing page with email capture

## Target Use Case

This landing page is designed for:
- People seeking practical, short-burst motivational content
- Users who respond to personal development/coaching approaches
- Mobile and desktop visitors who want instant access to transformational audio

## Core Architecture

### Technology Stack
- **Frontend**: Pure HTML/CSS/JavaScript (no framework) ✅
- **Email Service**: Mailchimp or ConvertKit embedded form (to be configured)
- **Hosting**: Cloudflare Pages or Netlify (planned)
- **Audio Delivery**: Self-hosted MP3 via thank-you page
- **Future**: Stripe integration for paid premium content

### User Flow
```
Landing Page (index.html)
  ↓ User enters email
Email Service Captures → Redirect
  ↓
Thank You Page (thank-you.html)
  → Audio player with download link
```

## Key Features (MVP)

### Phase 1: MVP ✅
- Single-page landing with email capture form
- Tony Robbins-inspired design (navy/gold palette)
- Email validation and submission
- Thank-you page with audio player
- Mobile-responsive layout
- Social proof section (testimonials)

### Phase 2: Conversion Optimization (Future)
- A/B testing different headlines/CTAs
- Analytics integration (Google Analytics, Plausible)
- Countdown timers for scarcity
- Exit-intent popups
- Email sequence automation

### Phase 3: Monetization (Future)
- Stripe payment integration
- Premium audio series
- Subscription tier
- Affiliate tracking

## File Structure

```
jump-higher/
├── index.html              # Main landing page with email form ✅
├── thank-you.html          # Post-signup download page ✅
├── styles.css              # Tony Robbins-inspired styling ✅
├── script.js               # Form validation and interaction ✅
├── assets/
│   ├── audio/             # MP3 files (git-ignored)
│   └── images/            # Logo, hero, testimonials
├── CLAUDE.md              # This file ✅
├── README.md              # Setup and deployment guide ✅
└── .gitignore             # Excludes audio files, .env ✅
```

## Design System

### Color Palette (Tony Robbins Aesthetic)
```css
--primary-dark: #1a1a2e;     /* Navy - authority, trust */
--primary-accent: #e6b800;   /* Gold - CTAs, highlights */
--neutral-light: #f8f9fa;    /* Off-white backgrounds */
--neutral-white: #ffffff;    /* Pure white sections */
--text-primary: #1a1a2e;     /* Dark navy text */
--text-secondary: #666666;   /* Gray secondary text */
--accent-success: #27ae60;   /* Green for positive messages */
```

### Typography
- **Headings**: Serif fonts (Georgia, PT Serif) - authority, trust
- **Body**: Sans-serif (Helvetica, Arial, system fonts) - clarity
- **CTA Buttons**: Bold, uppercase, 16-18px
- **Headlines**: Large (48-60px), bold, all-caps for impact

### Layout Principles
- **Above the Fold**: Headline + subheading + email form + primary CTA
- **Sections**: Alternating navy/white backgrounds
- **Spacing**: Generous padding (80-120px vertical sections)
- **Contrast**: High contrast for readability (navy text on white, white text on navy)
- **Mobile-First**: Responsive breakpoints at 768px, 1024px

## Development Commands

```bash
# Local development (simple HTTP server)
python3 -m http.server 8000
# OR
npx serve

# View at http://localhost:8000
```

## Email Integration

### Mailchimp Setup (Example)
1. Create audience in Mailchimp
2. Generate embedded form code
3. Replace form action URL in index.html
4. Test signup flow
5. Configure thank-you redirect

### ConvertKit Setup (Alternative)
1. Create form in ConvertKit
2. Copy form embed code
3. Customize styling to match design
4. Set up redirect to thank-you.html

## Deployment

### Cloudflare Pages
```bash
# Connect GitHub repo to Cloudflare Pages
# Build settings:
Build command: (none - static site)
Build output directory: /
```

### Netlify
```bash
# Drag-and-drop deployment or GitHub integration
# Build settings:
Build command: (none)
Publish directory: /
```

## Content Guidelines

### Headline Formula
- **Primary**: "JUMP HIGHER" (brand name, all caps, bold)
- **Secondary**: Benefit-driven statement (e.g., "Transform Your Inner Dialogue in 10 Minutes")
- **Supporting**: Clarifying subtext (e.g., "The Audio Training Professional Coaches Use on Themselves")

### CTA Button Text
- Action-oriented: "Get Your Free Audio Training" (not "Submit")
- Benefit-focused: "Start Your Transformation" (not "Download")
- Urgency: "Access Now" (not "Learn More")

### Testimonial Structure
- **Quote**: 1-2 sentences, emotional impact
- **Name + Title**: Credibility boost
- **Photo**: Humanizes social proof
- **Result**: Specific transformation (e.g., "Doubled my confidence in 2 weeks")

## Key Technical Decisions

**No Framework**: Simple HTML/CSS/JS keeps it fast, portable, easy to deploy
**Static Site**: No backend needed for MVP, reduces complexity
**Email Service**: External service handles GDPR, deliverability, automation
**Self-Hosted Audio**: Full control, no third-party dependencies
**Mobile-First CSS**: Most traffic is mobile, optimize for small screens first

## Current Implementation Status

### What Works Now
1. ✅ Landing page structure with email form
2. ✅ Tony Robbins-inspired visual design
3. ✅ Form validation JavaScript
4. ✅ Thank-you page with audio player
5. ✅ Mobile-responsive layout
6. ✅ Git repository initialized

### Known Limitations
- Email service not yet integrated (placeholder form action)
- No audio file included (user must upload MP3 to assets/audio/)
- No analytics tracking
- No A/B testing
- No email automation sequences

## Next Steps (Priority Order)

### Immediate (Launch MVP)
1. **Add Audio File**: Place MP3 in `assets/audio/jump-higher-training.mp3`
2. **Configure Email Service**: Set up Mailchimp or ConvertKit form
3. **Test Email Flow**: Submit test email, verify redirect works
4. **Add Analytics**: Google Analytics or Plausible tracking code
5. **Deploy**: Push to Cloudflare Pages or Netlify
6. **Custom Domain**: Point domain to deployment (if applicable)

### Phase 2 (Optimize Conversion)
1. **A/B Test Headlines**: Try 3 variations, measure signups
2. **Add Countdown Timer**: Create urgency ("Offer expires in 24 hours")
3. **Video Testimonials**: Add video social proof
4. **Exit Intent Popup**: Capture abandoning visitors
5. **Heat Mapping**: Install Hotjar to see user behavior

### Phase 3 (Monetize)
1. **Stripe Integration**: Add payment for premium version
2. **Email Drip Campaign**: Nurture leads with ConvertKit automation
3. **Upsell Page**: Offer paid coaching after free audio
4. **Affiliate Program**: Track referrals, offer commissions
5. **Multi-Audio Series**: Create subscription tier

## Development Notes

### Audio File Specifications
- **Format**: MP3 (maximum compatibility)
- **Bitrate**: 128kbps or 192kbps (balance quality/size)
- **Length**: 5-15 minutes recommended (short-burst motivation)
- **File Size**: <10MB for fast download
- **Naming**: `jump-higher-training.mp3`

### Email Capture Best Practices
- **Required Fields**: Email only (name optional - less friction)
- **Privacy**: "We'll never spam you" text below form
- **GDPR**: Add checkbox for EU compliance if targeting Europe
- **Double Opt-In**: Consider requiring email confirmation

### SEO Considerations
- **Title Tag**: "Jump Higher - Free Motivational Audio Training"
- **Meta Description**: Benefit-driven, under 160 characters
- **Open Graph Tags**: For social media sharing
- **Structured Data**: JSON-LD for rich snippets

## Reference Materials

- **Design Inspiration**: https://www.tonyrobbins.com (authority-driven landing pages)
- **Conversion Copywriting**: "Pre-Suasion" by Robert Cialdini
- **Landing Page Best Practices**: Unbounce, Instapage case studies

## Methodology: Inner Rider Concept

The "Jump Higher" audio training is based on professional horse training techniques:
- **Horse Training Parallel**: Riders bond with and encourage their horses through voice and presence
- **Human Application**: Users learn to become their own "inner rider" - encouraging and bonding with themselves
- **Practical Use**: Short motivational bursts (5-10 minutes) before challenging tasks
- **Target Outcome**: Increased self-confidence, reduced self-doubt, improved performance

This unique angle differentiates Jump Higher from generic motivational content.
