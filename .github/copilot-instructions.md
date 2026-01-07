# Copilot Instructions for portfolio_website

## Overview
This is a static portfolio website project. It is organized into HTML, CSS, and JavaScript files, with assets for images and avatars. The site is designed for easy customization and modularity.

## Architecture
- **index.html**: Main entry point. Structure and content for the homepage.
- **css/**: Contains all stylesheets. Modularized by feature (e.g., animations, cards, navigation, theme-toggle, and section-specific styles in `sections/`).
- **js/**: Contains scripts for interactivity (e.g., modal handling, splash screen, theme toggling, FAQ logic).
- **assets/**: Stores images and avatars.

## Key Patterns
- **Section-based CSS**: Each major section (about, contact, faq, links, tools, work) has its own CSS file under `css/sections/`.
- **Separation of concerns**: HTML, CSS, and JS are kept in separate files. Avoid inline styles and scripts.
- **Theme toggling**: Implemented in `js/theme.js` and styled in `css/theme-toggle.css`.
- **Modals**: Managed in `js/modal.js` and styled in `css/modal.css`.
- **Splash screen**: Controlled by `js/splash.js` and styled in `css/splash.css`.

## Developer Workflow
- No build step required; edit files directly and refresh in browser.
- For debugging, use browser DevTools (inspect elements, console for JS errors).
- No automated tests or build tools are present.

## Conventions
- Use semantic HTML in `index.html`.
- Keep styles modular; add new section styles in `css/sections/`.
- JS files should only manipulate DOM elements relevant to their feature.
- Use relative paths for assets and imports.

## Integration Points
- No external dependencies or frameworks are used.
- All scripts and styles are loaded via `<script>` and `<link>` tags in `index.html`.

## Examples
- To add a new section, create a CSS file in `css/sections/`, update `index.html`, and add any needed JS in `js/`.
- To update the avatar, replace the image in `assets/avatars/` and update the `<img>` tag in `index.html`.

## Key Files
- `index.html`, `css/sections/`, `js/`, `assets/avatars/`

---
For questions or unclear patterns, review the structure above or ask for clarification.
