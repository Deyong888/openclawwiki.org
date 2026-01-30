import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Docs',
      href: '/docs/getting-started/quick-start/',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Migration',
      href: '/moltbot-to-openclaw/',
    },
  ],
  actions: [{ text: 'Download', href: '/docs/install/mac-mini/', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '/#features' },
        { text: 'Security', href: '/docs/security/is-it-safe/' },
        { text: 'Install', href: '/docs/install/mac-mini/' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Documentation', href: '/docs/getting-started/quick-start/' },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Migration Guide', href: '/moltbot-to-openclaw/' },
      ],
    },
    {
      title: 'Project',
      links: [
        { text: 'GitHub', href: 'https://github.com/openclaw/openclaw' },
        { text: 'Rebrand Story', href: '/clawdbot-vs-moltbot-vs-openclaw/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/openclaw_ai' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/openclaw/openclaw' },
  ],
  footNote: `
    Made with ❤️ by the Openclaw Community · All rights reserved.
  `,
};
