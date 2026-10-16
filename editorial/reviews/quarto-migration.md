# Quarto migration and final production review

Date: 2026-10-15

## Decision

**PASS — migrate from Bookdown/R Markdown to Quarto/Markdown.**

Bookdown was originally selected because the initial requirement explicitly requested it. The requirement was later reconsidered. This book contains no executable R analysis or code listings, so plain Markdown with Quarto is a better fit: it removes the R/Bookdown dependency while retaining a book structure, navigation, search, static HTML output, and GitHub Actions support.

## Migration completed

- Renamed all 35 source files from `.Rmd` to `.md`.
- Renamed the landing page to `index.md`.
- Removed `_bookdown.yml` and `_output.yml`.
- Added `_quarto.yml` with explicit book chapter order and HTML configuration.
- Added Quarto setup and rendering to `.github/workflows/publish-book.yml`.
- Updated `README.md` and the quality gate to refer to Quarto.
- Updated the landing page to describe the complete book.
- Added the Quarto-specific Pi documentation and security caveats.
- Removed stale Bookdown output before the final render.

## Production checks

- `quarto render`: **PASS**.
- 35 Markdown source pages rendered.
- 35 generated HTML pages in `docs/`.
- Local HTML links and fragments: **PASS**.
- No rendered preformatted code blocks: **PASS**.
- Source div containers balanced: **PASS**.
- All chapters and appendices appear in `_quarto.yml` order.
- GitHub Actions workflow now builds with `quarto-dev/quarto-actions/setup@v2` and deploys `docs/`.

## Comparison outcome

Quarto/Markdown is now the selected framework. It is more appropriate than Bookdown/R Markdown for this prompt-only book. Jekyll, Pandoc-only, pre-rendered-only, and JavaScript documentation frameworks remain possible alternatives, but they would require either content migration without comparable benefit or more custom tooling.

## Limitations

- No independent subagent tool was available; reviews were separate editorial passes by the same assistant.
- No visual browser review or remote-link check was performed.
- GitHub publication is not complete because the directory still has no Git repository or configured GitHub remote, and `gh` is unavailable.
- The GitHub Actions workflow has not executed on GitHub.
