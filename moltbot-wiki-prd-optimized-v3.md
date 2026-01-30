# Cursor Composer Prompt: Openclaw Wiki 全栈开发 (优化版 v3)

> **版本**: 3.0  
> **适用**: Cursor / Trae / GitHub Copilot / Windsurf / Claude / GPT-4  
> **项目**: https:// openclawwiki.org 
> **更新日期**: 2026-01-30

---

## 项目概述

### 核心目标
构建一个混合架构的技术文档站，截获 "Clawdbot"、"Moltbot" 和 **"Openclaw"** 相关搜索流量，利用**连续两次品牌更名事件**和**信息真空期**建立先发优势，通过内容营销+SEO获取精准流量，最终实现联盟营销变现。

### 更名事件时间线（关键内容资产）
```
第一次：Clawd → 被 Anthropic 发律师函  2025 年 11 月，项目起名 Clawd，是 Claude + claw（爪子）的谐音梗。用过 Claude 的人应该都见过加载时那只小龙虾——名字就来源于此。结果没多久，Anthropic 法务团队就发来了"友好建议函"。Clawd 和 Claude 确实太像了，换位思考也能理解。第二次：Moltbot → 社区凌晨五点的产物2026 年 1 月 27 日，作者和社区成员在 Discord 上凌晨五点头脑风暴，选了 Moltbot。Molt 是龙虾蜕壳的意思，寓意成长。但这名字有个问题：念起来像"摸头 bot"，而且 molt 这个词太冷门，很多人根本不知道什么意思。更惨的是，改名过程中还被人抢注了域名和社交账号，甚至有人趁机发了个同名的加密货币来割韭菜。第三次：OpenClaw → 这次做足了功课吸取前两次教训，这次改名前团队做了充分准备：• 商标检索：通过• 域名：已购入• 迁移代码：已写好• 社交账号：已注册OpenClaw 这个名字拆开来看：Open（开源、开放）+ Claw（龙虾爪，致敬起源）。简单直接，不容易产生法律纠纷。
```

### 信息差窗口期策略（更新）

| 时间窗口 | 策略 | 行动 |
|---------|------|------|
| **现在-7天** | 紧急窗口期 | 快速上线，抢占"what is openclaw""clawdbot rename"" openclaw doc"等核心词 |
| **14-45天** | 内容填充期 | 持续发布教程、更名解释、迁移指南，建立权威度 |
| **45天+** | 变现优化期 | 优化转化漏斗，增加Adsense和联盟收益 |

### 项目属性

| 属性 | 值 |
|------|-----|
| **主域名** | openclawwiki.org 辅助域名openclawwiki.org|
| **架构** | AstroWind (落地页+博客) + Starlight (技术文档) 混合 |
| **目标受众** | 自托管AI爱好者、开发者、Mac Mini购买者、隐私关注者、原Clawdbot/Moltbot用户 |
| **变现方式** | Adsense广告、云服务器联盟 (DigitalOcean )、Amazon硬件联盟、Newsletter广告 |
| **导流目标** | stoiclines.store (哲学品牌)、linktoai.top (AI工具)、24kwebgames.com (游戏站) |

---

## 流量获取策略

### 核心关键词矩阵（三品牌全覆盖）

#### 一级关键词（高流量，优先抢占）
| 关键词 | 搜索意图 | 内容类型 | 优先级 | 说明 |
|--------|---------|---------|--------|------|
| openclaw | 新品牌认知 | 首页+介绍页 | P0 | 新品牌主词 |
| openclaw ai | 产品类别 | 首页 | P0 | 产品定位词 |
| moltbot | 过渡品牌追溯 | 重定向/解释页 | P0 | 截获过渡期流量 |
| clawdbot | 原始品牌追溯 | 重定向/解释页 | P0 | 截获历史流量 |
| openclaw vs moltbot | 更名对比 | 专门着陆页 | P0 | 更名解释 |
| moltbot vs clawdbot | 历史对比 | 专门着陆页 | P0 | 历史追溯 |
| openclaw install | 安装需求 | 教程文档 | P0 | 核心转化词 |
| openclaw mac mini | 硬件需求 | 硬件指南 | P0 | 高价值词 |
| what is openclaw | 信息查询 | FAQ+介绍 | P0 | 信息词 |
| openclaw github | 官方源 | 链接页 | P0 | 导航词 |

#### 二级关键词（长尾流量，内容覆盖）
| 关键词 | 搜索意图 | 内容类型 | 优先级 |
|--------|---------|---------|--------|
| openclaw docker | 技术安装 | 教程 | P1 |
| openclaw whatsapp | 功能配置 | 配置指南 | P1 |
| openclaw telegram | 功能配置 | 配置指南 | P1 |
| openclaw self hosted ai | 类别查询 | 分类页面 | P1 |
| moltbot alternative | 替代方案 | 对比页面 | P1 |
| clawdbot alternative | 替代方案 | 对比页面 | P1 |
| openclaw review | 评测查询 | 评测文章 | P1 |
| openclaw tutorial | 教程查询 | 教程集合 | P1 |
| moltbot renamed | 更名事件 | 新闻/博客 | P1 |
| clawdbot to openclaw | 迁移查询 | 迁移指南 | P1 |
| openclaw pricing | 定价查询 | 说明页 | P1 |
| openclaw features | 功能介绍 | 功能页 | P1 |

#### 三级关键词（长尾+信息差）
- "openclaw vs n8n" - 竞品对比
- "openclaw vs make" - 竞品对比
- "openclaw vs zapier" - 竞品对比
- "openclaw security" - 安全分析
- "openclaw free" - 免费说明
- "moltbot discontinued" - 过渡词
- "clawdbot renamed to openclaw" - 完整更名链
- "openclaw migration" - 迁移指南
- "openclaw setup guide" - 设置指南
- "openclaw configuration" - 配置指南

### SEO内容金字塔策略（三品牌覆盖）

```
                    ┌─────────────┐
                    │   首页      │  ← openclaw主入口
                    │  (1页)      │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   ┌────┴────┐        ┌────┴────┐        ┌────┴────┐
   │ 更名解释 │        │  文档页  │        │  博客页  │
   │  (3-5页)│        │ (15-20页)│        │ (25+篇) │
   └────┬────┘        └────┬────┘        └────┬────┘
        │                  │                  │
   ┌────┴────┐        ┌────┴────┐        ┌────┴────┐
   │Clawdbot │        │安装/配置 │        │更名新闻 │
   │Moltbot  │        │教程集合 │        │更新动态 │
   │Openclaw │        │         │        │         │
   │对比系列 │        │         │        │         │
   └─────────┘        └─────────┘        └─────────┘
```

---

## 技术栈要求（严格遵循）

| 层级 | 技术 | 说明 |
|------|------|------|
| 框架 | Astro 5.x | 静态站点生成，极致性能 |
| 主题 | onwidget/astrowind (基础) + @astrojs/starlight (文档) | 混合架构 |
| 语言 | TypeScript | 严格模式 enabled |
| 样式 | Tailwind CSS 4.x | AstroWind预设 + 自定义品牌色覆盖 |
| 组件 | Astro (.astro) + React (.tsx) | React仅用于交互组件 |
| 图标 | astro-icon | 使用 Tabler Icons |
| SEO | @astrojs/sitemap + 手动Schema | 结构化数据注入 |
| 搜索 | Starlight内置Pagefind | 仅文档区 |
| 分析 | Google Analytics 4 + GTM | 流量追踪 |
| 输出 | `output: 'static'` | Cloudflare Pages部署 |

