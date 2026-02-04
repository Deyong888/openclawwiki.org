---
name: "seo-audit"
description: "Audits and reviews SEO issues on the site. Invoke when the user mentions SEO audit, review, diagnosis, or wants to improve search ranking."
---

# SEO Audit Skill

This skill helps audit, review, and diagnose SEO issues on a website.

## When to Use
- User asks for an SEO audit or review
- User wants to improve search rankings
- User asks about meta tags, sitemaps, or structured data
- User wants to check for broken links or performance issues affecting SEO

## Audit Checklist

### 1. Technical SEO
- [ ] **Robots.txt**: Is it present and correctly configured?
- [ ] **Sitemap.xml**: Is it present and up-to-date?
- [ ] **Canonical Tags**: Are they used to prevent duplicate content?
- [ ] **SSL/HTTPS**: Is the site secure?
- [ ] **Mobile Friendliness**: Is the site responsive?
- [ ] **Page Speed**: Are core web vitals optimized? (LCP, FID, CLS)

### 2. On-Page SEO
- [ ] **Title Tags**: Unique, under 60 chars, includes keywords.
- [ ] **Meta Descriptions**: Unique, under 160 chars, persuasive.
- [ ] **H1 Tags**: One per page, includes main keyword.
- [ ] **Header Structure**: Proper H1 -> H2 -> H3 hierarchy.
- [ ] **Images**: Alt text present for all images? File sizes optimized?
- [ ] **URL Structure**: Clean, descriptive, uses hyphens.
- [ ] **Internal Linking**: Are important pages linked to?

### 3. Content Quality
- [ ] **Keyword Usage**: Natural usage, not stuffed.
- [ ] **Content Length**: Sufficient depth for the topic?
- [ ] **Freshness**: Is content up-to-date?
- [ ] **Readability**: Short paragraphs, bullet points.

### 4. Structured Data (Schema.org)
- [ ] **JSON-LD**: Is valid schema markup present? (Organization, Article, Product, etc.)
- [ ] **Open Graph**: Are social sharing tags (og:title, og:image) set?

## Action Plan Template

When providing an audit, output an action plan:

| Priority | Issue | Recommendation | Impact |
|----------|-------|----------------|--------|
| High     | Missing Title Tags | Add unique titles to X pages | High |
| Medium   | Large Images | Compress images on homepage | Medium |
| Low      | Missing Alt Text | Add alt text to decorative images | Low |

## Tools to Recommend
- Google Search Console
- Google Analytics
- Lighthouse / PageSpeed Insights
- Screaming Frog (for deep crawls)
