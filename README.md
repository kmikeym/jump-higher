# Jump Higher

> Transform your inner dialogue in just 2 minutes a day with the audio training professional coaches use on themselves.

**Live Site**: https://jumphigher.horse

**Jump Higher** is a motivational audio training landing page that delivers a free MP3 download in exchange for email signup. The methodology adapts professional horse training techniques to help people become their own "inner rider" - encouraging and bonding with themselves.

## Quick Start

### Local Development

1. **Audio file is included**:
   ```bash
   # The MP3 file is already included in the repository
   # File: assets/audio/jump-higher-training.mp3 (255KB, ~2 minutes)
   # No additional setup needed
   ```

2. **Start a local server**:
   ```bash
   # Using Python 3
   python3 -m http.server 8000

   # OR using Node.js npx
   npx serve

   # OR using PHP
   php -S localhost:8000
   ```

3. **Open in browser**:
   ```
   http://localhost:8000
   ```

## Project Structure

```
jump-higher/
├── index.html              # Main landing page with email capture
├── thank-you.html          # Post-signup download page with audio player
├── styles.css              # Tony Robbins-inspired styling (navy/gold)
├── script.js               # Form validation and interaction
├── assets/
│   ├── audio/             # MP3 files (git-ignored, add your own)
│   └── images/            # Logo, hero images, testimonials
├── CLAUDE.md              # Developer documentation
├── README.md              # This file
└── .gitignore            # Excludes audio files, .env, etc.
```

## Features

- **Email Capture**: Simple form with validation
- **Tony Robbins Design**: Authority-driven landing page (navy #1a1a2e, gold #e6b800)
- **Audio Player**: HTML5 audio with download option
- **Mobile Responsive**: Works on all devices
- **No Dependencies**: Pure HTML/CSS/JavaScript
- **Fast Loading**: Static site, optimized for performance

## Email Service Integration

### Current Configuration (Live Site)

The site is currently integrated with ConvertKit:
- **Service**: ConvertKit
- **Form UID**: 98bfe26c53
- **Endpoint**: https://app.convertkit.com/forms/98bfe26c53/subscriptions
- **Status**: Live and working at https://jumphigher.horse

To modify the integration, edit `script.js` and update the `CONVERTKIT_FORM_UID` constant.

### Alternative Email Services (For Future Changes)

#### Option 1: Mailchimp

1. Create an audience in Mailchimp
2. Generate embedded form code
3. Update `script.js` with your Mailchimp form action URL:
   ```javascript
   const MAILCHIMP_ACTION_URL = 'https://your-domain.us1.list-manage.com/subscribe/post?u=...';
   ```

#### Option 2: ConvertKit (Alternative Form)

1. Create a different form in ConvertKit
2. Get the new Form UID from embed code
3. Update `script.js` with your new ConvertKit Form UID:
   ```javascript
   const CONVERTKIT_FORM_UID = 'your-form-uid';
   ```

## Deployment

### Current Deployment

**Live Site**: https://jumphigher.horse
- **Platform**: Cloudflare Pages
- **Repository**: https://github.com/kmikeym/jump-higher
- **Branch**: `main`
- **Auto-Deploy**: Enabled (pushes to main trigger redeployment)
- **Email**: ConvertKit (Form UID: 98bfe26c53)
- **Audio**: Self-hosted MP3 (jump-higher-training.mp3, 255KB)
- **SSL**: Automatic via Cloudflare
- **DNS**: Managed via Cloudflare nameservers (domain: jumphigher.horse)

### Alternative Deployment Options

#### Cloudflare Pages

1. Push code to GitHub
2. Connect repo to Cloudflare Pages
3. Deploy settings:
   - Build command: (none)
   - Build output directory: `/`
4. Add custom domain (optional)

#### Netlify

1. Drag-and-drop the folder to Netlify, OR
2. Connect GitHub repo
3. Deploy settings:
   - Build command: (none)
   - Publish directory: `/`

#### Other Options

- **Vercel**: Import from GitHub
- **GitHub Pages**: Enable in repo settings
- **Any static host**: Upload files via FTP/SFTP

## Customization

### Change Colors

Edit `styles.css` color variables:

```css
:root {
  --primary-dark: #1a1a2e;     /* Navy background */
  --primary-accent: #e6b800;   /* Gold CTAs */
  --neutral-light: #f8f9fa;    /* Light sections */
  --neutral-white: #ffffff;    /* White sections */
}
```

### Change Copy

Edit `index.html`:
- Hero headline: `<h1 class="hero-title">`
- Subtitle: `<p class="hero-subtitle">`
- Section content: `<p class="section-text">`

### Add Analytics

Add tracking code before `</head>` in `index.html` and `thank-you.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Audio File Requirements

### Current Audio File

- **File**: jump-higher-training.mp3 (included in repository)
- **Size**: 255KB
- **Duration**: ~2 minutes
- **Format**: MP3, 128kbps
- **Location**: assets/audio/

### For Future Audio Updates

- **Format**: MP3
- **Bitrate**: 128kbps or 192kbps
- **Length**: 2-15 minutes
- **File Size**: <10MB for fast download

## Usage Examples

The Jump Higher audio training is designed for daily use:

1. **Morning Routine**: Listen before starting work to set a positive tone
2. **Pre-Challenge**: Play before difficult tasks, presentations, or meetings
3. **Mindset Reset**: Use during breaks to reset your inner dialogue
4. **Evening Reflection**: Practice encouraging self-talk before bed

**Duration**: 2 minutes per session
**Frequency**: Daily practice recommended for best results

## TODO

- [x] Add actual audio MP3 file - COMPLETED
- [x] Configure email service (ConvertKit) - COMPLETED
- [x] Deploy to production (https://jumphigher.horse) - COMPLETED
- [x] Set up custom domain - COMPLETED
- [x] Configure SSL certificate - COMPLETED (automatic)
- [ ] Add Google Analytics or Plausible
- [ ] Test email signup flow end-to-end
- [ ] Add testimonials with photos
- [ ] Add social proof counters
- [ ] Set up email automation sequences

## Future Enhancements

- A/B testing different headlines
- Countdown timer for scarcity
- Exit-intent popup
- Video testimonials
- Stripe integration for paid version
- Email drip campaign automation

## Support

Questions? Email: support@jumphigher.com

## License

Copyright © 2025 Jump Higher. All rights reserved.
