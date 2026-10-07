# Kawi App Frontend

> A small front-end project built because a friend wanted a web page — and I wanted to learn JavaScript.

## About

This project started from two simple things:

1. A friend wanted a web page.
2. I wanted to learn JavaScript.

So we combined both: a real, small project to build something useful for a friend, while using it as a hands-on opportunity to learn JavaScript and modern front-end development.

It is **not** intended to be a production application. It's a place to experiment, make mistakes, break things, and improve — which is exactly how you learn.

## What's in it?

The app is a simple multi-page front-end with:

- A home / index page
- An interactive map page (using Leaflet)
- A news page with reusable components
- Client-side routing between pages

## Tech Stack

- **React** – UI library
- **TypeScript** – adds types to JavaScript
- **Vite** – fast dev server and build tool
- **React Router** – client-side routing
- **Leaflet / React Leaflet** – interactive maps
- **ESLint** – code linting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (or yarn / pnpm)

### Installation

```bash
git clone https://github.com/daledem/kawi-app-frontend.git
cd kawi-app-frontend
npm install
```

### Run locally

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
.
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and other assets
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components
│   ├── App.tsx           # Root component and routes
│   ├── main.tsx          # Entry point
│   └── main.css          # Global styles
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

> Adjust the folder names above if your actual project structure differs.

## Notes

- This is a **learning project**, so things may change often.
- Some code may be intentionally simple or written "the long way" to make it easier to understand.
- Feedback and suggestions are welcome, but the main goal is learning.

---

Built for a friend, learned along the way.
