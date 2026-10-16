# Ask AI to Explain Changes

## What you will learn

By the end of this chapter, you will be able to:

- ask for a precise explanation of a proposed change;
- distinguish changed behavior from unchanged behavior;
- identify side effects and risks; and
- check whether a change matches the original request.

## Ask for a change summary

A useful change explanation is more than “I updated the file.” It tells you what changed, why it changed, and what the assistant deliberately left alone.

<div class="prompt-box">
<p class="prompt-label">Prompt: explain a proposed change</p>
<p class="prompt-text">Explain this proposed change in plain language. Identify the requested behavior, the specific areas affected, the reason for each change, and the behavior that should remain unchanged. Do not describe any change that is not visible in the supplied material.</p>
</div>

Ask for the explanation before accepting the change. If the assistant cannot explain it clearly, the change may be too broad or insufficiently understood.

## Compare before and after

A comparison should focus on observable behavior rather than only on the number of changed lines or files.

<div class="prompt-box">
<p class="prompt-label">Prompt: compare behavior</p>
<p class="prompt-text">Compare the original and proposed versions for normal inputs, empty or missing inputs, invalid inputs, repeated use, and failure conditions. For each category, state whether behavior is unchanged, intentionally changed, or uncertain.</p>
</div>

If the material is too large for a reliable comparison, ask the assistant to identify the relevant sections and continue in smaller parts.

## Look for side effects

A change can affect behavior beyond the requested feature. Ask about interfaces, data formats, ordering, performance, dependencies, permissions, and user-visible messages.

<div class="prompt-box">
<p class="prompt-label">Prompt: find side effects</p>
<p class="prompt-text">Review this change for side effects outside the stated task. Consider inputs and outputs, stored data, external services, performance, error handling, permissions, and compatibility. Rank each concern by likelihood and impact, and say what evidence would confirm it.</p>
</div>

A risk is not a failure. It is a reason to perform a focused check.

## Check the change against requirements

Use the original request as the review standard. Do not let a polished explanation replace the requirements.

<div class="prompt-box">
<p class="prompt-label">Prompt: check requirements</p>
<p class="prompt-text">Check the proposed change against each requirement below. For every requirement, give one of these decisions: satisfied, partially satisfied, not satisfied, or cannot determine. Quote the relevant evidence and list any missing verification.</p>
</div>

If the change adds behavior that was not requested, ask whether it is necessary. Extra behavior increases the surface area that must be understood and checked.

<div class="prompt-box">
<p class="prompt-label">Prompt: detect unnecessary scope</p>
<p class="prompt-text">Identify changes that are unrelated to the stated task or larger than necessary. For each one, explain why it may increase risk and suggest how to keep the change focused.</p>
</div>

## Request a review in two voices

For important changes, ask first for the author’s explanation and then for an independent reviewer’s concerns. Keep the roles separate so the review does not simply repeat the implementation rationale.

<div class="prompt-box">
<p class="prompt-label">Prompt: independent review</p>
<p class="prompt-text">Review the proposed change as if you did not write it. Do not repeat its justification unless the evidence supports it. Look for incorrect assumptions, missing cases, unnecessary scope, and ways the change could produce a plausible but wrong result.</p>
</div>

## Practice: explain a small change

Choose a small, low-risk change. Ask for an explanation, a behavior comparison, and a requirements check. Decide what you will verify yourself before accepting it.

<div class="prompt-box">
<p class="prompt-label">Prompt: final change briefing</p>
<p class="prompt-text">Prepare a concise briefing for this change with five sections: purpose, changed behavior, preserved behavior, risks, and verification steps. Mark each statement as confirmed, inferred, or still unknown.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before accepting a change</p>
<ul>
<li>Can the change be explained in terms of the original request?</li>
<li>Are changed and preserved behaviors separate?</li>
<li>Have normal, edge, and failure cases been considered?</li>
<li>Are side effects and uncertainties visible?</li>
<li>Has unnecessary scope been identified?</li>
<li>Do I know what I still need to verify myself?</li>
</ul>
</div>
