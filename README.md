# pjnak-portfolio

-link:
https://pinakdg.github.io/pjnak-portfolio/

A one-page, modular React + Tailwind portfolio with a terminal-typing hero, projects, blog, and contact form.

## Features
- **Terminal-style hero** with typing effect (editable lines in `src/config.js`).
- **Projects** driven by a simple data file (`src/data/projects.js`).
- **Blog** as lightweight notes (`src/data/posts.js`), easy to extend to Markdown later.
- **Contact form** defaults to `mailto:`; can be wired to Formspree/EmailJS.
- **Responsive** and accessible; sticky header, smooth scrolling.

## Quickstart
```bash
# 1) Install deps
npm install

# 2) Start dev server
npm run dev

# 3) Build for production
npm run build
npm run preview   # to test the build locally
```

## Dependencies
- Node.js 18+ recommended
- Vite 5, React 18
- Tailwind CSS 3

If you don't have Node, install from https://nodejs.org (LTS is fine).

## How to edit content
- **GitHub link**: `src/config.js` (GITHUB_URL).
- **Typing lines**: `src/config.js` (HERO_LINES array).
- **Projects**: `src/data/projects.js` — add, remove, reorder objects.
- **Blog posts**: `src/data/posts.js` — add objects like:
```js
{
  title: "Your post title",
  date: "2025-10-01",
  summary: "One-line summary of the post"
}
```
> Later, you can swap this for Markdown by adding a `/posts` folder and a loader.

## Enable contact form submissions (no mail client)
1. **Formspree** (quickest):
   - Create a form at https://formspree.io
   - Get your endpoint URL and set `ACTION_URL` in `src/components/ContactForm.jsx`.
   - Replace the `handleSubmit` to POST to that endpoint.
2. **EmailJS**:
   - Create service/template at https://www.emailjs.com/
   - Install SDK, call it from `handleSubmit`.

## Deploy options
### GitHub Pages
1. Create a repo named `pjnak-portfolio` and push this project.
2. Add the following to `vite.config.js` if deploying to `username.github.io/repo`:
```js
export default defineConfig({ base: '/pjnak-portfolio/', plugins: [react()] })
```
3. Build: `npm run build`. 
4. In GitHub, enable **Pages** with the branch set to `gh-pages` or use an action:
   - Install: `npm i -D gh-pages`
   - Add scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
   - Run: `npm run deploy`

### Netlify
- Drag-and-drop the `dist` folder after `npm run build`, or connect the repo and set build command `npm run build`, publish dir `dist`.

### Vercel
- Import the repo in Vercel; framework: **Vite**; build `npm run build`, output `dist`.

## Structure
```
pjnak-portfolio/
  ├─ index.html
  ├─ vite.config.js
  ├─ postcss.config.js
  ├─ tailwind.config.js
  ├─ package.json
  └─ src/
     ├─ index.css
     ├─ main.jsx
     ├─ App.jsx
     ├─ config.js
     ├─ components/
     │  ├─ TerminalHero.jsx
     │  ├─ Projects.jsx
     │  ├─ ProjectCard.jsx
     │  ├─ BlogSection.jsx
     │  ├─ ContactForm.jsx
     │  └─ Footer.jsx
     └─ data/
        ├─ projects.js
        └─ posts.js
```

## Code style
- `npm run format` uses Prettier.

## Accessibility
- Semantic headings and labels, sufficient contrast, keyboard-friendly.

---
Made for Pinak (github.com/pinakdg). Enjoy! 🎉
