import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import starlight from '@astrojs/starlight';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';
import { starlightConfig } from './src/config/starlight';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  site: 'https://openclawwiki.org',
  trailingSlash: 'always',
  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    starlight({
      ...starlightConfig,
      customCss: [
        './src/styles/starlight-custom.css',
      ],
      components: {
        // SiteTitle and Head components
        SiteTitle: './src/components/starlight/SiteTitle.astro',
        Head: './src/components/starlight/Head.astro',
      },
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  redirects: {
    // 品牌更名重定向 - 三品牌全覆盖
    '/clawdbot': '/clawdbot-vs-moltbot-vs-openclaw/',
    '/moltbot': '/moltbot-to-openclaw/',
    '/docs/clawdbot-vs-moltbot': '/clawdbot-vs-moltbot-vs-openclaw/',
    '/docs/moltbot-to-openclaw': '/moltbot-to-openclaw/',
    // 安装快捷入口
    '/install': '/docs/install/mac-mini/',
    '/mac-mini': '/docs/install/mac-mini/',
    '/docker': '/docs/install/docker/',
    // 常见搜索词重定向
    '/what-is-openclaw': '/what-is-openclaw/',
    '/what-is-moltbot': '/moltbot-to-openclaw/',
    '/openclaw-vs-moltbot': '/moltbot-to-openclaw/',
    '/moltbot-vs-clawdbot': '/clawdbot-vs-moltbot-vs-openclaw/',
    // 迁移快捷入口
    '/migrate': '/docs/migration/from-moltbot/',
    '/migration': '/docs/migration/from-moltbot/',
  },

  image: {
    domains: ['cdn.pixabay.com'],
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
  
  build: {
    format: 'directory',
  },
});
