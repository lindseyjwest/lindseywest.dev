import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { getMetaTags, getPageMetadata, pages, siteOrigin } from './src/data/pageMetadata'
import type { PageMetadata } from './src/data/pageMetadata'

const metadataBlock = /<!-- page-metadata:start -->[\s\S]*?<!-- page-metadata:end -->/
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]!)

function renderMetadata(html: string, page: PageMetadata) {
  const tags = [
    `<title>${escapeHtml(page.title)}</title>`,
    ...getMetaTags(page).map(tag => `<meta ${tag.name ? 'name' : 'property'}="${escapeHtml((tag.name ?? tag.property)!)}" content="${escapeHtml(tag.content)}" />`),
  ]
  if (page.path) tags.push(`<link rel="canonical" href="${siteOrigin}${page.path}" />`)
  if (!metadataBlock.test(html)) throw new Error('Missing page metadata block in index.html')
  return html.replace(metadataBlock, `<!-- page-metadata:start -->\n    ${tags.join('\n    ')}\n    <!-- page-metadata:end -->`)
}

function pageMetadata(): Plugin {
  return {
    name: 'page-metadata',
    transformIndexHtml(html, context) {
      const pathname = context.server
        ? (context.originalUrl ?? context.path).split(/[?#]/)[0]
        : '/'
      return renderMetadata(html, getPageMetadata(pathname))
    },
    // Emit extensionless-route HTML entries after Vite has finalized index.html.
    // Cloudflare can serve /about.html at /about without a redirect rule.
    generateBundle: {
      order: 'post',
      handler(_options, bundle) {
        const index = bundle['index.html']
        if (!index || index.type !== 'asset') this.error('Missing production index.html')
        const html = String(index.source)
        for (const page of pages) {
          if (page.path && page.path !== '/') {
            this.emitFile({ type: 'asset', fileName: `${page.path.slice(1)}.html`, source: renderMetadata(html, page) })
          }
        }
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), pageMetadata()],
})
