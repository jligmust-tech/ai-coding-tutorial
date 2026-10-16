# Work with Large Files and Long Conversations

## What you will learn

By the end of this chapter, you will be able to:

- divide large tasks into manageable questions;
- maintain a reliable summary of decisions and evidence;
- reduce irrelevant context without losing essential constraints; and
- restart a conversation with a compact handoff.

## Divide the task by question

A large file or broad project question can exceed attention, context, or review limits. Ask the assistant to identify useful sections and answer one question at a time.

<div class="prompt-box">
<p class="prompt-label">Prompt: divide a large review</p>
<p class="prompt-text">I need to understand [goal] in this large material. Identify the sections that directly answer the question, explain what each contributes, and propose a sequence of small review steps. Do not assume omitted material is irrelevant without saying why.</p>
</div>

For each step, keep the question specific and request references to the relevant material where possible.

## Maintain a working summary

Long conversations accumulate decisions, abandoned ideas, and changed assumptions. Ask for a concise summary that distinguishes current facts from earlier possibilities.

<div class="prompt-box">
<p class="prompt-label">Prompt: summarize the current state</p>
<p class="prompt-text">Summarize the current task state with these headings: goal, confirmed facts, constraints, decisions made, options rejected and why, unresolved questions, evidence gathered, and next step. Exclude outdated assumptions unless they explain a decision.</p>
</div>

Check the summary against the conversation before reusing it. A summary can omit a small but important constraint.

## Reduce context deliberately

Do not solve context pressure by deleting arbitrary details. Preserve the goal, constraints, relevant evidence, and unresolved risks; remove repetition and unrelated history.

<div class="prompt-box">
<p class="prompt-label">Prompt: compress context safely</p>
<p class="prompt-text">Compress the context for a new conversation. Preserve the goal, must-follow constraints, relevant evidence, confirmed decisions, uncertainties, and next action. Remove repetition and unrelated discussion. Flag any detail whose omission could change the result.</p>
</div>

## Restart with a handoff

When starting a fresh conversation, supply a brief handoff and ask the assistant to restate the task before continuing.

<div class="prompt-box">
<p class="prompt-label">Prompt: verify a handoff</p>
<p class="prompt-text">Using this handoff, restate the goal, constraints, confirmed facts, and unresolved questions. Identify missing context that could affect your next step. Do not continue until I confirm the restatement is accurate.</p>
</div>

A fresh conversation can reduce confusion, but it does not guarantee that earlier errors have been removed. Recheck important conclusions from their evidence.

## Practice: create a compact handoff

Use a long, non-sensitive conversation or document review. Produce a summary, compare it with the source, and test whether a new assistant can restate the task correctly from the summary alone.

<div class="prompt-box">
<p class="prompt-label">Prompt: test the handoff</p>
<p class="prompt-text">Review this handoff for missing constraints, ambiguous decisions, unsupported summaries, and unnecessary details. Identify the smallest additions needed for another assistant to continue safely.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">When context becomes large</p>
<ul>
<li>Have I divided the work into specific questions?</li>
<li>Does the working summary separate facts from options?</li>
<li>Are current constraints and decisions preserved?</li>
<li>Have I checked the summary against its source?</li>
<li>Does a new conversation restate the task accurately?</li>
<li>Will I re-verify important conclusions?</li>
</ul>
</div>
