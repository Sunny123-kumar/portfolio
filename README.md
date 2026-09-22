# Sunny Kumar — Portfolio

Personal portfolio for **Sunny Kumar**, Technical Content Writer, Technical Documentation Specialist, and MERN Stack Developer.

Built with a documentation / SaaS aesthetic — emphasizing developer docs, API documentation (OpenAPI/Swagger), and technical writing.

## Tech stack

- React.js
- Vite
- JavaScript
- Tailwind CSS v4
- Lucide React
- Framer Motion

## Getting started

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+

### Install

```bash
cd sunny-kumar-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     # Reusable UI (Navbar, Footer, Button, CodeBlock, …)
  sections/       # Page sections (Hero, About, Experience, …)
  data/           # Central content file (easy to update)
  hooks/          # Theme and scroll helpers
  App.jsx
  main.jsx
  index.css
```

## Updating content

Edit `src/data/content.js` to update profile details, experience, skills, projects, education, and contact links.

LinkedIn is currently a placeholder (`#`) until a real URL is provided.

## Contact form

The contact form is **UI-only**. Wire it to a service (EmailJS, Formspree, Resend, or a backend API) in `src/sections/Contact.jsx` inside `handleSubmit`.

## License

Personal portfolio project for Sunny Kumar.