---

## 品牌系统（强制执行）

```css
/* 核心品牌色 - 更新为更开放的蓝色调 */
--brand-primary: #3b82f6;        /* 开放蓝 blue-500 */
--brand-secondary: #0f172a;      /* 深 slate-900 */
--brand-text: #f8fafc;           /* slate-50 */
--brand-text-muted: #94a3b8;     /* slate-400 */
--brand-accent: #ea580c;         /* 保留龙虾橙作为历史色 */

/* Logo */
🔓 Openclaw Wiki

/* 字体 */
Inter, system-ui, -apple-system, sans-serif

/* 代码块 */
dark theme, rounded-xl (0.75rem), 带复制按钮
```

### 品牌更名说明文案模板

```
Openclaw（前身为 Moltbot，更早为 Clawdbot）是一个自托管 AI 助手...
```

---

## 文件结构（必须按此创建）

```
openclaw-wiki/
├── src/
│   ├── components/
│   │   ├── widgets/              # AstroWind自带组件
│   │   │   ├── Hero.astro
│   │   │   ├── Features.astro
│   │   │   ├── Steps.astro
│   │   │   ├── FAQ.astro         # 布局关键词，解答用户搜索疑问
│   │   │   └── CallToAction.astro
│   │   ├── custom/               # 自定义组件
│   │   │   ├── NewsletterForm.tsx      # React - 邮件订阅
│   │   │   ├── AffiliateBanner.astro   # 联盟链接
│   │   │   ├── CostCalculator.tsx      # React - 成本计算器
│   │   │   ├── SchemaInjector.astro    # SEO结构化数据
│   │   │   ├── TrafficBanner.astro     # 导流横幅(到其他站点)
│   │   │   ├── RelatedSites.astro      # 相关站点推荐
│   │   │   └── RebrandNotice.astro     # 更名通知组件
│   │   └── starlight/            # Starlight覆盖组件
│   │       ├── SiteTitle.astro   # 必须：返回主站链接
│   │       └── Head.astro        # 必须：Schema注入
│   ├── content/
│   │   ├── docs/                 # Starlight内容集合
│   │   │   ├── index.mdx         # 文档首页 (template: splash)
│   │   │   ├── rebrand/          # ★ 更名相关内容
│   │   │   │   ├── clawdbot-to-moltbot.mdx
│   │   │   │   ├── moltbot-to-openclaw.mdx
│   │   │   │   └── complete-history.mdx
│   │   │   ├── getting-started/
│   │   │   │   ├── what-is-openclaw.mdx
│   │   │   │   └── quick-start.mdx
│   │   │   ├── install/          # ★ P0优先级
│   │   │   │   ├── mac-mini.mdx
│   │   │   │   ├── docker.mdx
│   │   │   │   ├── railway.mdx
│   │   │   │   └── aws.mdx
│   │   │   ├── migration/        # ★ 迁移指南
│   │   │   │   ├── from-clawdbot.mdx
│   │   │   │   ├── from-moltbot.mdx
│   │   │   │   └── faq.mdx
│   │   │   ├── security/         # ★ P0优先级
│   │   │   │   ├── is-it-safe.mdx
│   │   │   │   └── best-practices.mdx
│   │   │   ├── config/
│   │   │   │   ├── whatsapp.mdx
│   │   │   │   ├── telegram.mdx
│   │   │   │   └── gmail.mdx
│   │   │   └── compare/
│   │   │       ├── openclaw-vs-n8n.mdx
│   │   │       └── openclaw-vs-make.mdx
│   │   └── blog/                 # AstroWind博客
│   │       ├── 2026-01-moltbot-rename-openclaw.md
│   │       ├── openclaw-first-impressions.md
│   │       ├── self-hosted-ai-guide.md
│   │       └── clawdbot-moltbot-openclaw-timeline.md
│   ├── layouts/
│   │   ├── Layout.astro          # AstroWind默认
│   │   └── BlogLayout.astro      # 博客布局
│   ├── pages/                    # AstroWind路由
│   │   ├── index.astro           # 精美落地页 ★ P0
│   │   ├── clawdbot-vs-moltbot-vs-openclaw.astro  # 三品牌对比 ★ P0
│   │   ├── moltbot-to-openclaw.astro              # 更名解释 ★ P0
│   │   ├── what-is-openclaw.astro                 # 介绍页 ★ P0
│   │   ├── cost-calculator.astro                  # 工具页
│   │   ├── blog/
│   │   │   ├── index.astro       # 博客列表
│   │   │   └── [slug].astro      # 动态路由
│   │   ├── about.astro
│   │   └── redirect/             # 旧链接重定向
│   │       ├── clawdbot.astro
│   │       ├── moltbot.astro
│   │       └── index.astro
│   ├── config/
│   │   ├── starlight.ts          # Starlight配置抽离
│   │   └── affiliates.ts         # 联盟链接配置
│   ├── styles/
│   │   ├── starlight-custom.css  # 品牌色覆盖
│   │   └── global.css            # 全局样式扩展
│   └── utils/
│       ├── affiliates.ts         # 联盟链接配置
│       └── seo.ts                # SEO工具函数
├── public/
│   └── images/
│       ├── hero-terminal.png     # Hero区终端截图
│       ├── mac-mini-setup.jpg    # Mac Mini设置图
│       ├── openclaw-logo.svg     # Logo
│       ├── og-image.png          # 社交分享图
│       └── brand-timeline.png    # 品牌时间线图
├── astro.config.mjs              # 主配置
└── package.json
```

---

## 导流体系设计

### 导流目标站点

| 站点 | 类型 | 导流位置 | 导流方式 |
|------|------|---------|---------|
| **stoiclines.store** | 哲学品牌 | 页脚/关于页/博客侧边栏 | 文字链接+品牌提及 |
| **linktoai.top** | AI工具导航 | 导航栏/相关工具推荐 | 按钮+卡片推荐 |
| **24kwebgames.com** | 在线游戏 | 页脚/休闲推荐区 | 文字链接+小部件 |

### 导流组件实现

#### 组件: TrafficBanner.astro

**路径**: `src/components/custom/TrafficBanner.astro`

```astro
---
interface Props {
  variant?: 'footer' | 'sidebar' | 'inline';
  site: 'stoiclines' | 'linktoai' | '24kwebgames' | 'all';
}

const { variant = 'footer', site = 'all' } = Astro.props;

const sites = {
  stoiclines: {
    name: 'Stoic Lines',
    url: 'https://stoiclines.store',
    description: 'Modern philosophy for the digital age',
    category: 'Philosophy',
    icon: 'tabler:book'
  },
  linktoai: {
    name: 'Link to AI',
    url: 'https://linktoai.top',
    description: 'Curated AI tools directory',
    category: 'AI Tools',
    icon: 'tabler:robot'
  },
  webgames: {
    name: '24K Web Games',
    url: 'https://24kwebgames.com',
    description: 'Free online games collection',
    category: 'Games',
    icon: 'tabler:device-gamepad'
  }
};

const displaySites = site === 'all' ? Object.values(sites) : [sites[site]];
---

{variant === 'footer' && (
  <div class="border-t border-slate-800 pt-6 mt-8">
    <p class="text-sm text-slate-500 mb-3">Also check out:</p>
    <div class="flex flex-wrap gap-4">
      {displaySites.map(s => (
        <a 
          href={s.url} 
          target="_blank" 
          rel="noopener"
          class="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1"
        >
          <span>{s.name}</span>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      ))}
    </div>
  </div>
)}

{variant === 'sidebar' && (
  <div class="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
    <h4 class="text-sm font-semibold text-slate-300 mb-3">Related Sites</h4>
    <div class="space-y-3">
      {displaySites.map(s => (
        <a 
          href={s.url} 
          target="_blank" 
          rel="noopener"
          class="block group"
        >
          <div class="flex items-center gap-2">
            <span class="text-blue-400 group-hover:text-blue-300 transition-colors">{s.name}</span>
            <svg class="w-3 h-3 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          <p class="text-xs text-slate-500">{s.description}</p>
        </a>
      ))}
    </div>
  </div>
)}
```

