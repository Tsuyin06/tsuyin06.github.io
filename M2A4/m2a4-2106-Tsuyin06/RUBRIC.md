# Rubric - m2a4 Review: Build a Small Page From Scratch

This activity is worth **20 points**, split into an automated half and a design
half (10 + 10 = 20). It is a closed-book review, so the bar is "did the core
skills from Module 1 and Module 2 come back from memory", not polish.

## Automated checks (10 pts, scored from the tests/CI - not by hand)

One point per test; the ten tests are the automated half exactly.

| Check | Points |
| --- | --- |
| Valid HTML5 page (doctype, `<html lang>`, `<body>`) | 1 |
| `<head>` has a non-empty `<title>` and a UTF-8 charset | 1 |
| Semantic layout elements present (`header`, `nav`, `main`, `footer`) | 1 |
| An `<h1>` with text and at least two links in the `<nav>` | 1 |
| `styles.css` linked and no inline `style=""` attributes | 1 |
| `styles.css` contains real CSS rules | 1 |
| Something laid out with Flexbox (`display: flex`) | 1 |
| A `.card` component reused three times and styled | 1 |
| A colour, a `font-family`, and spacing are applied | 1 |
| `student.json` is completely filled in | 1 |
| **Automated subtotal** | **10** |

## Design rubric (10 pts, scored from the rendered page screenshot and the code)

The AI scores ONLY this table (the automated half is scored deterministically by
the tests). Judge at a **beginner** level: this is a small review page, not a
portfolio. Reward a page that is readable, tidy, and consistent; do not expect
responsiveness, accessibility depth, or advanced polish.

| Criterion | Max | Excellent (full marks) | Satisfactory (~60-80%) | Needs work (~0-40%) |
| --- | --- | --- | --- | --- |
| Visual design & readability | 4 | intentional colour and type; comfortable to read; clear `<h1>` and structure | readable but plain or a little uneven | unstyled default-browser look, or hard to read |
| Layout & spacing | 3 | the Flexbox layout genuinely reads as a layout; consistent, calm spacing between sections and cards | works but spacing is cramped or uneven | no real layout; elements crammed or scattered |
| Component consistency | 2 | the three `.card`s look uniform (one coherent card style); colours/fonts consistent across the page | mostly consistent with minor drift | cards differ noticeably or the page looks ad-hoc |
| Cleanliness & completeness | 1 | tidy HTML/CSS, no leftover starter comment, page feels finished | mostly there, minor loose ends | unfinished or messy (broken markup, leftover TODOs) |

Design rubric total: 10 points.

**Automated 10 + design 10 = 20 total.**

Notes for feedback: this is a closed-book recall exercise, so be encouraging and
name the concept to revisit rather than handing over corrected code. Comment on
the code (structure, class use, tidiness) and, where the screenshot shows a
styled page, the visual design. If the page looks like unstyled default-browser
HTML, say the design could not be assessed and give code feedback only.
