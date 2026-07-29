# Module 6 - Activity 1 - Midterm Build: One Page, Three Modules

[![Made with Claude](https://img.shields.io/badge/Made_with-Claude-D97757?logo=anthropic&logoColor=white)](https://tjakoen.github.io/notes/ten-times-zero)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

Build **one page from scratch** that brings the three midterm modules together on
a single screen: a dating-app style **profile page**. Think a "MonsterMatch" card
- but the subject is yours (a monster, a pet, a made-up character; keep it
school-friendly).

This is an **open-book, in-class build.** Use the Module 4, 5 and 6 lecture decks
and MDN. You write everything in [`src/index.html`](src/index.html) and
[`src/styles.css`](src/styles.css).

> **Graded out of 20:** 10 automated (the ten tests below) plus a **10-point
> design score** for how well the three modules come together on one page, judged
> from your rendered page against the rubric ([`RUBRIC.md`](RUBRIC.md)).
> Beginner-level bar.

## What the page needs

One page, four pieces. The starter file marks each one with a `TODO` comment.

**The profile card - Module 4 (graphic design)**
- a **card** that reads as a designed object: `border-radius`, a `box-shadow`, a
  gradient or a `filter`, and `text-shadow` on the name
- the name, an age, and **Like / Nope** buttons

**The vitals table - Module 5 (tables)**
- a `<table>` with a `<thead>` (two or more `<th>`) and a `<tbody>` of rows -
  Age, Height, Location, Star sign, Looking for
- styled with `border-collapse` and tidy spacing

**The create-profile form - Module 5 (forms)**
- a `<form>` where **every field has its own `<label>`**
- at least: a name input, an `<input type="email">`, an `<input type="number">`
  (age), a `<textarea>` (bio), a `<select>` or radio/checkbox choice, and a submit
  button
- native validation: mark the important fields `required`

**Motion - Module 6**
- a `transition` on a `:hover` state (the card lifts, buttons respond)
- a `@keyframes` **animation** played with the `animation` property (e.g. a pulsing
  Like button)

Finally, **fill in `student.json`** with your details (keep it identical to your
other activities; the `classCode` must match your repo name).

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
3. **Name it** `m6a1-<classcode>-yourname`. The `<classcode>` must match
   `student.json`.
4. **Make it Private.**

```bash
git clone https://github.com/HAU-6INTROWEB/m6a1-<classcode>-yourname.git
cd m6a1-<classcode>-yourname
```

## Running the tests

```bash
npm install
npm test
```

The automated half is **10 tests** (1 point each). They check:

**Foundation**

- a valid HTML5 page (doctype, `<html lang>`, `<head>` with `<title>` + charset,
  `<body>`)
- an external `styles.css` is linked and no inline `style=""` is used

**Module 4 - graphic design**

- a card element styled with `border-radius` and `box-shadow`
- a gradient or a `filter` is used

**Module 5 - tables and forms**

- a real data table (`thead`, two+ `<th>`, two+ `tbody` rows, `border-collapse`)
- a form with an email input, a choice control, a `textarea`, and `required`
- every input / select / textarea has its own `<label>`

**Module 6 - motion**

- a `transition` on a `:hover` state
- a `@keyframes` animation played with the `animation` property

**Identity**

- `student.json` is completely filled in

The remaining **10 points** are a design score for how well the page pulls the
three modules together, judged from your page and your CSS against
[`RUBRIC.md`](RUBRIC.md).

Open the page in a browser as you work (or use Live Server) - the tests check that
the pieces exist, but the design score is about how good it looks.

## Confirm your submission

When your tests pass locally, **commit and push**:

```bash
git add -A
git commit -m "Midterm build complete"
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