### 导流位置规划

| 页面 | 导流组件 | 目标站点 |
|------|---------|---------|
| 首页 Footer | TrafficBanner (footer, all) | 全部 |
| 文档页 Sidebar | TrafficBanner (sidebar, linktoai) | linktoai.top |
| 关于页 | TrafficBanner (inline, stoiclines) | stoiclines.store |
| 博客文章 | TrafficBanner (footer, all) | 全部 |
| 成本计算器页 | TrafficBanner (sidebar, webgames) | 24kwebgames.com |

---

## 外链建设策略

### 外链目标

为旧网站建立高质量外链，提升SEO权重：

| 旧网站 | 外链位置 | 锚文本策略 |
|--------|---------|-----------|
| **stoiclines.store** | 关于页/博客作者页 | "philosophy blog", "digital stoicism" |
| **linktoai.top** | 工具推荐页/资源页 | "AI tools directory", "curated AI resources" |
| **24kwebgames.com** | 休闲推荐/页脚 | "online games", "browser games" |

### 外链植入规范

1. **自然植入**: 外链必须与内容相关，避免生硬插入
2. **多样化锚文本**: 使用品牌名、描述性短语、URL多种形式
3. **nofollow控制**: 重要页面使用dofollow，评论/UGC使用nofollow
4. **定期审计**: 每月检查外链有效性

---

## 关键配置文件

### 1. astro.config.mjs

```javascript
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import { starlightConfig } from './src/config/starlight';

export default defineConfig({
  site: 'https://openclawwiki.org',
  output: 'static',

  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    mdx(),
    icon(),
    starlight({
      ...starlightConfig,
      customCss: [
        './src/styles/starlight-custom.css',
      ],
      components: {
        SiteTitle: './src/components/starlight/SiteTitle.astro',
        Head: './src/components/starlight/Head.astro',
      },
    }),
  ],

  redirects: {
    // 品牌更名重定向 - 三品牌全覆盖
    '/clawdbot': '/clawdbot-vs-moltbot-vs-openclaw/',
    '/clawdbot/': '/clawdbot-vs-moltbot-vs-openclaw/',
    '/moltbot': '/moltbot-to-openclaw/',
    '/moltbot/': '/moltbot-to-openclaw/',
    '/docs/clawdbot-vs-moltbot': '/clawdbot-vs-moltbot-vs-openclaw/',
    '/docs/moltbot-to-openclaw': '/moltbot-to-openclaw/',
    // 安装快捷入口
    '/install': '/docs/install/mac-mini/',
    '/install/': '/docs/install/mac-mini/',
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
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  // 构建优化
  build: {
    format: 'directory',
  },
});
```

### 2. src/config/starlight.ts

```typescript
import type { StarlightUserConfig } from '@astrojs/starlight';

export const starlightConfig: StarlightUserConfig = {
  title: 'Openclaw Wiki Docs',
  logo: {
    src: '/images/openclaw-logo.svg',
    replacesTitle: true,
  },
  editLink: {
    baseUrl: 'https://github.com/yourusername/openclaw-wiki/edit/main/src/content/docs/',
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
        { label: 'Is It Safe?', link: '/docs/security/is-it-safe/', badge: 'Must Read' },
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
    {
      label: 'Comparisons',
      collapsed: true,
      items: [
        { label: 'Openclaw vs n8n', link: '/docs/compare/openclaw-vs-n8n/' },
        { label: 'Openclaw vs Make', link: '/docs/compare/openclaw-vs-make/' },
      ],
    },
  ],
  lastUpdated: true,
  defaultLocale: 'en',
  locales: {
    en: {
      label: 'English',
      lang: 'en',
    },
  },
  // 搜索配置
  pagefind: true,
  // 社交链接
  social: {
    github: 'https://github.com/openclaw/openclaw',
    twitter: 'https://twitter.com/steipete',
  },
};
```

### 3. src/styles/starlight-custom.css

```css
/* Openclaw品牌系统覆盖Starlight */

:root {
  /* 品牌色 - 开放蓝 */
  --sl-color-accent-low: #1e3a5f;
  --sl-color-accent: #3b82f6;
  --sl-color-accent-high: #60a5fa;

  /* 历史色 - 龙虾橙（保留） */
  --sl-color-accent-legacy: #ea580c;

  /* 暗色模式匹配AstroWind */
  --sl-color-white: #f8fafc;
  --sl-color-gray-1: #e2e8f0;
  --sl-color-gray-2: #cbd5e1;
  --sl-color-gray-3: #94a3b8;
  --sl-color-gray-4: #64748b;
  --sl-color-gray-5: #475569;
  --sl-color-gray-6: #334155;
  --sl-color-black: #0f172a;
  --sl-color-bg: #0f172a;
  --sl-color-bg-nav: #0f172a;
  --sl-color-bg-sidebar: #0f172a;
}

/* 侧边栏美化 */
.sidebar-content {
  border-right: 1px solid rgba(59, 130, 246, 0.1);
  background: linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(59, 130, 246, 0.02) 100%);
}

/* 当前页面高亮 */
[aria-current="page"] {
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%);
  border-left: 2px solid #3b82f6 !important;
  color: #60a5fa !important;
}

/* 链接卡片悬停 */
.sl-link-card:hover {
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
  transition: all 0.2s ease;
}

/* 代码块样式 */
.sl-markdown-content pre {
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #020617;
}

/* 表格样式 */
.sl-markdown-content table {
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.sl-markdown-content th {
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  font-weight: 600;
}

.sl-markdown-content td {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

/* 徽章样式 */
.sl-badge {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* 搜索框样式 */
.pagefind-ui__search-input {
  background: rgba(15, 23, 42, 0.8) !important;
  border-color: rgba(59, 130, 246, 0.2) !important;
}

.pagefind-ui__search-input:focus {
  border-color: #3b82f6 !important;
}

/* 更名通知样式 */
.rebrand-notice {
  background: linear-gradient(135deg, rgba(234, 88, 12, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
  border: 1px solid rgba(234, 88, 12, 0.2);
  border-radius: 0.75rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
}
```

---

## 关键组件代码

### 组件1: RebrandNotice.astro（更名通知组件）

**路径**: `src/components/custom/RebrandNotice.astro`

