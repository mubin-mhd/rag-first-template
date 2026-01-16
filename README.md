# RAG UI Starter Kit

> A commercial, API-agnostic, production-ready UI template for Retrieval-Augmented Generation (RAG) applications.

---

## What is this product?

RAG UI Starter Kit is a frontend-only, highly configurable, and scalable template for building modern RAG-based chat and document applications. It is designed for commercial use, resale, and rapid productization.

## Who is it for?

- SaaS builders and startups
- Enterprises integrating RAG into their workflows
- Agencies and consultancies delivering AI chat/document solutions
- Developers seeking a clean, maintainable, and license-ready RAG UI foundation

## Features

- Next.js (App Router) + TypeScript + Tailwind CSS
- Clean, folder-based feature architecture
- API-agnostic: works with any backend via contract
- Config-driven: all UI, features, and branding via config files
- i18n: full multi-language support (JSON-based, domain-structured)
- Feature flags for modular deployment
- Light/dark theme system (CSS variables, config-driven)
- Chat, document upload, citation, and widget/embed support
- Streaming-ready chat (SSE/chunked fetch)
- No hardcoded text, labels, or branding in UI
- License-ready: supports white-label and branding removal

## API Contract Overview

All backend integration is via a generic, strongly-typed contract:

- **POST /chat**: Streaming chat, supports partial tokens, citations
- **POST /documents/upload**: Multi-file document upload
- **GET /documents**: List uploaded documents

See `types/rag.api.contract.ts` for full details.

## Setup Instructions

1. **Install dependencies:**

```sh
npm install
# or
yarn install
```

2. **Run the development server:**

```sh
npm run dev
# or
yarn dev
```

3. **Build for production:**

```sh
npm run build && npm start
```

## Configuration Guide

- All configuration is in the `config/` folder:
  - `app.config.ts`: App name, logo, primary color, footer, locale
  - `api.config.ts`: API endpoints, timeouts
  - `features.config.ts`: Feature flags (enable/disable modules)
  - `ui.config.ts`: Theme, color, UI settings
  - `theme.config.ts`: Light/dark color variables
  - `widgets/widget.config.ts`: Widget/embed/floating mode
- All UI text and labels are in `i18n/` (JSON, domain-structured)
- No hardcoded values in components—everything is config-driven

## License Notes

- This template is commercial and license-ready
- Supports white-labeling and branding removal (see config)
- All third-party dependencies are open source

---

For support, custom licensing, or enterprise features, contact the template author.
