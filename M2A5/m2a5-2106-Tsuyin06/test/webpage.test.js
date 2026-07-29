import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'

const path = (rel) => fileURLToPath(new URL(rel, import.meta.url))
const read = (rel) => (existsSync(path(rel)) ? readFileSync(path(rel), 'utf8') : '')

// The site is multi-page: students make ALL of it responsive from one stylesheet.
const PAGES = ['index.html', 'menu.html', 'contact.html']
const html = Object.fromEntries(PAGES.map((p) => [p, read(`../src/${p}`)]))
const doc = Object.fromEntries(
  PAGES.map((p) => [p, html[p] ? new JSDOM(html[p]).window.document : null]),
)

const cssRaw = read('../src/styles.css')
// Strip comments so we only judge the CSS the student actually wrote.
const css = cssRaw.replace(/\/\*[\s\S]*?\*\//g, '')
const cssFlat = css.replace(/\s+/g, '').toLowerCase()

// Pull the body of every @media block so we can see what changes inside them.
function mediaBlocks() {
  const out = []
  const re = /@media[^{]*\{/gi
  let m
  while ((m = re.exec(css))) {
    let i = re.lastIndex
    let depth = 1
    while (i < css.length && depth > 0) {
      if (css[i] === '{') depth++
      else if (css[i] === '}') depth--
      i++
    }
    out.push({ header: m[0].toLowerCase(), body: css.slice(re.lastIndex, i - 1) })
    re.lastIndex = i
  }
  return out
}
const media = mediaBlocks()

// ---- Part 1: the given site stays intact, styled from one external file ----
describe('Part 1 - structure and external CSS', () => {
  it('all three pages are still valid HTML5 (doctype, <html lang>, <body>)', () => {
    for (const p of PAGES) {
      expect(doc[p], `${p} is missing or empty - keep all three pages`).not.toBeNull()
      expect(doc[p].doctype?.name?.toLowerCase(), `Start ${p} with <!DOCTYPE html>`).toBe('html')
      expect(doc[p].documentElement.getAttribute('lang'), `Keep <html lang="en"> in ${p}`).toBeTruthy()
      expect(doc[p].body, `Keep a <body> in ${p}`).not.toBeNull()
    }
  })

  it('every page links the shared external styles.css', () => {
    for (const p of PAGES) {
      const link = doc[p]?.querySelector('link[rel="stylesheet"][href]')
      expect(link, `Link styles.css from the <head> of ${p}`).not.toBeNull()
      expect(link.getAttribute('href').toLowerCase(), `${p} should link styles.css`).toContain('styles.css')
    }
  })

  it('keeps all styling in the separate CSS file (no inline style="" and no <style> blocks)', () => {
    for (const p of PAGES) {
      expect(doc[p]?.querySelectorAll('[style]').length, `Remove inline style="" from ${p} - style by class in styles.css`).toBe(0)
      expect(doc[p]?.querySelector('style'), `Remove the <style> block from ${p} - all CSS lives in styles.css`).toBeNull()
    }
  })

  it('every page has the responsive viewport meta tag', () => {
    for (const p of PAGES) {
      const meta = doc[p]?.querySelector('meta[name="viewport"]')
      expect(meta, `Keep <meta name="viewport" content="width=device-width, initial-scale=1"> in ${p}`).not.toBeNull()
      expect((meta.getAttribute('content') || '').toLowerCase(), `${p} viewport should set width=device-width`).toContain('width=device-width')
    }
  })
})

// ---- Part 2: the responsive work (all in styles.css) ----
describe('Part 2 - responsive CSS', () => {
  it('styles.css defines at least one @media query', () => {
    expect(media.length, 'Add a @media query to styles.css to adapt the layout by screen size').toBeGreaterThan(0)
  })

  it('a media query responds to screen width (min-width or max-width)', () => {
    expect(media.some((b) => /(min-width|max-width)/.test(b.header)), 'Your @media query should test min-width or max-width').toBe(true)
  })

  it('a media query actually changes the layout (not just colours or fonts)', () => {
    const layoutProp = /(display|flex-direction|flex-wrap|grid-template|grid-template-columns|width|max-width|flex\s*:|flex-basis|columns)\s*:/i
    expect(media.some((b) => layoutProp.test(b.body)), 'Inside a @media query, change a layout property (e.g. flex-direction: column, or grid-template-columns)').toBe(true)
  })

  it('uses fluid sizing (%, fr, vw, max-width, or flex-wrap) so content can shrink', () => {
    const fluid =
      /%/.test(css) ||
      /\b\d*\.?\d+fr\b/.test(css) ||
      /\b\d*\.?\d+v[wh]\b/.test(css) ||
      /minmax\(/i.test(css) ||
      cssFlat.includes('max-width') ||
      cssFlat.includes('flex-wrap:wrap')
    expect(fluid, 'Replace fixed pixel widths with fluid ones: %, max-width, fr, or flex-wrap: wrap').toBe(true)
  })

  it('makes images responsive (img { max-width: ... })', () => {
    const responsiveImg = /(^|[\s,{};])img\s*\{[^}]*max-width/i.test(css)
    expect(responsiveImg, 'Add an img rule with max-width (e.g. img { max-width: 100%; height: auto; }) so images never overflow').toBe(true)
  })
})

// ---- Student info ----
describe('Student info (student.json)', () => {
  const info = JSON.parse(read('../student.json') || '{}')
  it('student.json is filled in', () => {
    for (const field of [
      'classCode', 'fullName', 'studentNumber',
      'studentEmail', 'personalEmail', 'githubAccount',
    ]) {
      expect(info[field], `Set "${field}" in student.json`).toBeTruthy()
    }
  })
})
