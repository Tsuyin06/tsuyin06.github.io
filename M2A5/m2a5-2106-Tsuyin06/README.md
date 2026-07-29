# Module 2 - Activity 5 - Make It Responsive

[![Made with Claude](https://img.shields.io/badge/Made_with-Claude-D97757?logo=anthropic&logoColor=white)](https://tjakoen.github.io/notes/ten-times-zero)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

You are given a finished, good-looking **three-page website** for a food truck
called Curbside Thai. There is one problem: it was built for a desktop screen
only. Open it on a phone (or drag your browser window narrow) and it overflows
sideways - the layout does not adapt.

**Your job: make the whole site responsive, using only CSS.** No JavaScript, and
no new HTML pages. Every change goes in the one shared stylesheet,
[`src/styles.css`](src/styles.css).

> **Graded out of 20:** 10 automated (the ten tests below) plus a **10-point
> design score** for how well it reflows and stays tidy, judged from your pages
> against the rubric ([`RUBRIC.md`](RUBRIC.md)). Beginner-level bar.

## What is in here

```
src/
  index.html      Home: hero + three highlight cards
  menu.html       Menu: a grid of dish cards
  contact.html    Contact: info + a simple form
  styles.css      <- the ONLY file you edit
  images/         placeholder images (SVG)
```

The three pages are complete and already share `styles.css`. **Do not edit the
HTML.** Keep every responsive change in the stylesheet.

## The task, step by step

Use the Module 3 lecture as your guide. In [`src/styles.css`](src/styles.css):

1. **Make the container fluid.** `.container` is a fixed `960px`. Give it a
   `max-width` and a fluid width instead, so it can shrink.
2. **Make images responsive.** Add `img { max-width: 100%; height: auto; }` so no
   image ever spills off the screen.
3. **Let the rows reflow.** `.card-row`, `.menu-grid`, and `.contact-row` are
   flex rows that never wrap. Make the cards fluid and let them wrap.
4. **Add breakpoints.** Use `@media` queries so that on a phone the hero stacks,
   the nav still fits, and the cards become one column. Pick the widths where the
   layout starts to look cramped.
5. **Fill in `student.json`** with your details (keep it identical to your other
   activities; the `classCode` must match your repo name).

```json
{
  "classCode": "1234",
  "fullName": "Juan Dela Cruz",
  "studentNumber": "2026-12345",
  "studentEmail": "juan.delacruz@hau.edu.ph",
  "personalEmail": "juan@example.com",
  "githubAccount": "juandelacruz"
}
```

## Set up your repo

1. **Create from the template** - *Use this template -> Create a new repository*.
2. **Owner = the `HAU-6INTROWEB` course org.**
3. **Name it** `m2a5-<classcode>-yourname`. The `<classcode>` must match
   `student.json`.
4. **Make it Private.**

```bash
git clone https://github.com/HAU-6INTROWEB/m2a5-<classcode>-yourname.git
cd m2a5-<classcode>-yourname
```

## Running the tests

```bash
npm install
npm test
```

The automated half is **10 tests** (1 point each). They check:

**Structure stays intact (given, keep it)**

- the three pages are still valid HTML5 (doctype, `<html lang>`, `<body>`)
- every page links the shared external `styles.css`
- all styling stays in the CSS file (no inline `style=""`, no `<style>` blocks)
- every page keeps its viewport meta tag

**Responsive work (the graded skill)**

- `styles.css` defines at least one `@media` query
- a media query responds to width (`min-width` / `max-width`)
- a media query actually changes the layout (not just colour or font)
- fluid sizing is used (`%`, `fr`, `vw`, `max-width`, or `flex-wrap`)
- images are responsive (`img { max-width: ... }`)

**Identity**

- `student.json` is completely filled in

The remaining **10 points** are a design score for how well the site reflows and
stays tidy, judged from your pages and your CSS against
[`RUBRIC.md`](RUBRIC.md).

Resize your browser from wide to narrow while you work - the page should reflow
with no sideways scrollbar.

## Confirm your submission

When your tests pass locally, **commit and push**:

```bash
git add -A
git commit -m "Activity 5 complete"
git push
```

Pushing triggers the **Autograde** workflow. Open the **Actions** tab, then the
latest **Autograde** run, and confirm the green check, the "10 / 10 tests passed"
summary, and the page-preview link.

## Work in a Codespace (recommended)

A **Codespace** is a complete dev environment that runs in the cloud, so you do
not have to install anything on your own laptop. This repo is already configured:
open a Codespace and everything you need is ready.

**Open one:** click the green **Code** button -> **Codespaces** tab -> **Create
codespace on main**. The first launch takes a minute; after that it is instant.

**Use it in VS Code (recommended).** Install the **GitHub Codespaces** extension
in VS Code, or from the running Codespace click the menu -> **Open in VS Code
Desktop**. Same environment, your own editor.

### Make your free hours last (please read)
Your GitHub Education account includes a generous but limited monthly Codespaces
allowance. Three habits keep you from wasting it:

1. **Set your idle timeout to 10 minutes.** Go to
   **github.com/settings/codespaces -> Default idle timeout -> 10 minutes ->
   Save.** This makes a Codespace auto-stop after 10 idle minutes.
2. **Stop it when you finish - do not just close the tab.** Stop it at
   **github.com/codespaces -> ... -> Stop codespace**, or run *Codespaces: Stop
   Current Codespace* from the Command Palette.
3. **Delete the Codespace once you have submitted.** After your final push:
   **github.com/codespaces -> ... -> Delete.** You can recreate it later from the
   green **Code** button.

---
📚 **These materials were authored by [tjakoen](https://github.com/tjakoen), built with Claude.** I use AI in the open, and I expect you to use it to learn the material, not to skip the learning. [How I actually work with AI ->](https://tjakoen.github.io/notes/ten-times-zero)