```astro
---
interface Props {
  variant?: 'banner' | 'inline' | 'minimal';
}

const { variant = 'banner' } = Astro.props;
---

{variant === 'banner' && (
  <div class="rebrand-notice">
    <div class="flex items-start gap-3">
      <div class="text-2xl">🔓</div>
      <div>
        <h4 class="font-semibold text-white mb-1">
          New Name: <span class="text-blue-400">Openclaw</span>
        </h4>
        <p class="text-slate-400 text-sm">
          Formerly known as <span class="text-orange-400">Moltbot</span> (and before that, <span class="text-slate-500">Clawdbot</span>). 
          <a href="/moltbot-to-openclaw/" class="text-blue-400 hover:underline ml-1">Learn more →</a>
        </p>
      </div>
    </div>
  </div>
)}

{variant === 'inline' && (
  <span class="text-slate-500 text-sm">
    (formerly <span class="text-orange-400">Moltbot</span>)
  </span>
)}

{variant === 'minimal' && (
  <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs rounded-full">
    <span>🔓</span>
    <span>New: Openclaw</span>
  </span>
)}
```

### 组件2: SiteTitle.astro (Starlight覆盖)

**路径**: `src/components/starlight/SiteTitle.astro`

```astro
---
import Default from '@astrojs/starlight/components/SiteTitle.astro';
---

<div class="flex items-center gap-3">
  <!-- 返回主站链接 -->
  <a 
    href="/" 
    class="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
    title="Back to main site"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
    </svg>
    <span class="hidden md:inline">Back</span>
  </a>

  <div class="h-4 w-px bg-slate-700"></div>

  <!-- Starlight默认标题 -->
  <Default />
</div>

<style>
  :global(.site-title) {
    color: #3b82f6 !important;
  }
</style>
```

### 组件3: Head.astro (SEO Schema注入)

**路径**: `src/components/starlight/Head.astro`

```astro
---
import Default from '@astrojs/starlight/components/Head.astro';

const { title, description, lastUpdated } = Astro.props;
const canonicalUrl = new URL(Astro.url.pathname, Astro.site).toString();
const ogImage = new URL('/images/og-image.png', Astro.site).toString();

// SoftwareApplication Schema - 三品牌名
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Openclaw",
  "alternateName": ["Moltbot", "Clawdbot"],
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": ["macOS", "Linux", "Windows"],
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250"
  },
  "sameAs": [
    "https://github.com/openclaw/openclaw",
    "https://twitter.com/steipete"
  ]
};

// 文章页使用TechArticle Schema
const articleSchema = title ? {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": title,
  "description": description,
  "url": canonicalUrl,
  "image": ogImage,
  "datePublished": lastUpdated || new Date().toISOString(),
  "dateModified": lastUpdated || new Date().toISOString(),
  "author": {
    "@type": "Organization",
    "name": "Openclaw Wiki"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Openclaw Wiki",
    "logo": {
      "@type": "ImageObject",
      "url": new URL('/images/openclaw-logo.svg', Astro.site).toString()
    }
  }
} : null;

// FAQ Schema (用于FAQ页面) - 更新为Openclaw
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Openclaw?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Openclaw is a self-hosted AI assistant that can manage your inbox, book flights, and control your smart home devices. It runs 100% locally on your hardware, ensuring complete privacy. Formerly known as Moltbot and Clawdbot."
      }
    },
    {
      "@type": "Question",
      "name": "Is Openclaw the same as Moltbot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Openclaw is the new name for Moltbot. The project was rebranded from Clawdbot to Moltbot in early 2026, and then to Openclaw shortly after to better reflect its open-source philosophy and expanded capabilities."
      }
    },
    {
      "@type": "Question",
      "name": "Is Openclaw free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Openclaw is open-source and free to use. You only need to pay for your own hardware (like a Mac Mini) or cloud server costs."
      }
    },
    {
      "@type": "Question",
      "name": "How do I migrate from Moltbot to Openclaw?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Migration is straightforward. Backup your Moltbot data, update your Docker image to the Openclaw image, and restart. Openclaw will automatically import your existing configuration. See our migration guide for detailed steps."
      }
    }
  ]
};
---

<Default />

<!-- Canonical URL -->
<link rel="canonical" href={canonicalUrl} />

<!-- Open Graph -->
<meta property="og:type" content="article" />
<meta property="og:url" content={canonicalUrl} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImage} />
<meta property="og:site_name" content="Openclaw Wiki" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImage} />

<!-- Structured Data -->
<script type="application/ld+json" set:html={JSON.stringify(softwareSchema)} />

{articleSchema && (
  <script type="application/ld+json" set:html={JSON.stringify(articleSchema)} />
)}

<script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />

<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 组件4: NewsletterForm.tsx

**路径**: `src/components/custom/NewsletterForm.tsx`

```tsx
interface Props {
  title?: string;
  description?: string;
  buttonText?: string;
  tags?: string[];
  placement?: 'hero' | 'inline' | 'footer';
}

export default function NewsletterForm({ 
  title = "Get the Weekly Digest", 
  description = "One email per week. Openclaw updates, security alerts, and hardware deals. No spam.",
  buttonText = "Subscribe",
  tags = ["newsletter"],
  placement = 'inline'
}: Props) {
  const isHero = placement === 'hero';
  
  return (
    <div className={`${
      isHero 
        ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur border border-slate-700/50' 
        : 'bg-gradient-to-br from-slate-800 to-slate-900 border-l-4 border-blue-500'
    } rounded-lg p-6 my-8`}>
      <h3 className={`${isHero ? 'text-2xl' : 'text-xl'} font-bold text-blue-400 mb-2`}>
        {isHero ? '📧 ' : '🔓 '}{title}
      </h3>
      <p className="text-slate-300 mb-4">{description}</p>

      <form 
        action={`https://app.convertkit.com/forms/YOUR_FORM_ID/subscriptions`}
        method="post"
        className="flex flex-col sm:flex-row gap-3"
      >
        <input
          type="email"
          name="email_address"
          placeholder="you@example.com"
          required
          className="flex-1 px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
        />
        {tags.map(tag => (
          <input key={tag} type="hidden" name="tags[]" value={tag} />
        ))}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-colors"
        >
          {buttonText}
        </button>
      </form>

      <p className="text-xs text-slate-500 mt-3">Join 500+ developers. Unsubscribe anytime.</p>
    </div>
  );
}
```

### 组件5: AffiliateBanner.astro

**路径**: `src/components/custom/AffiliateBanner.astro`

```astro
---
interface Props {
  platform: 'digitalocean' | 'amazon' | 'vultr' | 'linode' | 'hetzner';
  variant?: 'banner' | 'card' | 'inline';
  context?: string;
}

const { platform, variant = 'banner', context = '' } = Astro.props;

const configs = {
  digitalocean: {
    name: 'DigitalOcean',
    offer: '$200 Free Credit',
    description: 'Deploy Openclaw on the easiest cloud platform. Perfect for beginners.',
    url: 'https://m.do.co/c/YOUR_CODE',
    color: 'bg-blue-600',
    icon: 'tabler:cloud'
  },
  amazon: {
    name: 'Amazon',
    offer: 'Mac Mini M4',
    description: 'Best price on Apple Silicon Mac Mini. Perfect for local AI hosting.',
    url: 'https://amzn.to/YOUR_TAG',
    color: 'bg-orange-500',
    icon: 'tabler:device-desktop'
  },
  vultr: {
    name: 'Vultr',
    offer: '$100 Free Credit',
    description: 'High-performance VPS from $2.50/month. Great for Openclaw hosting.',
    url: 'https://www.vultr.com/?ref=YOUR_ID',
    color: 'bg-blue-500',
    icon: 'tabler:server'
  },
  linode: {
    name: 'Linode',
    offer: '$100 Credit',
    description: 'Reliable cloud hosting with excellent support.',
    url: 'https://www.linode.com/lp/refer/?r=YOUR_CODE',
    color: 'bg-green-600',
    icon: 'tabler:cloud-computing'
  },
  hetzner: {
    name: 'Hetzner',
    offer: '€20 Credit',
    description: 'Europe\'s best value cloud. Powerful servers at low prices.',
    url: 'https://hetzner.cloud/?ref=YOUR_CODE',
    color: 'bg-red-600',
    icon: 'tabler:server-2'
  }
};

