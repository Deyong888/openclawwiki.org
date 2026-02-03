import type { StarlightUserConfig } from '@astrojs/starlight/types';

const sidebar = [
  {
    label: 'Start Here',
    translations: { zh: '开始使用' },
    items: [
      { 
        label: 'What is Openclaw?', 
        translations: { zh: '什么是 Openclaw?' },
        link: '/docs/getting-started/what-is-openclaw/' 
      },
      { 
        label: 'Quick Start', 
        translations: { zh: '快速开始' },
        link: '/docs/getting-started/quick-start/' 
      },
      { 
        label: 'Brand History', 
        translations: { zh: '品牌历史' },
        link: '/clawdbot-vs-moltbot-vs-openclaw/' 
      },
    ],
  },
  {
    label: 'Installation',
    translations: { zh: '安装' },
    autogenerate: { directory: 'docs/install' },
  },
  {
    label: 'Migration',
    translations: { zh: '迁移' },
    items: [
      { 
        label: 'Moltbot → Openclaw', 
        translations: { zh: 'Moltbot → Openclaw' },
        link: '/moltbot-to-openclaw/', 
        badge: {
          text: { en: 'New', zh: '最新' }
        }
      },
      { 
        label: 'Migration FAQ', 
        translations: { zh: '迁移常见问题' },
        link: '/docs/migration/faq/' 
      },
      { 
        label: 'From Moltbot', 
        translations: { zh: '从 Moltbot 迁移' },
        link: '/docs/migration/from-moltbot/' 
      },
      { 
        label: 'From Clawdbot', 
        translations: { zh: '从 Clawdbot 迁移' },
        link: '/docs/migration/from-clawdbot/' 
      },
    ],
  },
  {
    label: 'Essentials',
    translations: { zh: '基础' },
    autogenerate: { directory: 'docs/start' },
  },
  {
    label: 'Core Concepts',
    translations: { zh: '核心概念' },
    autogenerate: { directory: 'docs/concepts' },
  },
  {
    label: 'Configuration',
    translations: { zh: '配置' },
    items: [
      {
        label: 'LLM Providers',
        translations: { zh: 'LLM 提供商' },
        autogenerate: { directory: 'docs/providers' },
      },
      {
        label: 'Channels',
        translations: { zh: '渠道' },
        autogenerate: { directory: 'docs/channels' },
      },
      {
        label: 'Automation',
        translations: { zh: '自动化' },
        autogenerate: { directory: 'docs/automation' },
      },
    ],
  },
  {
    label: 'Tools & Skills',
    translations: { zh: '工具与技能' },
    autogenerate: { directory: 'docs/tools' },
  },
  {
    label: 'Gateway',
    translations: { zh: '网关' },
    autogenerate: { directory: 'docs/gateway' },
  },
  {
    label: 'CLI Reference',
    translations: { zh: 'CLI 参考' },
    autogenerate: { directory: 'docs/cli' },
  },
  {
    label: 'Web Dashboard',
    translations: { zh: 'Web 面板' },
    autogenerate: { directory: 'docs/web' },
  },
  {
    label: 'Security',
    translations: { zh: '安全' },
    autogenerate: { directory: 'docs/security' },
  },
];

export const starlightConfig: StarlightUserConfig = {
  title: 'Openclaw Wiki Docs',
  logo: {
    src: './public/images/openclaw-logo.svg',
    replacesTitle: true,
  },
  editLink: {
    baseUrl: 'https://github.com/openclaw/openclaw/edit/main/docs/',
  },
  defaultLocale: 'root',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
    },
  },
  sidebar: sidebar,
};
