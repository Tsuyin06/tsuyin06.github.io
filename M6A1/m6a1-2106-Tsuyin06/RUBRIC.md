# Rubric - m6a1 Midterm Build: One Page, Three Modules

Students build **one page from scratch** - a dating-app style profile (a
"MonsterMatch" card, though the subject is theirs to choose) - that pulls
together the three midterm modules on a single screen:

- **Module 4 (graphic design):** a polished profile **card** - rounded corners,
  a `box-shadow`, a gradient or a `filter`, `text-shadow` on the name.
- **Module 5 (tables and forms):** a small **details table** (the profile
  "vitals") and a real **"create your profile" form** with labelled fields and
  native validation.
- **Module 6 (motion):** a `transition` on hover (the card lifts, buttons
  respond) and a `@keyframes` **animation** (e.g. a pulsing Like button).

This is an **open-book** in-class build. Students may use the lecture decks and
MDN. It is worth **20 points**, split into an automated half and a design half
(10 + 10 = 20). The bar is beginner-level: one tidy, coherent page that visibly
uses all three modules - not portfolio polish.

## Automated checks (10 pts, scored from the tests/CI - not by hand)

One point per test; the ten tests are the automated half exactly.

| Check | Points |
| --- | --- |
| Valid HTML5 page (doctype, `<html lang>`, `<head>` with `<title>` + charset, `<body>`) | 1 |
| External `styles.css` linked, `styles.css` has rules, no inline `style=""` | 1 |
| A card element styled with `border-radius` and `box-shadow` (m4) | 1 |
| A gradient or a `filter` is used (m4) | 1 |
| A real data table: `thead`, 2+ `<th>`, 2+ `tbody` rows, `border-collapse` (m5) | 1 |
| A form with an email input, a choice control, a `textarea`, and `required` (m5) | 1 |
| Every input / select / textarea has its own `<label>` (m5) | 1 |
| A `transition` on a `:hover` state (m6) | 1 |
| A `@keyframes` animation played with the `animation` property (m6) | 1 |
| `student.json` is completely filled in | 1 |
| **Automated subtotal** | **10** |

## Design rubric (10 pts, scored from the rendered page screenshots and the code)

The AI scores ONLY this table (the automated half is scored deterministically by
the tests). Judge from the desktop and phone screenshots and from the CSS. Judge
at a **beginner** level: this is a one-session build, not a portfolio. The three
modules should each be *visibly* present and reasonably tasteful.

| Criterion | Max | Excellent (full marks) | Satisfactory (~60-80%) | Needs work (~0-40%) |
| --- | --- | --- | --- | --- |
| Graphic design of the card (m4) | 3 | the card reads as a designed object: rounded, a real shadow, an intentional gradient/filter, tidy colour and type; a clear name/heading | present but plain - one or two touches, a bit flat or uneven | little styling; looks like default-browser boxes |
| Table & form quality (m5) | 3 | the details table is clean and readable (aligned, spaced, collapsed borders); the form is tidy, fields are labelled and comfortably spaced | works but cramped or uneven; borders or spacing a little rough | table or form looks broken, unaligned, or hard to use |
| Motion that feels finished (m6) | 2 | motion is purposeful - a smooth hover lift and a tasteful animation that draws the eye without being noisy | some motion but abrupt, or only one of transition/animation feels intentional | motion barely present or jarring |
| Cohesion & completeness | 2 | one coherent page: consistent colour/type/spacing across card, table and form; feels finished, no leftover TODOs | mostly consistent, minor drift or loose ends | the three parts look disconnected, or the page is unfinished |

Design rubric total: 10 points.

**Automated 10 + design 10 = 20 total.**

Notes for feedback: this is a midterm review that combines three modules, so
comment on how well the three come together on one page - is the card genuinely
*designed* (m4), are the table and form clean and labelled (m5), does the motion
feel purposeful (m6)? Open-book, so it is fine to point to the exact property or
lecture section to revisit; still name the concept rather than handing over
corrected code. If a page looks like unstyled default-browser HTML, say the
design could not be assessed and give code-structure feedback only.
