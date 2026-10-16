# Review record: Chapters 13–16

Date: 2026-10-15
Batch: Files, text, tables, reports, and visualizations

## Review limitation

No subagent tool is available in this session. The four review roles below were performed as separate editorial passes, not as independent subagent opinions.

## Scope editor

**Decision: PASS**

- The chapters focus on using AI for practical coding and data tasks.
- The material remains English and prompt-first.
- No code listings or political discussions occur in the chapters.

## Prompt editor

**Decision: PASS**

- File prompts require inspection, previews, preservation, reversibility, and explicit confirmation for destructive operations.
- Text prompts distinguish exact matching from interpretation and preserve uncertain cases.
- Table prompts address units of observation, data quality, keys, joins, missing values, and verification.
- Report prompts connect visualizations to questions, audiences, uncertainty, evidence, accessibility, and reproducibility.

## Learner editor

**Decision: PASS**

- The batch progresses from file operations to text processing, structured tables, and communication of results.
- Each chapter includes a prompt-only practice workflow.
- Checklists reinforce inspection, uncertainty, verification, and reproducibility.

## Production editor

**Decision: PASS**

- `bookdown::render_book("index.Rmd")` completed successfully for the complete book.
- Four new HTML pages were generated and linked in the GitBook navigation.
- Each chapter contains learning objectives, prompt examples, a practice section, and a summary checklist.
- No code fences occur in the four new chapters.

## Follow-up actions

- Obtain independent subagent reviews when a subagent tool becomes available.
- Continue with the next batch: checking correctness, asking for tests and verification, comparing solutions, and recovering from bad AI answers.
