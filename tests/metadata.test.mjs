import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'

const output = name => new URL(`../dist/${name}`, import.meta.url)
const routes = [
  ['/', 'index.html', 'Lindsey West | Data, Analytics &amp; Automation'],
  ['/about', 'about.html', 'About | Lindsey West'],
  ['/projects', 'projects.html', 'Projects | Lindsey West'],
  ['/resume', 'resume.html', 'Resume | Lindsey West'],
]

for (const [route, file, title] of routes) {
  test(`${route} exposes its metadata before JavaScript runs`, () => {
    const html = readFileSync(output(file), 'utf8')
    const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1]
    assert.ok(head, 'Build the site with npm run build before running these checks')
    assert.equal([...head.matchAll(/<title>/g)].length, 1)
    assert.ok(head.includes(`<title>${title}</title>`))
    assert.ok(head.includes(`<link rel="canonical" href="https://lindseywest.dev${route}"`))
    const meta = new Map([...head.matchAll(/<meta (?:name|property)="([^"]+)" content="([^"]*)"/g)].map(match => [match[1], match[2]]))
    assert.ok(meta.get('description')?.length > 50)
    assert.equal(meta.get('robots'), 'index, follow')
    assert.equal(meta.get('og:title'), title)
    assert.equal(meta.get('twitter:title'), title)
    assert.equal(meta.get('og:description'), meta.get('description'))
    assert.equal(meta.get('twitter:description'), meta.get('description'))
    assert.equal(meta.get('og:url'), `https://lindseywest.dev${route}`)
    assert.equal(meta.get('og:image'), 'https://lindseywest.dev/images/social-preview.png')
    assert.equal(meta.get('twitter:image'), meta.get('og:image'))
    assert.equal(meta.get('twitter:card'), 'summary_large_image')
    assert.ok(meta.get('og:image:alt'))
    const entry = html.match(/<script[^>]+src="([^"]+)"/)?.[1]
    assert.ok(entry?.startsWith('/assets/'))
    assert.ok(existsSync(output(entry.slice(1))))
    assert.doesNotMatch(head, /localhost|127\.0\.0\.1/)
  })
}

test('page descriptions are distinct', () => {
  const descriptions = routes.map(([, file]) => readFileSync(output(file), 'utf8').match(/name="description" content="([^"]+)"/)?.[1])
  assert.equal(new Set(descriptions).size, routes.length)
})

test('the sharing image is a real 1200 × 630 PNG', () => {
  const image = readFileSync(output('images/social-preview.png'))
  assert.equal(image.subarray(0, 8).toString('hex'), '89504e470d0a1a0a')
  assert.equal(image.readUInt32BE(16), 1200)
  assert.equal(image.readUInt32BE(20), 630)
})

test('the build preserves the existing SPA fallback arrangement', () => {
  assert.equal(existsSync(output('404.html')), false)
})