const config = configs[platform];
---

{variant === 'banner' && (
  <a 
    href={config.url}
    target="_blank"
    rel="sponsored noopener"
    data-affiliate="true"
    data-platform={platform}
    data-context={context}
    class="block bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500/50 rounded-lg p-4 my-6 transition-all group"
  >
    <div class="flex items-center justify-between">
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xs font-medium text-slate-400 uppercase tracking-wide">Recommended</span>
          <span class="text-xs text-blue-400">*</span>
        </div>
        <p class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{config.offer}</p>
        <p class="text-sm text-slate-400">{config.description}</p>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-sm font-medium text-slate-300">{config.name}</span>
        <svg class="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </div>
  </a>
)}

{variant === 'card' && (
  <a 
    href={config.url}
    target="_blank"
    rel="sponsored noopener"
    data-affiliate="true"
    data-platform={platform}
    data-context={context}
    class={`inline-flex items-center gap-2 ${config.color} text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity`}
  >
    {config.offer}
    <span class="text-xs opacity-75">*</span>
  </a>
)}

{variant === 'inline' && (
  <a 
    href={config.url}
    target="_blank"
    rel="sponsored noopener"
    data-affiliate="true"
    data-platform={platform}
    data-context={context}
    class="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
  >
    {config.name}
    <span class="text-xs">*</span>
  </a>
)}
```

---

## 页面内容规范

### 首页 (src/pages/index.astro)

```astro
---
import Layout from '~/layouts/Layout.astro';
import Hero from '~/components/widgets/Hero.astro';
import Features from '~/components/widgets/Features.astro';
import Steps from '~/components/widgets/Steps.astro';
import CallToAction from '~/components/widgets/CallToAction.astro';
import FAQ from '~/components/widgets/FAQ.astro';
import NewsletterForm from '~/components/custom/NewsletterForm.tsx';
import TrafficBanner from '~/components/custom/TrafficBanner.astro';
import RebrandNotice from '~/components/custom/RebrandNotice.astro';

const metadata = {
  title: 'Openclaw Wiki — Self-Hosted AI That Actually Does Things (Formerly Moltbot)',
  description: 'Complete guide to installing Openclaw (formerly Moltbot, originally Clawdbot) on Mac Mini, Docker, or cloud servers. Free tutorials, security best practices, and hardware recommendations.',
  keywords: ['openclaw', 'moltbot', 'clawdbot', 'self-hosted ai', 'mac mini ai', 'private ai assistant'],
};
---

<Layout metadata={metadata}>
  <!-- 更名通知横幅 -->
  <div class="container mx-auto px-4 pt-6">
    <RebrandNotice variant="banner" />
  </div>

  <Hero
    title="The AI That Actually <span class='text-primary'>Does Things</span>"
    subtitle="Openclaw is a self-hosted AI assistant that manages your inbox, books flights, and controls your home—running 100% locally on your hardware. <span class='text-slate-400'>Formerly Moltbot.</span>"
    actions={[
      { variant: 'primary', text: 'Get Started Free', href: '/docs/install/mac-mini/', icon: 'tabler:download' },
      { text: 'Why Renamed?', href: '/moltbot-to-openclaw/' },
    ]}
  />

  <Features
    id="features"
    tagline="Why Openclaw?"
    title="Self-Hosted AI, Without the Cloud Lock-in"
    items={[
      {
        title: '100% Private',
        description: 'Your data never leaves your machine. No cloud processing, no training data harvesting. Complete privacy guaranteed.',
        icon: 'tabler:shield-lock',
      },
      {
        title: 'Real Actions',
        description: 'Connects to WhatsApp, Telegram, Gmail—actually performs tasks, not just chat. Book flights, send messages, control devices.',
        icon: 'tabler:messages',
      },
      {
        title: 'Infinitely Hackable',
        description: 'Build custom Skills with TypeScript. From email automation to crypto alerts. Open source and extensible.',
        icon: 'tabler:code',
      },
      {
        title: 'No Subscriptions',
        description: 'One-time hardware cost. Compare to $20/month ChatGPT Plus + Zapier. Save hundreds per year.',
        icon: 'tabler:coin-off',
      },
    ]}
  />

  <Steps
    title="Get Started in 3 Steps"
    items={[
      {
        title: 'Choose Your Hardware',
        description: 'Mac Mini M4 recommended, or any Docker-capable server.',
        icon: 'tabler:device-desktop',
      },
      {
        title: 'One-Command Install',
        description: 'Docker Compose setup takes under 5 minutes.',
        icon: 'tabler:terminal',
      },
      {
        title: 'Connect & Automate',
        description: 'Link WhatsApp, Telegram, Gmail. Start automating.',
        icon: 'tabler:plug-connected',
      },
    ]}
  />

  <FAQ
    title="Frequently Asked Questions"
    subtitle="Everything you need to know about Openclaw"
    items={[
      {
        title: 'What is Openclaw?',
        description: 'Openclaw is a self-hosted AI assistant that can perform real-world tasks like managing emails, booking flights, and controlling smart home devices. It runs entirely on your own hardware. Formerly known as Moltbot and Clawdbot.',
      },
      {
        title: 'Is Openclaw the same as Moltbot?',
        description: 'Yes, Openclaw is the new name for Moltbot. The project was rebranded from Clawdbot to Moltbot in early 2026, and then to Openclaw shortly after to better reflect its open-source philosophy.',
      },
      {
        title: 'Is Openclaw free?',
        description: 'Yes, Openclaw is open-source and free to use. You only pay for your own hardware or cloud server costs, which can be as low as $5/month.',
      },
      {
        title: 'What hardware do I need?',
        description: 'A Mac Mini M4 is recommended for best performance, but Openclaw can run on any Docker-capable machine including Raspberry Pi, cloud VPS, or existing servers.',
      },
    ]}
  />

  <!-- Newsletter嵌入 -->
  <section class="py-16 bg-slate-900">
    <div class="container mx-auto px-4 max-w-2xl">
      <NewsletterForm client:load placement="hero" />
    </div>
  </section>

  <CallToAction
    title="Ready to Ditch Cloud AI?"
    subtitle="Join thousands of developers who've taken control of their AI."
    actions={[
      { variant: 'primary', text: 'Read Documentation', href: '/docs/', icon: 'tabler:book' },
      { variant: 'secondary', text: 'View on GitHub', href: 'https://github.com/openclaw/openclaw', icon: 'tabler:brand-github' },
    ]}
  />

  <!-- 导流横幅 -->
  <div class="container mx-auto px-4 pb-8">
    <TrafficBanner variant="footer" site="all" />
  </div>
