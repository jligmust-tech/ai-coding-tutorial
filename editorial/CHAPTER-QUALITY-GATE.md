# Editorial quality gate

Every chapter must pass all gates before it is added to `_quarto.yml`.

## Scope gate

- The chapter is written in English.
- The chapter stays focused on using AI for coding.
- It contains no political discussion.
- It contains no code listings. Prompt text, placeholders, and short labels are allowed.
- It does not assume a particular editor, programming language, or paid service unless the chapter says so.

## Teaching gate

- The chapter has a clear purpose and a small number of learning outcomes.
- Ideas appear in a useful order: understand, try, check, then extend.
- A beginner can tell what information to provide to an AI assistant.
- The chapter distinguishes a useful answer from a confident answer.
- The reader has a practical exercise that can be completed with prompts only.

## Prompt gate

- Every prompt example has a specific purpose.
- Prompts ask for assumptions, questions, or verification when appropriate.
- Placeholders are clearly marked.
- Prompts do not request secrets or unnecessary private material.
- Prompts avoid destructive actions unless a preview or confirmation is required.
- Follow-up prompts show how to improve an incomplete answer.

## Editorial gate

- Headings describe the reader’s task.
- Paragraphs are concise and concrete.
- Terminology is consistent: task, context, input, output, constraint, and verification.
- The chapter does not repeat an earlier explanation without adding a new use.
- The ending includes a summary and a checklist.

## Production gate

- The R Markdown file renders without errors.
- Links point to existing files or intentional external resources.
- Prompt boxes and checklists render correctly in the GitBook theme.
- The chapter appears in the intended order.
- The review record is saved in `editorial/reviews/`.

## Review roles

When subagents are available, use one independent pass for each role:

1. **Scope editor** — checks audience, boundaries, language, and exclusions.
2. **Prompt editor** — checks whether examples are specific, reusable, and safe.
3. **Learner editor** — checks sequence, clarity, and exercise difficulty.
4. **Production editor** — checks R Markdown, links, rendering, and navigation.

If subagents are not available, perform the four passes separately and record the limitation rather than presenting one pass as four independent opinions.
