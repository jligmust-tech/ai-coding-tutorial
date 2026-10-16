# Find and Fix Bugs

## What you will learn

By the end of this chapter, you will be able to:

- describe a bug with evidence;
- ask AI to distinguish symptoms from causes;
- investigate one hypothesis at a time; and
- verify that a fix addresses the original bug without creating another one.

## Describe the bug precisely

A bug report should explain what should happen, what does happen, and how to reproduce the difference. Avoid starting with your preferred cause unless you have evidence for it.

<div class="prompt-box">
<p class="prompt-label">Prompt: report a bug</p>
<p class="prompt-text">The expected behavior is [expected behavior]. The observed behavior is [actual behavior]. I can reproduce it by [reproduction steps]. The relevant input or condition is [input or condition]. Here is the evidence: [error, output, or observation]. Help me investigate the cause without assuming my first hypothesis is correct.</p>
</div>

A reproducible problem is easier to investigate than a general complaint. If it is not reproducible, describe when it occurred and what evidence remains.

## Separate symptoms from causes

The first unusual line or message is not necessarily the cause. Ask for possible causes and the evidence needed to distinguish them.

<div class="prompt-box">
<p class="prompt-label">Prompt: separate cause and symptom</p>
<p class="prompt-text">Separate the observed symptoms from possible underlying causes. Rank up to four hypotheses. For each, state supporting evidence, conflicting evidence, and one diagnostic check. Do not recommend a permanent fix yet.</p>
</div>

This keeps debugging from becoming a sequence of guesses.

## Reduce the failure safely

A smaller case can reveal the cause, but only if it still reproduces the problem.

<div class="prompt-box">
<p class="prompt-label">Prompt: create a minimal reproduction</p>
<p class="prompt-text">Help me reduce this failure to the smallest reproducible case. Preserve the condition that triggers the bug, remove unrelated behavior, and explain how to confirm that the reduced case still represents the original failure.</p>
</div>

If the reduced case no longer fails, do not assume the bug is gone. Identify what was removed that may have been necessary to reproduce it.

## Request a controlled investigation

A debugging process is easier to understand when each step produces evidence that changes the next decision.

<div class="prompt-box">
<p class="prompt-label">Prompt: investigate in order</p>
<p class="prompt-text">Create an ordered debugging plan. Each step should check one hypothesis or variable, state the expected observation, and explain what the result would mean. Start with the safest and least disruptive check. Stop when the evidence supports a cause.</p>
</div>

Avoid changing several unrelated things at once. Otherwise, even a successful result may not tell you which change mattered.

## Request the smallest fix

Once the cause is supported, ask for a focused correction and its limits.

<div class="prompt-box">
<p class="prompt-label">Prompt: propose a bug fix</p>
<p class="prompt-text">The evidence supports [cause]. Propose the smallest fix that addresses it. Explain why the fix addresses the cause, what behavior it preserves, what cases it does not cover, and how to check for regression.</p>
</div>

A fix that hides the symptom without addressing the cause should be identified as a workaround, not presented as a complete solution.

## Check for regressions

After a fix, check the original failure, the normal behavior around it, and related edge cases.

<div class="prompt-box">
<p class="prompt-label">Prompt: verify a fix</p>
<p class="prompt-text">Create a verification checklist for this fix. Include the original failing case, a normal case, nearby boundary cases, invalid input, and any preserved behavior. For each check, state the expected result and what a failure would suggest.</p>
</div>

## Practice: review a past bug fix

Choose a low-risk bug you have already fixed. Ask the assistant to reconstruct the symptom, evidence, cause, correction, and verification. Compare its account with your records and correct any unsupported inference.

<div class="prompt-box">
<p class="prompt-label">Prompt: learn from the fix</p>
<p class="prompt-text">Review this past bug investigation. Separate confirmed evidence from assumptions, identify where the investigation could have gone wrong, and summarize the general lesson without inventing details that are not supported.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">A careful bug-fixing request</p>
<ul>
<li>Describes expected and observed behavior.</li>
<li>Includes reproduction steps or remaining evidence.</li>
<li>Separates symptoms from hypotheses.</li>
<li>Uses controlled diagnostic steps.</li>
<li>Requests the smallest supported fix.</li>
<li>Checks the original failure and regression cases.</li>
</ul>
</div>
