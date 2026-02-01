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
      label: 'Start Here',
      items: [
        { label: 'What is Openclaw?', link: '/docs/getting-started/what-is-openclaw/' },
        { label: 'Quick Start', link: '/docs/getting-started/quick-start/' },
        { label: 'Brand History', link: '/clawdbot-vs-moltbot-vs-openclaw/' },
      ],
    },
    {
      label: 'Installation',
      autogenerate: { directory: 'docs/install' },
    },
    {
      label: 'Migration',
      items: [
        { label: 'Moltbot → Openclaw', link: '/moltbot-to-openclaw/', badge: 'New' },
        { label: 'Migration FAQ', link: '/docs/migration/faq/' },
        { label: 'From Moltbot', link: '/docs/migration/from-moltbot/' },
        { label: 'From Clawdbot', link: '/docs/migration/from-clawdbot/' },
      ],
    },
    {
      label: 'Essentials',
      autogenerate: { directory: 'docs/start' },
    },
    {
      label: 'Core Concepts',
      autogenerate: { directory: 'docs/concepts' },
    },
    {
      label: 'Configuration',
      items: [
        {
          label: 'LLM Providers',
          autogenerate: { directory: 'docs/providers' },
        },
        {
          label: 'Channels',
          autogenerate: { directory: 'docs/channels' },
        },
        {
          label: 'Automation',
          autogenerate: { directory: 'docs/automation' },
        },
      ],
    },
    {
      label: 'Tools & Skills',
      autogenerate: { directory: 'docs/tools' },
    },
    {
      label: 'Gateway',
      autogenerate: { directory: 'docs/gateway' },
    },
    {
      label: 'CLI Reference',
      autogenerate: { directory: 'docs/cli' },
    },
    {
      label: 'Web Dashboard',
      autogenerate: { directory: 'docs/web' },
    },
    {
      label: 'Security',
      autogenerate: { directory: 'docs/security' },
    },
  ],
};