</Layout>
```

### Moltbot → Openclaw 更名着陆页 (src/pages/moltbot-to-openclaw.astro)

**关键页面 - 截获"moltbot"搜索流量**

```astro
---
import Layout from '~/layouts/Layout.astro';
import Hero from '~/components/widgets/Hero.astro';
import CallToAction from '~/components/widgets/CallToAction.astro';
import AffiliateBanner from '~/components/custom/AffiliateBanner.astro';

const metadata = {
  title: 'Moltbot is now Openclaw: What Changed? (2026 Migration Guide)',
  description: 'Moltbot has been renamed to Openclaw. Learn why the rebrand happened, what\'s new, and how to migrate your existing Moltbot setup.',
  keywords: ['moltbot', 'openclaw', 'moltbot renamed', 'openclaw vs moltbot', 'moltbot to openclaw', 'moltbot migration'],
};
---

<Layout metadata={metadata}>
  <Hero
    title="Moltbot is now <span class='text-primary'>Openclaw</span>"
    subtitle="Everything you loved about Moltbot, now with a new name and expanded capabilities. Here's what changed and how to migrate."
    actions={[
      { variant: 'primary', text: 'Get Openclaw', href: '/docs/install/mac-mini/', icon: 'tabler:download' },
      { text: 'Migration Guide', href: '/docs/migration/from-moltbot/', icon: 'tabler:arrow-right' },
    ]}
  />

  <section class="py-16 bg-slate-900">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-3xl font-bold text-white mb-8 text-center">Why Another Rebrand?</h2>
      
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="bg-slate-800 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-blue-400 mb-3">🔓 The New Name</h3>
          <p class="text-slate-300">"Openclaw" reflects the project's commitment to openness. The "open" emphasizes the open-source nature, while "claw" honors the project's origins as Clawdbot.</p>
        </div>
        <div class="bg-slate-800 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-blue-400 mb-3">🚀 What's New</h3>
          <p class="text-slate-300">Beyond the name, Openclaw introduces improved integrations, better performance, and a more flexible architecture for building custom automations.</p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-white mb-8 text-center">Migration from Moltbot</h2>
      
      <div class="space-y-6 mb-12">
        <div class="flex items-start gap-4">
          <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
          <div>
            <h4 class="text-lg font-semibold text-white">Backup Your Data</h4>
            <p class="text-slate-400">Export your existing Moltbot configuration before upgrading.</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
          <div>
            <h4 class="text-lg font-semibold text-white">Update Docker Image</h4>
            <p class="text-slate-400">Change your docker-compose.yml to use the new openclaw image.</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
          <div>
            <h4 class="text-lg font-semibold text-white">Import Configuration</h4>
            <p class="text-slate-400">Openclaw will automatically import your Moltbot settings on first run.</p>
          </div>
        </div>
      </div>

      <AffiliateBanner platform="digitalocean" context="moltbot-to-openclaw" />
    </div>
  </section>

  <CallToAction
    title="Ready to Try Openclaw?"
    subtitle="Get started with our Mac Mini installation guide or Docker setup tutorial."
    actions={[
      { variant: 'primary', text: 'Mac Mini Guide', href: '/docs/install/mac-mini/', icon: 'tabler:device-desktop' },
      { variant: 'secondary', text: 'Docker Setup', href: '/docs/install/docker/', icon: 'tabler:container' },
    ]}
  />
</Layout>
```

### 三品牌对比页 (src/pages/clawdbot-vs-moltbot-vs-openclaw.astro)

```astro
---
import Layout from '~/layouts/Layout.astro';
import Hero from '~/components/widgets/Hero.astro';
import CallToAction from '~/components/widgets/CallToAction.astro';

const metadata = {
  title: 'Clawdbot vs Moltbot vs Openclaw: Complete Brand History (2026)',
  description: 'Complete history of the Clawdbot → Moltbot → Openclaw rebrand. Understand what changed, what stayed the same, and which version you should use.',
  keywords: ['clawdbot', 'moltbot', 'openclaw', 'clawdbot vs moltbot', 'moltbot vs openclaw', 'brand history'],
};

const timeline = [
  {
    date: '2024-2025',
    name: 'Clawdbot',
    description: 'The original project name. Focused on "claw" metaphor for grabbing and processing information.',
    status: 'deprecated'
  },
  {
    date: 'Early 2026',
    name: 'Moltbot',
    description: 'First rebrand. "Molt" reflected growth and transformation, like a lobster shedding its shell.',
    status: 'deprecated'
  },
  {
    date: 'Now',
    name: 'Openclaw',
    description: 'Current name. Emphasizes open-source philosophy while honoring the Clawdbot origins.',
    status: 'current'
  }
];
---

