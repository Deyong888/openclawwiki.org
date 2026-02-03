- [x] 迁移常用工具与技能文档 (`docs/tools/` -> `src/content/docs/docs/tools/`)。
- [x] 修复因迁移导致的 404 链接 (Tools 部分已修复)。
- [x] 补充 Gmail 配置文档 (`docs/config/gmail.mdx`)。
- [x] 完善 Telegram/WhatsApp 配置文档。

### 迭代总结
完成了核心文档的迁移工作，重点优化了文档结构和内容质量：
1. **SEO & EEAT**:
   - 增加了 `Mac Mini`, `Docker`, `Security` 等高搜索意图的文档。
   - 使用 Starlight 组件 (`Steps`, `Tabs`, `Aside`) 提升阅读体验。
   - 修复了大量内部链接，确保导航流畅。
2. **内容增量**:
   - 补充了 `Gmail`, `Telegram`, `WhatsApp` 的详细配置指南。
   - 增加了 `Gateway` 安全与故障排查的深度内容。
3. **架构优化**:
   - 统一了 YAML Frontmatter 格式。
   - 建立了清晰的目录结构 (`gateway`, `channels`, `config`, `tools`)。

## 迭代 7: 文档审查与发布准备 (已完成)

### 目标
- [x] **全站链接检查**: 运行 `astro build` 成功，修复了 MDX 语法错误 (`local-models.mdx`)。
- [x] **内容审查**: 
    - 优化了 `docs/index.mdx` 导览页，增加 Config 和 Tools 入口。
    - 完善了 `config/` 下的 Telegram/WhatsApp 文档，增加了指向 `channels/` 的交叉链接。
- [x] **最终构建**: `dist/` 目录已生成，静态资源压缩完成。

## 迭代 8: 紧急修复与优化 (已完成)

### 目标
- [x] **修复 404 错误**: 解决 `trailingSlash` 配置冲突问题，统一设置为 `always` (在 `astro.config.ts` 和 `src/config.yaml` 中)，确保 URL 结构一致且符合目录索引生成的行为。

## 迭代 9: 交互式工具集开发 (进行中)

### 目标
- [x] **创建工具页面**: 新增 `src/pages/tools.astro` 作为工具集入口。
- [x] **实现 Docker Compose 生成器**: 支持 Local/VPS 部署配置生成，集成 Vultr/DigitalOcean 推广链接。
- [x] **实现 Claude API 成本估算器**: 提供基于使用强度和任务复杂度的成本预测。
- [x] **实现安全策略生成器**: 可视化生成 OpenClaw 安全白名单配置 (allowedCommands)。
- [x] **导航更新**: 在顶部菜单栏增加 `Tools` 入口。
- [x] **资源植入**: 增加推荐资源板块 (stoiclines.store, linktoai.top, 24kwebgames.com)。

## 迭代 10: 多语言架构升级 (进行中)

### 目标
- [x] **修复 Sidebar 配置错误**: 将 `starlightConfig` 中的 `sidebar` 结构从对象改为数组，利用 `translations` 属性实现多语言菜单。
- [x] **完善中文翻译**: 确保 `Start Here`, `Migration` 等核心栏目的中文标签准确。
- [x] **检查徽章 (Badges)**: 确保 "New", "Latest" 等徽章文案也实现本地化。
- [x] **验证 i18n 路由**: 确保 `/zh/` 路径下的侧边栏能正确显示中文（或回退英文）并高亮当前页面。
