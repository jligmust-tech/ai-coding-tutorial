# Using AI for Coding

This repository contains the source for **Using AI for Coding**, a prompt-first HTML book about learning, writing, understanding, and fixing code with AI assistance.

The book contains prompt examples and review guidance. It intentionally does not teach through code listings. Readers apply the prompts to their own code, files, and tasks.

## Current status

The complete draft contains 30 chapters and four reference appendices. Contents and drafting progress are listed in [`ROADMAP.md`](ROADMAP.md). Batch reviews are recorded under `editorial/reviews/`; they are separate editorial passes, not independent subagent reviews. The book is authored in Markdown and rendered by Quarto. GitHub Actions builds the static HTML book and GitHub Pages publishes the generated `docs/` directory.

## Render locally

From the repository root:

```bash
quarto render
```

The rendered HTML is written to `docs/`.

## Quality process

Every chapter passes the review gates in [`editorial/CHAPTER-QUALITY-GATE.md`](editorial/CHAPTER-QUALITY-GATE.md). The review records document the original Bookdown rendering checks. The project has since migrated to Markdown and Quarto; the final Quarto render and migration audit are recorded in `editorial/reviews/quarto-migration.md`.

## Publish

The workflow in `.github/workflows/publish-book.yml` renders the book and deploys it to GitHub Pages when changes reach the `main` branch. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
