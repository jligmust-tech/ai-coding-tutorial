# Review record: Chapters 9–12

Date: 2026-10-15
Batch: Prompting for common coding tasks

## Review limitation

No subagent tool is available in this session. The four review roles below were performed as separate editorial passes, not as independent subagent opinions.

## Scope editor

**Decision: PASS**

- The chapters focus on asking AI to write, modify, improve, and fix code.
- The book remains English and prompt-first.
- No code listings or political discussions occur in the chapters.

## Prompt editor

**Decision: PASS**

- Writing prompts request behavior, inputs, outputs, requirements, assumptions, plans, and verification.
- Modification prompts protect existing behavior and limit scope.
- Improvement prompts define “better,” surface trade-offs, and request the smallest useful change.
- Bug-fixing prompts distinguish symptoms from causes and require evidence before a permanent fix.
- Prompts avoid blind rewrites and ask for safe diagnostic or review steps.

## Learner editor

**Decision: PASS**

- The batch progresses from creating a solution to changing existing material, improving it deliberately, and diagnosing failures.
- Each chapter gives a prompt-only practice activity.
- Checklists reinforce scope control, verification, and regression awareness.

## Production editor

**Decision: PASS**

- `bookdown::render_book("index.Rmd")` completed successfully for the complete book.
- Four new HTML pages were generated and linked in the GitBook navigation.
- Each chapter contains learning objectives, prompt examples, a practice section, and a summary checklist.
- No code fences occur in the four new chapters.

## Follow-up actions

- Obtain independent subagent reviews when a subagent tool becomes available.
- Continue with the next batch: files and data, text, tables and data, and reports and visualizations.
