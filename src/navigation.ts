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
    {
      text: 'Skills',
      href: getPermalink('/skills'),
    },
    {
      text: 'Showcase',
      href: getPermalink('/showcase'),
    },
    {
      text: 'Tools',
      links: [
        {
          text: 'Tools Overview',
          href: getPermalink('/tools'),
        },
        {
          text: 'One-Click Install',
          href: getPermalink('/install-openclaw'),
        },
        {
          text: 'GitHub Repos',
          href: getPermalink('/openclaw-github'),
        },
        {
          text: 'Docker Generator',
          href: getPermalink('/tools/docker-compose-generator'),
        },
        {
          text: 'Cost Estimator',
          href: getPermalink('/tools/claude-cost-estimator'),
        },
        {
          text: 'Security Policy',
          href: getPermalink('/tools/security-policy-generator'),
        },
      ],
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
        { text: 'FAQ', href: getPermalink('/resources/faq') },
      ],
    },
    {
      title: 'Project',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Contact Us', href: getPermalink('/contact') },
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

export const headerDataZH = {
  links: [
    {
      text: '文档',
      href: '/zh/docs/getting-started/quick-start/',
    },
    {
      text: '博客',
      href: '/blog/',
    },
    {
      text: '迁移',
      href: '/zh/moltbot-to-openclaw/',
    },
    {
      text: '技能',
      href: '/zh/docs/tools/skills/',
    },
    {
      text: '案例',
      href: '/showcase/',
    },
    {
      text: '工具',
      links: [
        {
          text: '工具概览',
          href: '/tools/',
        },
        {
          text: '一键安装',
          href: '/install-openclaw/',
        },
        {
          text: 'GitHub 仓库',
          href: '/openclaw-github/',
        },
        {
          text: 'Docker 生成器',
          href: '/tools/docker-compose-generator/',
        },
        {
          text: '成本估算器',
          href: '/tools/claude-cost-estimator/',
        },
        {
          text: '安全策略',
          href: '/tools/security-policy-generator/',
        },
      ],
    },
  ],
  actions: [{ text: '下载', href: '/zh/docs/install/mac-mini/', target: '_blank' }],
};

export const footerDataZH = {
  links: [
    {
      title: '产品',
      links: [
        { text: '特性', href: '/#features' },
        { text: '安全', href: '/zh/docs/security/is-it-safe/' },
        { text: '安装', href: '/zh/docs/install/mac-mini/' },
      ],
    },
    {
      title: '资源',
      links: [
        { text: '文档', href: '/zh/docs/getting-started/quick-start/' },
        { text: '博客', href: '/blog/' },
        { text: '迁移指南', href: '/zh/moltbot-to-openclaw/' },
        { text: 'FAQ', href: '/zh/docs/migration/faq/' },
      ],
    },
    {
      title: '项目',
      links: [
        { text: '关于我们', href: '/about/' },
        { text: '联系我们', href: '/contact/' },
        { text: 'GitHub', href: 'https://github.com/openclaw/openclaw' },
        { text: '更名故事', href: '/zh/clawdbot-vs-moltbot-vs-openclaw/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: '条款', href: '/terms/' },
    { text: '隐私政策', href: '/privacy/' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/openclaw_ai' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/openclaw/openclaw' },
  ],
  footNote: `
    Made with ❤️ by the Openclaw Community · All rights reserved.
  `,
};
