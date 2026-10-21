# 📚 My Stories

A free story website, hosted on GitHub Pages. Live at: https://manahilsajjad.github.io/story/

## ✍️ How to add a new story (no coding needed)

1. Open the repo on GitHub → go into `src/content/stories/`.
2. Click **Add file → Create new file**.
3. Name it like `my-new-story.md` (lowercase, use `-` instead of spaces).
4. Copy this template, change it, and write your story below the second `---`:

```
---
title: "My New Story"
date: 2026-10-25
genre: "Fantasy"
emoji: "🐉"
summary: "One or two sentences that make people want to read it."
---

Once upon a time...

Leave a blank line between paragraphs.

## Use two # for a chapter heading
```

5. Click **Commit changes**. After about 1 minute the story appears on the website.

Optional: add `featured: true` to show a story in the big banner on the home page.

To delete a story, delete its file. To edit, open the file and click the ✏️ pencil icon.

## 🎨 Tips
- `emoji` is the story's "cover picture". Use any emoji.
- Stories with the same `genre` are grouped under one filter button.
- Readers can search, switch light/sepia/dark mode, and change the text size.

## 💻 Running on a computer (optional)
```
npm install
npm run dev
```
Then open http://localhost:4321/story/

## 🚀 One-time setup on GitHub
Repo → **Settings → Pages → Source: GitHub Actions**. After that, every change you save publishes automatically.
