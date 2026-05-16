<!--- Project README for Book Vibe -->
# Book Vibe

A lightweight web app to browse books, view details, and manage personal read & wishlist collections.

## Technologies

- React
- Vite
- JavaScript (ESNext)
- CSS
- LocalStorage (simple local DB in `src/utils/localDB.js`)

## Key Features

1. Browse a curated collection of books with cover, title, author, and brief info.
2. View detailed information for each book on a dedicated details page.
3. Add books to a persistent "Read" list and a "Wishlist" using local storage.

## Quick Start

1. Install dependencies:

```
npm install
```

2. Run the dev server:

```
npm run dev
```

3. Open the app at `http://localhost:5173` (default Vite port).

---
Created for the Book Vibe project. See the source in the `src/` folder.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
