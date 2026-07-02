# Nikhil Sharma — Portfolio

A personal portfolio website for Nikhil Sharma, an aspiring Java Full Stack Developer. Built as a single-page, responsive site with an animated hero section, typed-role effect, and a working contact form.

**Live site:** https://nikhil-portfolio.vercel.app

## Features

- Animated particle/grain canvas background in the hero section
- Typed-role text animation ("Java", "JavaScript", etc. cycling in the headline)
- Responsive design with breakpoints for tablet and mobile
- Sections: About, Skills, Projects, Experience, Contact
- Downloadable resume (PDF)
- Contact form powered by [formsubmit.co](https://formsubmit.co) — submissions are emailed directly, no backend required
- Respects `prefers-reduced-motion` for accessibility

## Tech Stack

- HTML5
- CSS3 (custom properties, responsive grid/flexbox layouts)
- Vanilla JavaScript (canvas animation, typed text effect, form handling)
- Deployed on [Vercel](https://vercel.com) with auto-deploy from GitHub

## Project Structure

Nikhil-Portfolio/
├── index.html          # Main page
├── css/
│   └── styles.css      # All styling
├── js/
│   └── script.js       # Animations, typed effect, form logic
├── assets/
│   ├── Nikhil_Resume.pdf
│   └── nikhil-profile.png
└── README.md

## Running Locally

Since this is a static site, no build tools are required. Either:

1. Open `index.html` directly in a browser, or
2. Use the included local preview script:
```bash
   node local-preview.cjs
```

## Deployment

This project auto-deploys to Vercel on every push to the `main` branch. To deploy your own copy:

1. Fork or clone this repo
2. Import it into [Vercel](https://vercel.com) as a new project
3. Framework preset: **Other** (static site, no build command needed)
4. Deploy

## Contact

- Email: nikhilsharma3492@gmail.com
- LinkedIn: [linkedin.com/in/nikhil-sharma4](https://linkedin.com/in/nikhil-sharma4)
- GitHub: [github.com/nikhilsharma004](https://github.com/nikhilsharma004)

