# Rubric - m2a5 Make It Responsive

Students are given a finished, **desktop-only** three-page site and asked to make
it **responsive using only CSS** (all changes in the separate `styles.css`, no
JavaScript). This activity is worth **20 points**, split into an automated half
and a design half (10 + 10 = 20).

The bar is beginner-level: the site should stop overflowing on a phone and reflow
sensibly, using the Module 3 tools (media queries, fluid units, responsive
images). It does not need portfolio polish.

## Automated checks (10 pts, scored from the tests/CI - not by hand)

One point per test; the ten tests are the automated half exactly.

| Check | Points |
| --- | --- |
| All three pages are valid HTML5 (doctype, `<html lang>`, `<body>`) | 1 |
| Every page links the shared external `styles.css` | 1 |
| All styling stays in the CSS file (no inline `style=""`, no `<style>` blocks) | 1 |
| Every page keeps the viewport meta tag | 1 |
| `styles.css` defines at least one `@media` query | 1 |
| A media query responds to width (`min-width` / `max-width`) | 1 |
| A media query actually changes the layout (not just colour/font) | 1 |
| Uses fluid sizing (`%`, `fr`, `vw`, `max-width`, or `flex-wrap`) | 1 |
| Images are responsive (`img { max-width: ... }`) | 1 |
| `student.json` is completely filled in | 1 |
| **Automated subtotal** | **10** |

## Design rubric (10 pts, scored from the rendered page screenshots and the code)

The AI scores ONLY this table (the automated half is scored deterministically by
the tests). The previews render at a desktop width, so judge **responsiveness
mainly from the CSS** (sensible breakpoints, mobile-first or clear reflow, fluid
widths, images capped) and judge **visual design** from the screenshots. Judge at
a **beginner** level.

| Criterion | Max | Excellent (full marks) | Satisfactory (~60-80%) | Needs work (~0-40%) |
| --- | --- | --- | --- | --- |
| Responsive approach in the CSS | 4 | clear breakpoint(s) chosen where the layout needs them; rows reflow to a stack, nav adapts, widths are fluid, images capped | some responsiveness but partial (one breakpoint, or some fixed widths left) | little real responsiveness; mostly the original fixed layout |
| Layout & reflow quality | 3 | the reflowed layout reads well and stays tidy; no cramped or overlapping content implied by the CSS | works but spacing gets uneven or tight when it reflows | layout would break or overflow; content crammed |
| Visual design & consistency | 2 | the given design is preserved and consistent across all three pages | mostly consistent, minor drift | pages diverge or the styling is damaged |
| Cleanliness & completeness | 1 | tidy CSS, sensible selectors, no leftover TODOs; feels finished | mostly there, minor loose ends | unfinished or messy (broken rules, dead code) |

Design rubric total: 10 points.

**Automated 10 + design 10 = 20 total.**

Notes for feedback: the HTML was given, so comment on the **CSS approach** -
where they put breakpoints and why, whether widths are fluid, whether images are
capped - and name the concept to revisit rather than handing over corrected code.
If the CSS shows no responsive work, say so plainly and point to the media-query
and fluid-unit sections of the Module 3 lecture.
