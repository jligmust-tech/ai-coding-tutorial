# Learn from Errors

## What you will learn

By the end of this chapter, you will be able to:

- report a coding problem with useful evidence;
- distinguish symptoms from possible causes;
- ask for diagnostic steps instead of a blind fix; and
- turn a resolved error into a reusable lesson.

## Describe expected and actual behavior

An error report should say what you intended to happen and what happened instead. The difference between the two is often more informative than the error message alone.

<div class="prompt-box">
<p class="prompt-label">Prompt: frame the problem</p>
<p class="prompt-text">I expected [expected behavior], but I observed [actual behavior]. The task I was performing was [task]. The complete error message or evidence is [evidence]. Help me separate the visible symptom from possible underlying causes.</p>
</div>

Use exact messages when possible. Do not remove details that seem unimportant before asking whether they matter.

## Ask for ranked hypotheses

There may be several possible causes. Ask the assistant to rank them and explain what evidence would support or weaken each one.

<div class="prompt-box">
<p class="prompt-label">Prompt: generate hypotheses</p>
<p class="prompt-text">List up to four plausible causes, ranked by likelihood. For each cause, explain the evidence for it, the evidence against it, and one safe diagnostic check. Do not recommend a permanent change until the cause is better established.</p>
</div>

A ranked list is not a diagnosis. Treat it as a plan for collecting evidence.

## Reduce the problem

A small, reproducible case is easier to reason about than a large failing task. Ask the assistant to help reduce the problem without removing the condition that causes the failure.

<div class="prompt-box">
<p class="prompt-label">Prompt: reduce the problem</p>
<p class="prompt-text">Help me create the smallest reproducible version of this problem. Preserve the condition that triggers the failure, remove unrelated behavior, and explain what each removed part was ruled out for. Do not assume that a simplified version is equivalent without checking.</p>
</div>

Reduction is not merely shortening. A shorter example that no longer fails has not explained the original problem.

## Change one diagnostic variable

When several things change at once, you cannot tell which change mattered. Ask for an ordered diagnostic process.

<div class="prompt-box">
<p class="prompt-label">Prompt: diagnose step by step</p>
<p class="prompt-text">Create a diagnostic sequence in which each step changes or checks one important variable. For each step, state the expected observation, what that observation would mean, and what the next step should be. Stop if the evidence rules out the current hypothesis.</p>
</div>

Keep a short record of what you tried and what happened. This prevents repeated experiments and gives the assistant better evidence if you need another conversation.

## Ask for a minimal correction

Once the cause is supported, request the smallest correction that addresses it. Ask what the correction does not solve.

<div class="prompt-box">
<p class="prompt-label">Prompt: propose a focused fix</p>
<p class="prompt-text">Based on the evidence, propose the smallest change that addresses [established cause]. Explain why it fixes the cause, what behavior it leaves unchanged, what it does not solve, and how I should verify it.</p>
</div>

If the evidence does not support a cause, the assistant should say so. A confident fix based on a weak hypothesis can hide the original problem.

## Turn the fix into learning

After the issue is resolved, ask for a short explanation that you can reuse. Focus on the signal that would help you recognize the same class of problem later.

<div class="prompt-box">
<p class="prompt-label">Prompt: create a lesson</p>
<p class="prompt-text">Summarize this error as a reusable lesson: symptom, underlying cause, misleading clue, decisive evidence, correction, and prevention. Keep the summary specific to the general pattern rather than only repeating the original details.</p>
</div>

## Practice: investigate an old error

Choose an old error with no private information. Remove any details that are not needed. Ask for hypotheses and diagnostic checks before asking for a correction.

<div class="prompt-box">
<p class="prompt-label">Prompt: review my debugging process</p>
<p class="prompt-text">Review my debugging process below. Identify where I made an assumption without evidence, where I changed too many variables at once, and where I stopped verifying too early. Suggest one improvement for my next investigation.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">A disciplined error conversation</p>
<ul>
<li>States expected and actual behavior.</li>
<li>Includes complete evidence where available.</li>
<li>Separates symptoms from causes.</li>
<li>Ranks hypotheses rather than asserting one immediately.</li>
<li>Uses safe, ordered diagnostic checks.</li>
<li>Requests a correction only after the cause is supported.</li>
<li>Records the lesson for future work.</li>
</ul>
</div>
