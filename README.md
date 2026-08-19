# The Literary Ledger — Hugo Book Review Template

**A beautiful, ready-to-use book review blog. Fork it, fill in your name, and you're live.**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/varunnjbehera/the-literary-ledger)
&nbsp;&nbsp;
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvarunnjbehera%2Fthe-literary-ledger&env=HUGO_TITLE,HUGO_PARAMS_AUTHOR,HUGO_PARAMS_DESCRIPTION&envDescription=Personalize%20your%20book%20review%20blog&envDefaults=HUGO_TITLE%3DMy%20Book%20Reviews%2CHUGO_PARAMS_AUTHOR%3DYour%20Name%2CHUGO_PARAMS_DESCRIPTION%3DMy%20personal%20corner%20for%20honest%20book%20reviews.)

---

## What you get

- **11 sample reviews** — real, conversational write-ups to learn from, then replace with your own
- **3 reading modes** — Light, Sepia, and Dark, with a one-click toggle
- **Instant search** — find any book by title, author, or genre
- **Genre pages** — browse all reviews by category
- **Auto SEO** — every page has structured data, Open Graph tags, and a sitemap
- **Free hosting** — deploy to Netlify, Vercel, or GitHub Pages at no cost
- **No terminal required** — add reviews directly in your browser via GitHub's web UI

---

## Option A — Deploy to Netlify (easiest, ~2 minutes)

> You'll be asked to fill in your site name, your name, and a description before the site is created.

1. Click the **Deploy to Netlify** button above
2. Create a free Netlify account (or log in)
3. Fill in the 3 fields in the form that appears:
   - **HUGO_TITLE** — your site name, e.g. `Jane Reads Books`
   - **HUGO_PARAMS_AUTHOR** — your name or pen name
   - **HUGO_PARAMS_DESCRIPTION** — one sentence about your blog
4. Click **Save & Deploy**
5. Your site is live at a free `*.netlify.app` URL in about 2 minutes

**To add a custom domain later:** Netlify Dashboard → Domain management → Add domain.

---

## Option B — Deploy to Vercel (~2 minutes)

1. Click the **Deploy with Vercel** button above
2. Create a free Vercel account (or log in) and connect your GitHub
3. Fill in the same 3 fields (HUGO_TITLE, HUGO_PARAMS_AUTHOR, HUGO_PARAMS_DESCRIPTION)
4. Click **Deploy**
5. Live at a free `*.vercel.app` URL

---

## Option C — GitHub Pages (free, uses your GitHub account)

### Step 1 — Fork this template

Click the green **"Use this template"** button at the top of this page → **"Create a new repository"**

Give it any name you like (e.g. `my-book-reviews`).

### Step 2 — Enable GitHub Pages

In your new repo: **Settings → Pages → Source → GitHub Actions → Save**

### Step 3 — Personalize your site (no file editing needed)

Go to the **Actions** tab in your repo → click **"Setup My Site"** → click **"Run workflow"** on the right → fill in 3 fields:

| Field | Example |
| --- | --- |
| Your site name | `Jane Reads Books` |
| Your name or pen name | `Jane Smith` |
| One sentence about your blog | `Honest reviews from a lifelong reader.` |

Click **Run workflow**. The workflow will update your site config and trigger a deployment automatically.

### Step 4 — Wait ~90 seconds

Your site is live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

---

## Adding a book review

You don't need a terminal. Do this entirely in your browser:

1. In your GitHub repo, go to `content/reviews/`
2. Click **"Add file"** → **"Create new file"**
3. Name it `your-book-title.md` (lowercase, hyphens, no spaces)
4. Open `REVIEW_TEMPLATE.md` in another tab, copy its contents, and paste into your new file
5. Fill in your book details at the top (between the `---` lines)
6. Write your review below
7. Change `draft: true` to `draft: false` when ready to publish
8. Click **"Commit changes"** — your site rebuilds automatically in ~90 seconds

---

## Adding a cover image

1. In your GitHub repo, go to `assets/images/covers/`
2. Click **"Add file"** → **"Upload files"**
3. Upload your image (JPG or PNG — Hugo resizes it automatically)
4. In your review's front matter, set: `cover: "images/covers/your-file.jpg"`

---

## Front matter reference

Every review starts with a block of metadata between `---` lines:

```yaml
---
title: "Dune"
date: 2026-05-15T00:00:00Z
draft: false
author: "Frank Herbert"
genre: "Science Fiction"
tags: ["Space", "Epic", "Classic"]
rating: "⭐⭐⭐⭐⭐"
description: "A sweeping epic of politics, religion, and ecology set on a desert planet."
cover: "images/covers/dune.jpg"
---
```

| Field | Required | Notes |
| --- | --- | --- |
| `title` | Yes | The book title |
| `author` | Yes | The book's author (not you) |
| `genre` | Yes | Used for the genre browse page |
| `date` | Yes | Publication date in ISO format |
| `draft` | Yes | `true` = hidden, `false` = published |
| `rating` | Yes | Star emojis: ⭐ to ⭐⭐⭐⭐⭐ |
| `description` | Yes | One sentence — shown in search results |
| `cover` | No | Path to image in `assets/images/covers/` |
| `tags` | No | Comma-separated list of tags |

---

## Optional: Preview locally

If you want to see your changes before publishing, you can run the site on your own computer.

**You'll need:** [Hugo (extended)](https://gohugo.io/installation/) and [Node.js 20+](https://nodejs.org/)

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME
cd YOUR-REPO-NAME
npm install
npm run dev      # watch for CSS changes (leave this running)
hugo server      # open http://localhost:1313 in your browser
```

---

## License

MIT © 2026 [Varun Behera](https://github.com/varunnjbehera) — fork, customize, and share freely.
