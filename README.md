# Jump Higher

> Transform your inner dialogue in 10 minutes with the audio training professional coaches use on themselves.

**Jump Higher** is a motivational audio training landing page that delivers a free MP3 download in exchange for email signup. The methodology adapts professional horse training techniques to help people become their own "inner rider" - encouraging and bonding with themselves.

## Quick Start

### Local Development

1. **Add your audio file**:
   ```bash
   # Place your MP3 in the assets folder
   cp your-audio.mp3 assets/audio/jump-higher-training.mp3
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

The landing page is ready to integrate with your email service. Choose one:

### Option 1: Mailchimp

1. Create an audience in Mailchimp
2. Generate embedded form code
3. Update `script.js` with your Mailchimp form action URL:
   ```javascript
   const MAILCHIMP_ACTION_URL = 'https://your-domain.us1.list-manage.com/subscribe/post?u=...';
   ```

### Option 2: ConvertKit

1. Create a form in ConvertKit
2. Get your Form ID and API key
3. Update `script.js` with your ConvertKit credentials:
   ```javascript
   const CONVERTKIT_FORM_ID = 'your-form-id';
   const CONVERTKIT_API_KEY = 'your-api-key';
   ```

## Deployment

### Cloudflare Pages (Recommended)

1. Push code to GitHub
2. Connect repo to Cloudflare Pages
3. Deploy settings:
   - Build command: (none)
   - Build output directory: `/`
4. Add custom domain (optional)

### Netlify

1. Drag-and-drop the folder to Netlify, OR
2. Connect GitHub repo
3. Deploy settings:
   - Build command: (none)
   - Publish directory: `/`

### Other Options

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

- **Format**: MP3
- **Bitrate**: 128kbps or 192kbps
- **Length**: 5-15 minutes recommended
- **File Size**: <10MB for fast download
- **Naming**: `jump-higher-training.mp3`

Place in `assets/audio/` directory.

## TODO

- [ ] Add actual audio MP3 file
- [ ] Configure email service (Mailchimp or ConvertKit)
- [ ] Add Google Analytics or Plausible
- [ ] Test email signup flow
- [ ] Add testimonials with photos
- [ ] Add social proof counters
- [ ] Set up custom domain
- [ ] Configure SSL certificate

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
