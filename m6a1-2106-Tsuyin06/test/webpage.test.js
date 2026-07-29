import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'

const path = (rel) => fileURLToPath(new URL(rel, import.meta.url))
const read = (rel) => readFileSync(path(rel), 'utf8')

const dom = new JSDOM(read('../src/index.html'))
const doc = dom.window.document

const cssPath = path('../src/styles.css')
const cssRaw = existsSync(cssPath) ? readFileSync(cssPath, 'utf8') : ''
// CSS with comments stripped, so we only see rules the student actually wrote.
const css = cssRaw.replace(/\/\*[\s\S]*?\*\//g, '')
const cssFlat = css.replace(/\s+/g, '').toLowerCase()

// Every control that should carry a <label>: text-like inputs, selects, textareas,
// and the choice inputs (radio/checkbox). Buttons/submits/hidden don't need one.
const labelableControls = () => {
  const controls = [...doc.querySelectorAll('input, select, textarea')]
  return controls.filter((el) => {
    if (el.tagName.toLowerCase() !== 'input') return true
    const t = (el.getAttribute('type') || 'text').toLowerCase()
    return !['submit', 'button', 'reset', 'hidden', 'image'].includes(t)
  })
}
// A control is labelled if it sits inside a <label>, or a <label for> points at its id.
const isLabelled = (el) => {
  if (el.closest('label')) return true
  const id = el.getAttribute('id')
  return !!(id && doc.querySelector(`label[for="${id}"]`))
}

// ---- Foundation: valid HTML5 (Module 1, still assumed) ----
describe('Foundation - a valid HTML5 page', () => {
  it('has a doctype, <html lang>, a <head> with <title> + charset, and a <body>', () => {
    expect(doc.doctype?.name?.toLowerCase(), 'Start the file with <!DOCTYPE html>').toBe('html')
    expect(doc.documentElement.getAttribute('lang'), 'Set a language, e.g. <html lang="en">').toBeTruthy()
    expect(doc.querySelector('head title'), 'Add a <title> inside <head>').not.toBeNull()
    expect(doc.title.trim(), 'Put some text inside <title>').toBeTruthy()
    expect(doc.querySelector('meta[charset]'), 'Add <meta charset="utf-8"> inside <head>').not.toBeNull()
    expect(doc.body, 'Wrap your page content in a <body>').not.toBeNull()
  })

  it('links an external styles.css and uses no inline style="" attributes', () => {
    expect(doc.querySelector('link[rel="stylesheet"][href]'), 'Link styles.css from the <head>').not.toBeNull()
    expect(cssFlat.length, 'styles.css looks empty - write your rules there').toBeGreaterThan(0)
    expect(doc.querySelectorAll('[style]').length, 'No inline style="" - style by class in styles.css').toBe(0)
  })
})

// ---- Module 4: graphic design with CSS ----
describe('Module 4 - graphic design (the profile card)', () => {
  it('has a card element styled with border-radius and box-shadow', () => {
    const card = doc.querySelector('[class*="card"]')
    expect(card, 'Add a profile card element (e.g. class="card" or "profile-card")').not.toBeNull()
    expect(cssFlat, 'Round a corner somewhere with border-radius (your card)').toContain('border-radius:')
    expect(cssFlat, 'Lift your card off the page with box-shadow').toContain('box-shadow:')
  })

  it('uses a gradient or a filter for graphic polish', () => {
    const hasGradient = /(linear|radial|conic)-gradient\(/.test(cssFlat)
    const hasFilter = /(^|[;{])filter:/.test(cssFlat)
    expect(hasGradient || hasFilter, 'Use a CSS gradient (background) or a filter (on your photo) - a Module 4 tool').toBe(true)
  })
})

// ---- Module 5: tables and forms ----
describe('Module 5 - a data table', () => {
  it('has a real data table (thead, two+ headers, tbody rows) with border-collapse', () => {
    const table = doc.querySelector('table')
    expect(table, 'Add a <table> for the profile details / vitals').not.toBeNull()
    expect(table.querySelector('thead'), 'Give your table a <thead>').not.toBeNull()
    expect(table.querySelectorAll('th').length, 'Use at least two <th> header cells').toBeGreaterThanOrEqual(2)
    expect(table.querySelectorAll('tbody tr').length, 'Put at least two data rows in the <tbody>').toBeGreaterThanOrEqual(2)
    expect(cssFlat, 'Style the table with border-collapse: collapse').toContain('border-collapse:')
  })
})

describe('Module 5 - a real form', () => {
  it('has a form with an email input, a choice control, a textarea and native validation', () => {
    const form = doc.querySelector('form')
    expect(form, 'Add a <form> so people can create a profile').not.toBeNull()
    expect(form.querySelector('input[type="email"]'), 'Add an <input type="email"> field').not.toBeNull()
    const hasChoice = form.querySelector('select, input[type="radio"], input[type="checkbox"]')
    expect(hasChoice, 'Add a <select> or radio/checkbox choice control').not.toBeNull()
    expect(form.querySelector('textarea'), 'Add a <textarea> (a bio)').not.toBeNull()
    expect(form.querySelector('[required]'), 'Mark at least one field required with the required attribute').not.toBeNull()
  })

  it('gives every input, select and textarea its own label', () => {
    const controls = labelableControls()
    expect(controls.length, 'Your form needs several fields').toBeGreaterThanOrEqual(3)
    const unlabelled = controls.filter((el) => !isLabelled(el))
    expect(unlabelled.length, 'Every field needs a <label> (wrap it, or use <label for="id">)').toBe(0)
  })
})

// ---- Module 6: motion ----
describe('Module 6 - motion', () => {
  it('animates an interaction with a transition on a hover state', () => {
    expect(cssFlat, 'Add a transition so an interaction animates smoothly').toContain('transition')
    expect(css.toLowerCase(), 'Add a :hover state that changes something').toContain(':hover')
  })

  it('defines a @keyframes animation and plays it with the animation property', () => {
    expect(cssFlat, 'Define an animation with @keyframes (e.g. a pulsing Like button)').toContain('@keyframes')
    expect(/(^|[;{])animation(-name)?:/.test(cssFlat), 'Play your @keyframes with the animation property').toBe(true)
  })
})

// ---- Identity ----
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
