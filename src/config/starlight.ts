import type { StarlightUserConfig } from '@astrojs/starlight/types';

export const starlightConfig: StarlightUserConfig = {
  title: 'Openclaw Wiki Docs',
  logo: {
    src: './public/images/openclaw-logo.svg',
    replacesTitle: true,
  },
  editLink: {
    baseUrl: 'https://github.com/openclaw/openclaw/edit/main/docs/', // Updated to match user context or keep placeholder
  },
  sidebar: [
    {
      label: 'Quick Start',
      items: [
        { label: 'What is Openclaw?', link: '/docs/getting-started/what-is-openclaw/' },
        { label: 'Quick Start Guide', link: '/docs/getting-started/quick-start/' },
        { label: 'Brand History', link: '/clawdbot-vs-moltbot-vs-openclaw/' },
      ],
    },
    {
      label: 'Rebrand & Migration',
      collapsed: false,
      items: [
        { label: 'Moltbot → Openclaw', link: '/moltbot-to-openclaw/', badge: 'New' },
        { label: 'Migrate from Moltbot', link: '/docs/migration/from-moltbot/' },
        { label: 'Migrate from Clawdbot', link: '/docs/migration/from-clawdbot/' },
        { label: 'Migration FAQ', link: '/docs/migration/faq/' },
      ],
    },
    {
      label: 'Installation',
      collapsed: false,
      items: [
        { label: 'Mac Mini M4', link: '/docs/install/mac-mini/', badge: 'Popular' },
        { label: 'Docker Setup', link: '/docs/install/docker/' },
        { label: 'Railway Cloud', link: '/docs/install/railway/', badge: 'Easy' },
        { label: 'AWS Free Tier', link: '/docs/install/aws/' },
      ],
    },
    {
      label: 'Security',
      collapsed: true,
      items: [
        { label: 'Is it Safe?', link: '/docs/security/is-it-safe/' },
        { label: 'Best Practices', link: '/docs/security/best-practices/' },
      ],
    },
     {
      label: 'Configuration',
      collapsed: true,
      items: [
        { label: 'WhatsApp', link: '/docs/config/whatsapp/' },
        { label: 'Telegram', link: '/docs/config/telegram/' },
        { label: 'Gmail', link: '/docs/config/gmail/' },
      ],
    },
  ],
};
