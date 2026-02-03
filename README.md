# OpenClaw Wiki

UNOfficial documentation and website for **OpenClaw** (formerly Moltbot/Clawdbot), the ultimate self-hosted AI assistant.

Built with [Astro](https://astro.build), [Starlight](https://starlight.astro.build), and [Tailwind CSS](https://tailwindcss.com). Based on the [AstroWind](https://github.com/onwidget/astrowind) template.

## 🌟 Features

*   **Comprehensive Documentation**: Powered by Starlight, covering installation, configuration, providers, security, and more.
*   **Multi-language Support**: Fully localized for English (`en`) and Chinese (`zh-CN`).
*   **Modern Tech Stack**: Fast, accessible, and SEO-friendly static site generation.
*   **Responsive Design**: Optimized for all devices, from desktop to mobile.

## � Getting Started

### Prerequisites

*   Node.js 18.17.1+ or 20.3.0+
*   npm (or yarn/pnpm/bun)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/openclaw/openclawwiki.org.git
    cd openclawwiki.org
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:4321](http://localhost:4321) in your browser.

## 🛠️ Project Structure

```text
/
├── public/             # Static assets
├── src/
│   ├── assets/         # Bundled assets (images, styles)
│   ├── components/     # UI components
│   ├── config/         # Site configuration (Starlight, etc.)
│   ├── content/
│   │   ├── docs/       # Documentation files (Starlight)
│   │   │   ├── zh/     # Chinese translations
│   │   │   └── ...     # English docs (root)
│   │   ├── blog/       # Blog posts
│   │   └── config.ts   # Content collections config
│   ├── layouts/        # Page layouts
│   ├── pages/          # Astro pages (Landing, etc.)
│   └── ...
├── astro.config.ts     # Astro configuration
├── package.json        # Dependencies and scripts
└── tailwind.config.cjs # Tailwind configuration
```

## 📝 Documentation

Documentation is located in `src/content/docs/`.
*   **English (Default)**: `src/content/docs/`
*   **Chinese**: `src/content/docs/zh/`

To add a new page:
1.  Create a `.md` or `.mdx` file in the appropriate directory.
2.  Add the necessary Frontmatter (title, description, etc.).
3.  (Optional) Update the sidebar configuration in `src/config/starlight.ts` if it's not auto-generated.

## ✍️ Blog

Blog posts are located in `src/content/blog/`.
To create a new post, add a `.md` file with the required Frontmatter:

```yaml
---
title: 'Post Title'
publishDate: 2026-02-03
excerpt: 'Brief summary...'
image: ~/assets/images/cover.png
category: 'Category'
tags: [tag1, tag2]
author: 'Author Name'
---
```

## 📄 License

This project is licensed under the MIT License.
