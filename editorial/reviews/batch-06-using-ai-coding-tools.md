# Review record: Chapters 21–24

Date: 2026-10-15
Batch: Using AI coding tools

## Review limitation

No subagent tool is available in this session. The four review roles below were performed as separate editorial passes, not as independent subagent opinions.

## Scope editor

**Decision: PASS**

- The chapters focus on using Pi and AI tools for coding work.
- The material remains English and prompt-first.
- No code listings or political discussions occur in the chapters.

## Prompt editor

**Decision: PASS**

- Pi prompts define task mode, work boundaries, context, and confirmation points.
- Model-selection prompts account for task requirements, cost, latency, privacy, and verification.
- Long-context prompts preserve constraints, decisions, evidence, and uncertainty.
- Tool-use prompts require previews, explicit approval, narrow scope, interruption handling, and result audits.

## Learner editor

**Decision: PASS**

- The batch progresses from conversation setup to model choice, context management, and tool safety.
- Each chapter includes a prompt-only practice activity.
- Checklists reinforce version awareness, privacy, bounded access, and verification.

## Production editor

**Decision: PASS**

- `bookdown::render_book("index.Rmd")` completed successfully for the complete book.
- Four new chapters are ordered in `_bookdown.yml` and appear in generated navigation.
- Each chapter contains learning objectives, prompt examples, a practice section, and a summary checklist.
- No code fences occur in the four new chapters.

## Follow-up actions

- Obtain independent subagent reviews when a subagent tool becomes available.
- Continue with the next batch: explain-and-learn, write-and-review, debugging, improve-and-simplify, data-task, and personal prompt library workflows.
