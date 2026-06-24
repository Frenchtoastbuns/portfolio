# Aaron B. George Portfolio

A clean, responsive one-page engineering portfolio built with React, Vite, and Tailwind CSS.

## File Structure

```text
.
|-- index.html
|-- package-lock.json
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.js
|-- README.md
|-- public
|   |-- Aaron_B_George_CV.pdf
|   |-- circuit-board-background.png
|   |-- documents
|   |   |-- Deployment_State_Verification.pdf
|   |   `-- Execution_Aware_TinyML_Benchmarking_for_Next_Gen_AI_Native_Edge_Networks.pdf
|   `-- README.md
`-- src
    |-- App.jsx
    |-- index.css
    |-- main.jsx
    |-- components
    |   |-- Contact.jsx
    |   |-- CvModal.jsx
    |   |-- Experience.jsx
    |   |-- Footer.jsx
    |   |-- Hero.jsx
    |   |-- Modules.jsx
    |   |-- Navbar.jsx
    |   |-- OutsideLab.jsx
    |   |-- ProjectCard.jsx
    |   |-- ProjectModal.jsx
    |   |-- Projects.jsx
    |   |-- Publications.jsx
    |   |-- SectionHeading.jsx
    |   `-- Skills.jsx
    `-- data
        `-- portfolio.js
```

## Setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, typically `http://localhost:5173/`.

## Production Build

```bash
npm run build
npm run preview
```

## Editing Content

Most portfolio content lives in `src/data/portfolio.js`, including project descriptions, tags, publication entries, education, modules, hobbies, contact details, project modal details, and social links. Replace the placeholder CV at `public/Aaron_B_George_CV.pdf` when ready.
