# Review record: Chapters 17–20

Date: 2026-10-15
Batch: Checking AI's work

## Review limitation

No subagent tool is available in this session. The four review roles below were performed as separate editorial passes, not as independent subagent opinions.

## Scope editor

**Decision: PASS**

- The chapters focus on evaluating and recovering from AI coding answers.
- The material remains English and prompt-first.
- No code listings or political discussions occur in the chapters.

## Prompt editor

**Decision: PASS**

- Correctness prompts separate claims, assumptions, evidence, and uncertainty.
- Verification prompts distinguish recommended checks from checks actually executed.
- Comparison prompts define criteria and surface trade-offs.
- Recovery prompts stop compounding errors, preserve supported work, and protect unrelated changes.

## Learner editor

**Decision: PASS**

- The batch moves from claim verification to test planning, decision-making, and error recovery.
- Each chapter includes a prompt-only practice activity.
- Checklists reinforce evidence-based judgment and honest verification.

## Production editor

**Decision: PASS**

- `bookdown::render_book("index.Rmd")` completed successfully for the complete book.
- Four new chapters are ordered in `_bookdown.yml`.
- Each chapter contains learning objectives, prompt examples, a practice section, and a summary checklist.
- No code fences occur in the four new chapters.

## Follow-up actions

- Obtain independent subagent reviews when a subagent tool becomes available.
- Continue with the next batch: pi coding conversations, model selection, long context, and careful tool use.
