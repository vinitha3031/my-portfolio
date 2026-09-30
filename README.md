# Gradient Animated Developer Portfolio Template

A production-ready developer portfolio template built with **React, Vite, Tailwind CSS, Framer Motion, and lucide-react**.

It is designed for developers who want a premium, animated, modern portfolio with clear customization and scalable code structure.

## Project Overview

This template includes:

- Animated gradient hero background and floating glow shapes
- Sticky, blurred navbar with smooth scroll links
- Smooth section reveal animations on scroll
- Vertical experience timeline with animated gradient line
- Interactive skills and projects cards with glow/gradient hover states
- Testimonials, contact form UI, and social links
- Fully responsive layout for mobile, tablet, laptop, and desktop
- Data-first customization via dedicated config files in `src/data`

  ## Live Demo

- https://gredient-animated-portfolio.vercel.app/

## Tech Stack

- React
- Vite
- Tailwind CSS (`@tailwindcss/vite`)
- Framer Motion
- lucide-react icons

## Installation

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Customization Guide

All user-editable portfolio content is stored in:

- `src/data/profile.js`
- `src/data/projects.js`
- `src/data/skills.js`
- `src/data/experience.js`
- `src/data/testimonials.js`

### What to edit in each file

- `profile.js`
  - Name, title, intro, about content, location, availability
  - Contact details (email, social links)
  - Navbar links and hero CTA labels
- `projects.js`
  - Project title, image, description, tech stack, demo/GitHub links
- `skills.js`
  - Skills list and tech stack list
- `experience.js`
  - Timeline entries (company, role, duration, description)
- `testimonials.js`
  - Name, role, image, feedback

## Placeholder Images

Current placeholders use:

- `https://picsum.photos`

You can safely replace these with Unsplash or Pexels URLs.

## Folder Structure

```text
src/
  assets/
  components/
    GradientButton.jsx
    Navbar.jsx
    Reveal.jsx
    SectionHeading.jsx
    iconMap.js
  data/
    experience.js
    profile.js
    projects.js
    skills.js
    testimonials.js
  sections/
    AboutSection.jsx
    ContactSection.jsx
    ExperienceSection.jsx
    FooterSection.jsx
    HeroSection.jsx
    ProjectsSection.jsx
    SkillsSection.jsx
    TechStackSection.jsx
    TestimonialsSection.jsx
  styles/
    animations.css
  App.jsx
  index.css
  main.jsx
```

## Responsive Targets

Template is built and styled for:

- 320px
- 375px
- 768px
- 1024px
- 1440px

## Marketplace Readiness Notes

- Clean and reusable component architecture
- Fully data-driven user content management
- Modern visual style for developer audiences
- Smooth animation defaults with reduced-motion support
