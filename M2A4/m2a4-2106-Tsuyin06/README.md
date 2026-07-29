# Module 2 – Activity 4 – Review: Build a Small Page From Scratch

[![Made with Claude](https://img.shields.io/badge/Made_with-Claude-D97757?logo=anthropic&logoColor=white)](https://tjakoen.github.io/notes/ten-times-zero)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

A **checkpoint**. There is nothing new here - you build one small page from
scratch that uses everything from Module 1 and Module 2. The point is to see what
has stuck.

> **Graded out of 20:** 10 automated (the ten tests below) plus a **10-point
> design score** judged from your rendered page against the rubric
> ([`RUBRIC.md`](RUBRIC.md)). The bar is beginner-level - readable, tidy, and
> consistent - not portfolio polish.

> **Closed book.** Do this **from memory** - **no Google, no AI, no copy-paste**
> from your old activities. That is the whole exercise. It is meant to be doable:
> every part below you have already done in m1a1 through m2a3.

## What to build

A small **"My Favourites"** page: a short header with a nav, a main area with a
heading and **three cards** (three favourite things - films, foods, games, songs,
whatever you like), and a footer. Write the page in
[`src/index.html`](src/index.html) and style it in
[`src/styles.css`](src/styles.css).

> **Work in the [`src/`](src/) folder.** Everything else is course plumbing -
> leave it alone. The starter files are just comments telling you what to include.

### 1. Fill in your details

Open `student.json` and fill in every field (keep it **identical** to your other
activities; the `classCode` must match your repo name):

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

### 2. The HTML (Module 1)

- A **valid HTML5 page**: the doctype, `<html lang="en">`, a `<head>` with a
  `<title>` and `<meta charset="utf-8">`, and a `<body>`.
- The **semantic layout**: a `<header>` containing a `<nav>` with **at least two
  links**, a `<main>`, and a `<footer>`.
- An `<h1>` with text.

### 3. The CSS (Module 2)

All styling goes in `styles.css`, **linked from the `<head>`**. **No `style=""`
attributes** - style by class.

- Lay out your **nav** (or your cards) with **Flexbox** (`display: flex`).
- Give each of your three cards `class="card"` - one **component**, reused three
  times - and write the `.card` rule **once**.
- Apply a **colour**, a **font-family**, and some **spacing** (`padding` or
  `margin`). Keep it tidy; you are not graded on flourishes.

## Set up your repo

1. **Create from the template** - *Use this template → Create a new repository*.
2. **Owner = the `HAU-6INTROWEB` course org.**
3. **Name it** `m2a4-<classcode>-yourname`. The `<classcode>` must match
   `student.json`.
4. **Make it Private.**

```bash
git clone https://github.com/HAU-6INTROWEB/m2a4-<classcode>-yourname.git
cd m2a4-<classcode>-yourname
```

## Running the tests

```bash
npm install
npm test
```

The automated half is **10 tests** (1 point each). They check:

**HTML (Module 1)**

- ✅ a valid HTML5 page (doctype, `<html lang>`, `<body>`)
- ✅ a `<head>` with a non-empty `<title>` and a UTF-8 charset
- ✅ the semantic layout elements (`header`, `nav`, `main`, `footer`)
- ✅ an `<h1>` with text and at least two nav links

**CSS (Module 2)**

- ✅ `styles.css` is linked and there are no inline `style=""` attributes
- ✅ `styles.css` contains real CSS rules
- ✅ something is laid out with Flexbox (`display: flex`)
- ✅ a `.card` component is reused three times and styled
- ✅ colour, a `font-family`, and spacing are applied

**Identity**

- ✅ `student.json` is completely filled in

The remaining **10 points** are a design score from your page's appearance
(readability, layout and spacing, consistent cards, tidiness) against
[`RUBRIC.md`](RUBRIC.md). Tests do not check this - a clean, readable page earns
it.

## Confirm your submission

When your tests pass locally, **commit and push**:

```bash
git add -A
git commit -m "Activity 4 complete"
git push
```

Pushing triggers the **Autograde** workflow. Open the **Actions** tab, then the
latest **Autograde** run, and confirm the green ✅ check, the "10 / 10 tests
passed" summary, and the 📸 page-preview link.

## 💻 Work in a Codespace (recommended)

A **Codespace** is a complete dev environment that runs in the cloud, so you do
not have to install Node, Dart, or anything else on your own laptop. This repo is
already configured: open a Codespace and everything you need is ready.

**Open one:** click the green **Code** button → **Codespaces** tab → **Create
codespace on main**. The first launch takes a minute to set up; after that it is
instant. Then run the activity from its terminal exactly as described below.

**Use it in VS Code (recommended).** It works in the browser, but it is nicer in
the desktop app: install the **GitHub Codespaces** extension in VS Code, or from
the running Codespace click the menu (☰) → **Open in VS Code Desktop**. Same
environment, your own editor.

### ⏱️ Make your free hours last (please read)
Your GitHub Education account includes a generous but limited monthly Codespaces
allowance. Three habits keep you from wasting it:

1. **Set your idle timeout to 10 minutes.** Go to
   **github.com/settings/codespaces → Default idle timeout → 10 minutes → Save.**
   A Codespace keeps running (and spending your hours) when you walk away; this
   makes it auto-stop after 10 idle minutes.
2. **Stop it when you finish - don't just close the tab.** Closing the browser
   leaves it running. Stop it at **github.com/codespaces → ••• → Stop
   codespace**, or from inside the editor open the **Command Palette**
   (`Ctrl`/`Cmd`+`Shift`+`P`, or **F1**) and run
   *Codespaces: Stop Current Codespace*.
3. **Delete the Codespace once you've submitted this activity.** Every activity
   gets its own Codespace, so old ones pile up and use your storage. After your
   final push: **github.com/codespaces → ••• → Delete.** You can always recreate
   it later from the green **Code** button.

---
📚 **These materials were authored by [tjakoen](https://github.com/tjakoen), built with Claude.** I use AI in the open, and I expect you to use it to learn the material, not to skip the learning. [How I actually work with AI →](https://tjakoen.github.io/notes/ten-times-zero)
