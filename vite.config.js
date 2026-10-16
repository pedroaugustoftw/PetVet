import{defineConfig}from'vite';
import{seoHead,siteUrl}from'./scripts/seo.mjs';
export default defineConfig({plugins:[{name:'petvet-seo',transformIndexHtml(html){return html.replace('<!-- PETVET_SEO -->',seoHead())},generateBundle(){this.emitFile({type:'asset',fileName:'robots.txt',source:`User-agent: *\nAllow: /\n${siteUrl?`\nSitemap: ${siteUrl}sitemap.xml\n`:''}`});if(siteUrl)this.emitFile({type:'asset',fileName:'sitemap.xml',source:`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}</loc></url></urlset>`})}}]});
