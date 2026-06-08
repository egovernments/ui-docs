# DIGIT Design System — UI Docs

This repository hosts the source for the **DIGIT Design System documentation site** — a reference for designers and developers building on the [DIGIT](https://digit.org) platform by [eGov Foundation](https://egov.org.in).

The site covers the full design language: foundations (colour, typography, spacing, iconography), reusable UI components (atoms, molecules, organisms), and interaction patterns — all built for accessibility, responsiveness, and consistency across government digital services.

## Live Site

The documentation is published via GitHub Pages on every push to `master`:

> **https://egovernments.github.io/ui-docs/**

---

## DIGIT UI Ecosystem

| Resource | Description | Link |
|---|---|---|
| **Design System Docs** (this repo) | Component specs, foundations, and design patterns | [egovernments.github.io/ui-docs](https://egovernments.github.io/ui-docs/) |
| **Storybook** | Live interactive preview of every DIGIT UI component | [egovernments.github.io/DIGIT-UI-LIBRARIES](https://egovernments.github.io/DIGIT-UI-LIBRARIES/) |
| **DIGIT UI Developer Docs** | Full platform documentation, guides, and API reference | [docs.digit.org/digit-ui](https://docs.digit.org/digit-ui/) |
| **digit-ui-components** (npm) | React component library — install and use DIGIT components in your app | [@egovernments/digit-ui-components](https://www.npmjs.com/package/@egovernments/digit-ui-components) |
| **digit-module-generator** (npm) | CLI scaffolding tool to bootstrap new DIGIT modules | [@egovernments/digit-module-generator](https://www.npmjs.com/package/@egovernments/digit-module-generator) |

---

## Using DIGIT UI in Your Project

### Install the component library

```bash
npm install @egovernments/digit-ui-components
```

Import and use components in your React application:

```jsx
import { Button, TextInput } from '@egovernments/digit-ui-components';
```

### Scaffold a new module

```bash
npx @egovernments/digit-module-generator
```

This CLI walks you through generating a new DIGIT module with the correct folder structure, routing, and configuration.

---

## What's in This Repo

```
ui-docs/
├── index.html                        # Homepage
├── docs/
│   ├── getting-started/              # Designer & developer onboarding
│   ├── foundation/                   # Colour, typography, spacing, radius, icons
│   ├── components/                   # Atoms, molecules, and component pages
│   └── patterns/                     # Form, inbox, and summary patterns
├── assets/
│   ├── css/styles.css                # Global styles
│   ├── js/                           # Sidebar, search, theme, navigation
│   ├── previews/                     # Component preview images
│   └── images/                       # Page illustrations and diagrams
├── .github/workflows/pages.yml       # GitHub Actions — deploys to GitHub Pages on push to master
└── CODEOWNERS                        # Code ownership configuration
```

---

## Local Development

This is a static HTML site — no build step required.

1. Clone the repo:

```bash
git clone https://github.com/egovernments/ui-docs.git
cd ui-docs
```

2. Serve locally with any static file server, for example:

```bash
npx serve .
# or
python3 -m http.server 8080
```

3. Open `http://localhost:8080` in your browser.

---

## Deployment

The site deploys automatically via the GitHub Actions workflow at `.github/workflows/pages.yml` on every push to `master`. No manual deployment is needed.

---

## Contributing

Please read the [Content Standard](docs/getting-started/content-standard.html) before contributing new pages. For code ownership, see [CODEOWNERS](CODEOWNERS).

---

## License

All content on this site by eGov Foundation is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).
