import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'

const path = (rel) => fileURLToPath(new URL(rel, import.meta.url))
const read = (rel) => readFileSync(path(rel), 'utf8')

const doc = new JSDOM(read('../src/index.html')).window.document

const cssPath = path('../src/styles.css')
const cssRaw = existsSync(cssPath) ? readFileSync(cssPath, 'utf8') : ''
// CSS with comments stripped, so we only see rules the student actually wrote.
const css = cssRaw.replace(/\/\*[\s\S]*?\*\//g, '')
const cssFlat = css.replace(/\s+/g, '').toLowerCase()

// Body of the first rule for a class selector, '' if the rule is missing/empty.
const ruleBody = (sel) => {
  const m = css.match(new RegExp(sel.replace('.', '\\.') + '\\s*\\{([^}]*)\\}'))
  return m ? m[1].trim() : ''
}
const hasDeclarations = (sel) => /[a-z-]+\s*:/i.test(ruleBody(sel))

// ---- Module 1 recall: valid, semantic HTML5 ----
describe('Review, part 1 – HTML structure (Module 1)', () => {
  it('is a valid HTML5 page (doctype, <html lang>, <body>)', () => {
    expect(doc.doctype?.name?.toLowerCase(), 'Start the file with <!DOCTYPE html>').toBe('html')
    expect(doc.documentElement.getAttribute('lang'), 'Set a language, e.g. <html lang="en">').toBeTruthy()
    expect(doc.body, 'Wrap your page content in a <body>').not.toBeNull()
  })

  it('has a <head> with a non-empty <title> and a UTF-8 charset', () => {
    expect(doc.querySelector('head title'), 'Add a <title> inside <head>').not.toBeNull()
    expect(doc.title.trim(), 'Put some text inside <title>').toBeTruthy()
    const meta = doc.querySelector('meta[charset]')
    expect(meta, 'Add <meta charset="utf-8"> inside <head>').not.toBeNull()
    expect(meta.getAttribute('charset').toLowerCase()).toBe('utf-8')
  })

  it('uses the semantic layout elements (header, nav, main, footer)', () => {
    for (const tag of ['header', 'nav', 'main', 'footer']) {
      expect(doc.querySelector(tag), `Add a <${tag}> to your page`).not.toBeNull()
    }
  })

  it('has an <h1> with text and at least two links in the nav', () => {
    const h1 = doc.querySelector('h1')
    expect(h1 && h1.textContent.trim().length > 0, 'Add an <h1> heading with text').toBe(true)
    expect(doc.querySelectorAll('nav a').length, 'Put at least two links inside your <nav>').toBeGreaterThanOrEqual(2)
  })
})

// ---- Module 2 recall: external CSS, flexbox, components, the design system ----
describe('Review, part 2 – CSS and layout (Module 2)', () => {
  it('links styles.css and writes no inline style="" attributes', () => {
    expect(doc.querySelector('link[rel="stylesheet"][href]'), 'Link styles.css from the <head>').not.toBeNull()
    expect(doc.querySelectorAll('[style]').length, 'No inline style="" - style by class in styles.css').toBe(0)
  })

  it('styles.css contains real CSS rules', () => {
    expect(cssFlat.length, 'styles.css looks empty - write your rules there').toBeGreaterThan(0)
    expect(/[a-z-]+\s*:/i.test(css), 'Write real CSS declarations (property: value;)').toBe(true)
  })

  it('lays something out with Flexbox (display: flex)', () => {
    expect(cssFlat, 'Use display: flex to lay out your nav or your cards').toContain('display:flex')
  })

  it('reuses a .card component for the three favourites', () => {
    expect(doc.querySelectorAll('.card').length, 'Use class="card" on each of your three cards').toBeGreaterThanOrEqual(3)
    expect(hasDeclarations('.card'), 'Give the .card class real CSS declarations').toBe(true)
  })

  it('applies colour, a font-family and spacing', () => {
    expect(/(^|[;{])color:|background/.test(cssFlat), 'Set a text or background colour').toBe(true)
    expect(cssFlat, 'Set a font-family').toContain('font-family:')
    expect(/padding:|margin:/.test(cssFlat), 'Use padding or margin for spacing').toBe(true)
  })
})

describe('Student info (student.json)', () => {
  const info = JSON.parse(read('../student.json'))
  it('student.json is filled in', () => {
    for (const field of [
      'classCode', 'fullName', 'studentNumber',
      'studentEmail', 'personalEmail', 'githubAccount',
    ]) {
      expect(info[field], `Set "${field}" in student.json`).toBeTruthy()
    }
  })
})