<Layout metadata={metadata}>
  <Hero
    title="From <span class='text-slate-500'>Clawdbot</span> to <span class='text-orange-400'>Moltbot</span> to <span class='text-primary'>Openclaw</span>"
    subtitle="The complete brand history and what it means for you."
    actions={[
      { variant: 'primary', text: 'Get Openclaw', href: '/docs/install/mac-mini/', icon: 'tabler:download' },
      { text: 'Migration Guide', href: '/docs/migration/from-moltbot/', icon: 'tabler:arrow-right' },
    ]}
  />

  <section class="py-16 bg-slate-900">
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 class="text-3xl font-bold text-white mb-12 text-center">Brand Timeline</h2>
      
      <div class="space-y-8">
        {timeline.map((item, index) => (
          <div class="flex items-start gap-6">
            <div class={`w-4 h-4 rounded-full mt-2 flex-shrink-0 ${
              item.status === 'current' ? 'bg-blue-500' : 'bg-slate-600'
            }`} />
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <span class="text-sm text-slate-500">{item.date}</span>
                {item.status === 'current' && (
                  <span class="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">Current</span>
                )}
              </div>
              <h3 class={`text-2xl font-bold mb-2 ${
                item.status === 'current' ? 'text-blue-400' : 'text-slate-400'
              }`}>
                {item.name}
              </h3>
              <p class="text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div class="mt-16 bg-slate-800 rounded-lg p-8">
        <h3 class="text-2xl font-bold text-white mb-4">What Should You Use?</h3>
        <p class="text-slate-300 mb-6">
          <strong class="text-blue-400">Openclaw</strong> is the current and recommended version. 
          It includes all features from Moltbot and Clawdbot, plus new improvements.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="/docs/install/mac-mini/" class="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-colors">
            Install Openclaw
          </a>
          <a href="/docs/migration/from-moltbot/" class="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors">
            Migrate from Moltbot
          </a>
        </div>
      </div>
    </div>
  </section>

  <CallToAction
    title="Ready to Get Started?"
    subtitle="Join the Openclaw community and take control of your AI."
    actions={[
      { variant: 'primary', text: 'Read Documentation', href: '/docs/', icon: 'tabler:book' },
      { variant: 'secondary', text: 'View on GitHub', href: 'https://github.com/openclaw/openclaw', icon: 'tabler:brand-github' },
    ]}
  />
</Layout>
```

### 文档内容规范 (src/content/docs/)

**Frontmatter规范**:

```yaml
---
title: "Install Openclaw on Mac Mini M4 (Complete Guide 2026)"
description: "Step-by-step tutorial to install Openclaw (formerly Moltbot) on Apple Silicon Mac Mini. Hardware requirements, Docker setup, and performance optimization for self-hosted AI." 
keywords:
  - openclaw mac mini
  - moltbot mac install
  - mac mini m4 docker
  - self-hosted ai mac
  - openclaw installation
  - clawdbot alternative
lastUpdated: 2026-01-30
sidebar:
  label: Mac Mini M4
  order: 1
  badge: Popular
---
```

**内容结构**:
1. 导入组件
2. H1标题含关键词，使用长尾关键词对H2、H3标题进行布局
3. 首段100字内回答核心问题，提及品牌历史
4. 每300字一个H2
5. 代码块带文件名标签
6. 每篇至少3个内链（指向相关文档）
7. 文章中部和底部插入NewsletterForm
8. 底部添加"Related Articles"列表
9. 关键词密度约为2-3%
10. 适当位置插入联盟链接
11. **必须提及品牌更名历史**（自然融入）

---

## SEO硬性要求

### Schema.org标记 (必须)

| 页面类型 | Schema类型 | 必需属性 |
|---------|-----------|---------|
| 首页/着陆页 | SoftwareApplication | name, alternateName[Moltbot, Clawdbot], operatingSystem, offers |
| 安装教程 | HowTo | step(position, name, text), supply, tool |
| 对比页 | ComparisonWebpage | comparedItem, featureList |
| FAQ页 | FAQPage | mainEntity(Question+Answer, answer字数40-60英文单词) |
| 博客 | BlogPosting | headline, datePublished, author |
| 产品页 | Product | name, offers, aggregateRating |

### Meta标签检查清单

- [ ] title: 60字符以内，前置主关键词
- [ ] description: 150-160字符，含行动号召
- [ ] canonical: 自引用URL
- [ ] og:title, og:description, og:site_name, og:image
- [ ] twitter:card = summary_large_image
- [ ] 内部链接: 每篇3+个，描述性锚文本
- [ ] 图片alt: 描述性，含关键词（自然）
- [ ] 关键词密度: 2-3%
- [ ] 页面加载速度: < 3秒
- [ ] 移动端适配: 100%响应式

### Robots.txt

```
User-agent: *
Allow: /

Sitemap: https://openclawwiki.org/sitemap-index.xml

# 禁止爬取开发环境
Disallow: /_astro/
Disallow: /api/
```

---

## 联盟营销集成

### 联盟链接配置

**文件**: `src/utils/affiliates.ts`

```typescript
export const affiliates = {
  // 云服务器
  digitalOcean: {
    url: 'https://m.do.co/c/YOUR_CODE',
    name: 'DigitalOcean',
    offer: '$200 Free Credit',
    category: 'cloud',
    commission: '$25-100 per signup'
  },
  vultr: {
    url: 'https://www.vultr.com/?ref=YOUR_ID',
    name: 'Vultr', 
    offer: '$100 Credit',
    category: 'cloud',
    commission: '$25-50 per signup'
  },
  linode: {
    url: 'https://www.linode.com/lp/refer/?r=YOUR_CODE',
    name: 'Linode',
    offer: '$100 Credit',
    category: 'cloud',
    commission: '$20-50 per signup'
  },
  hetzner: {
    url: 'https://hetzner.cloud/?ref=YOUR_CODE',
    name: 'Hetzner',
    offer: '€20 Credit',
    category: 'cloud',
    commission: '€10 per signup'
  },
  // 硬件
  amazonMacMini: {
    url: 'https://amzn.to/YOUR_TAG',
    name: 'Amazon',
    offer: 'Mac Mini M4',
    category: 'hardware',
    commission: '1-4% per sale'
  },
  amazonRaspberryPi: {
    url: 'https://amzn.to/YOUR_TAG_RPI',
    name: 'Amazon',
    offer: 'Raspberry Pi 5',
    category: 'hardware',
    commission: '1-4% per sale'
  },
  // 安全
  expressvpn: {
    url: 'https://xvp.sh/YOUR_CODE',
    name: 'ExpressVPN',
    offer: '30% Off',
    category: 'security',
    commission: '$13-36 per signup'
  },
  tailscale: {
    url: 'https://tailscale.com/pricing?referral=YOUR_CODE',
    name: 'Tailscale',
    offer: 'Free Tier + Credits',
    category: 'security',
    commission: '$5-20 per signup'
  }
};

export type AffiliateKey = keyof typeof affiliates;

// 根据内容类型推荐联盟链接
export const getRecommendedAffiliates = (contentType: string): AffiliateKey[] => {
  const recommendations: Record<string, AffiliateKey[]> = {
    'install': ['digitalOcean', 'vultr', 'linode'],
    'mac-mini': ['amazonMacMini'],
    'docker': ['digitalOcean', 'vultr'],
    'cloud': ['digitalOcean', 'vultr', 'linode', 'hetzner'],
    'security': ['expressvpn', 'tailscale'],
    'hardware': ['amazonMacMini', 'amazonRaspberryPi'],
    'default': ['digitalOcean', 'amazonMacMini']
  };
  
  return recommendations[contentType] || recommendations['default'];
};
```

### 植入规则

1. **云服务器教程**: 顶部横幅 + 步骤中提及
2. **硬件指南**: 产品卡片 + Amazon链接
3. **安全文章**: ExpressVPN/Tailscale链接
4. **所有联盟链接**: target="_blank" rel="sponsored noopener"
5. **页面Footer**: Affiliate Disclosure声明
6. **追踪**: 使用data-affiliate和data-context属性追踪效果

---

## 内容发布计划

### Phase 1: 核心内容 (Week 1-2)

| 优先级 | 页面 | 关键词 | 字数 |
|--------|------|--------|------|
| P0 | 首页 | openclaw, moltbot, clawdbot | 500+ |
| P0 | Moltbot → Openclaw | moltbot to openclaw, openclaw vs moltbot | 800+ |
| P0 | 三品牌对比 | clawdbot vs moltbot vs openclaw | 1000+ |
| P0 | What is Openclaw | what is openclaw | 600+ |
| P0 | Mac Mini安装 | openclaw mac mini install | 1500+ |
| P0 | Docker安装 | openclaw docker | 1200+ |
| P0 | Is It Safe | openclaw security | 800+ |
| P0 | 从Moltbot迁移 | migrate from moltbot | 1000+ |

### Phase 2: 扩展内容 (Week 3-4)

| 优先级 | 页面 | 关键词 | 字数 |
|--------|------|--------|------|
| P1 | Railway安装 | openclaw railway | 800+ |
| P1 | AWS安装 | openclaw aws | 1000+ |
| P1 | WhatsApp配置 | openclaw whatsapp | 600+ |
| P1 | Telegram配置 | openclaw telegram | 600+ |
| P1 | Openclaw vs n8n | openclaw vs n8n | 1000+ |
| P1 | Openclaw vs Make | openclaw vs make | 1000+ |
| P1 | 从Clawdbot迁移 | migrate from clawdbot | 800+ |

### Phase 3: 长尾内容 (Week 5-8)

| 优先级 | 页面 | 关键词 | 字数 |
|--------|------|--------|------|
| P2 | 更名公告博客 | moltbot renamed to openclaw | 500+ |
| P2 | 使用评测 | openclaw review | 1200+ |
| P2 | 功能介绍 | openclaw features | 800+ |
| P2 | 定价说明 | openclaw pricing | 600+ |
| P2 | 故障排除 | openclaw troubleshooting | 1000+ |
| P2 | 最佳实践 | openclaw best practices | 800+ |
| P2 | 品牌历史 | clawdbot moltbot openclaw history | 800+ |

---

## 开发执行顺序

### Phase 1: 基建 (Day 1)
1. [ ] `npm create astro@latest -- --template onwidget/astrowind`
2. [ ] `npm install @astrojs/starlight @astrojs/mdx astro-icon`
3. [ ] 创建 `astro.config.mjs` (复制上方配置)
4. [ ] 创建 `src/config/starlight.ts`
5. [ ] 创建 `src/styles/starlight-custom.css`
6. [ ] 创建 `src/utils/affiliates.ts`
7. [ ] 测试 `npm run dev` (验证AstroWind+Starlight共存)

### Phase 2: 核心组件 (Day 1-2)
8. [ ] 创建 `src/components/starlight/SiteTitle.astro`
9. [ ] 创建 `src/components/starlight/Head.astro`
10. [ ] 创建 `src/components/custom/RebrandNotice.astro`
11. [ ] 创建 `src/components/custom/NewsletterForm.tsx`
12. [ ] 创建 `src/components/custom/AffiliateBanner.astro`
13. [ ] 创建 `src/components/custom/TrafficBanner.astro`
14. [ ] 验证组件渲染正常

### Phase 3: 核心内容 (Day 2-3)
15. [ ] 创建 `src/pages/index.astro` (精美落地页)
16. [ ] 创建 `src/pages/moltbot-to-openclaw.astro` (更名着陆页)
17. [ ] 创建 `src/pages/clawdbot-vs-moltbot-vs-openclaw.astro` (三品牌对比)
18. [ ] 创建 `src/pages/what-is-openclaw.astro` (介绍页)
19. [ ] 创建 `src/content/docs/index.mdx` (文档首页)
20. [ ] 创建 `src/content/docs/install/mac-mini.mdx` (P0文章)
21. [ ] 创建 `src/content/docs/install/docker.mdx`
22. [ ] 创建 `src/content/docs/migration/from-moltbot.mdx`
23. [ ] 创建 `src/content/docs/security/is-it-safe.mdx`

### Phase 4: SEO与部署 (Day 3-4)
24. [ ] 验证所有Schema标记 (Google Rich Results Test)
25. [ ] 验证内部链接结构
26. [ ] 添加Google Analytics 4
27. [ ] 构建 `npm run build` 
28. [ ] 部署到Cloudflare Pages
29. [ ] 提交Google Search Console
30. [ ] 创建并提交Sitemap

### Phase 5: 内容扩展 (Week 2-4)
31. [ ] 发布剩余安装教程
32. [ ] 发布配置指南
33. [ ] 发布对比文章
34. [ ] 发布博客文章
35. [ ] 监控搜索排名并优化

---

## 验证检查清单

### 本地开发验证
```bash
# 运行这些命令后检查:
npm run dev

# ✓ http://localhost:4321/ 显示AstroWind首页
# ✓ http://localhost:4321/moltbot-to-openclaw/ 显示更名页
# ✓ http://localhost:4321/clawdbot-vs-moltbot-vs-openclaw/ 显示对比页
# ✓ http://localhost:4321/what-is-openclaw/ 显示介绍页
# ✓ http://localhost:4321/docs/ 显示Starlight文档(有侧边栏)
# ✓ http://localhost:4321/docs/install/mac-mini/ 显示文章
# ✓ 文档页顶部有"Back"返回链接
# ✓ 暗色模式代码块可读
# ✓ 移动端导航正常折叠
# ✓ 更名通知组件正常显示
# ✓ 联盟链接有sponsored标记
# ✓ 导流链接正常显示
```

### 生产构建验证
```bash
npm run build

# 检查dist/目录:
# ✓ dist/index.html 存在
# ✓ dist/moltbot-to-openclaw/index.html 存在
# ✓ dist/clawdbot-vs-moltbot-vs-openclaw/index.html 存在
# ✓ dist/what-is-openclaw/index.html 存在
# ✓ dist/docs/index.html 存在
# ✓ dist/sitemap-0.xml 存在且有效
# ✓ dist/robots.txt 存在
# ✓ 图片已优化为WebP
# ✓ 无404错误
```

### SEO验证
```bash
# 使用工具验证:
# ✓ Google Rich Results Test - Schema有效
# ✓ PageSpeed Insights - 移动端>90分
# ✓ Mobile-Friendly Test - 通过
# ✓ 关键词密度2-3%
# ✓ 所有图片有alt属性
# ✓ 内部链接结构完整
# ✓ 三品牌名都在Schema中
```

---

## 竞争对手分析

### 主要竞争对手

| 网站 | 优势 | 劣势 | 我们的机会 |
|------|------|------|-----------|
| n8n.io | 成熟产品，大量文档 | 复杂度高，学习曲线陡 | 强调简单易用 |
| make.com | 可视化强，集成多 | 价格高，依赖云端 | 强调自托管+免费 |
| zapier.com | 品牌知名度高 | 价格昂贵，功能受限 | 强调无订阅费 |
| github.com/openclaw | 官方源 | 文档不足，SEO弱 | 填补信息空白 |

### 差异化策略

1. **信息差优势**: 利用连续更名事件的信息真空期，快速建立权威
2. **三品牌覆盖**: 同时截获clawdbot、moltbot、openclaw的流量
3. **SEO优先**: 针对特定长尾关键词，竞争对手未覆盖
4. **社区驱动**: 建立newsletter和社区，形成用户粘性

---

## 变现策略详解

### 短期变现 (0-3个月)

| 渠道 | 预期收入 | 实施难度 | 优先级 |
|------|---------|---------|--------|
| 云服务器联盟 | $50-200/月 | 低 | P0 |
| Amazon联盟 | $30-100/月 | 低 | P0 |
| Adsense | $20-50/月 | 低 | P1 |
| Newsletter广告 | $0-50/月 | 中 | P2 |

### 中期变现 (3-6个月)

| 渠道 | 预期收入 | 实施难度 | 优先级 |
|------|---------|---------|--------|
| 高级联盟 | $100-300/月 | 中 | P1 |
| 赞助内容 | $100-500/篇 | 中 | P2 |
| 付费Newsletter | $50-200/月 | 高 | P3 |
| 咨询服务 | $200-500/月 | 高 | P3 |

### 变现优化建议

1. **联盟链接追踪**: 使用UTM参数追踪每个链接的转化率
2. **A/B测试**: 测试不同位置的联盟横幅效果
3. **内容营销**: 高价值内容中自然植入联盟链接
4. **邮件营销**: Newsletter中推荐相关产品和服务
5. **再营销**: 使用Google Ads再营销访问过联盟页面的用户

---

## 参考资源

- **Openclaw官方文档**：https://github.com/openclaw/openclaw/tree/main/docs
- **Openclaw官方github**: https://github.com/openclaw/openclaw
- **AstroWind**: https://github.com/onwidget/astrowind
- **Starlight Docs**: https://starlight.astro.build/
- **Schema.org**: https://schema.org/SoftwareApplication
- **Google Search Console**: https://search.google.com/search-console
- **PageSpeed Insights**: https://pagespeed.web.dev/

---


**提示词版本**: 3.0  
**最后更新**: 2026-01-30  
**适用模型**: Claude 4 Sonnet, GPT-5, Cursor Composer, Trae, Windsurf
