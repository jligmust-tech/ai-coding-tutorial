# Modify Existing Code

## What you will learn

By the end of this chapter, you will be able to:

- define a focused change;
- protect behavior that must remain unchanged;
- limit unnecessary edits; and
- review a modification before accepting it.

## Describe one change at a time

Existing code contains behavior, dependencies, and assumptions that may not be obvious. A focused request reduces the chance that the assistant will rewrite unrelated parts.

<div class="prompt-box">
<p class="prompt-label">Prompt: request a focused modification</p>
<p class="prompt-text">Modify the existing code to [specific new behavior]. Preserve [behaviors, interfaces, files, or conventions that must remain unchanged]. Do not refactor unrelated sections. First identify the smallest area that needs to change and explain why.</p>
</div>

If you want a broader cleanup, make that a separate request. Separating changes makes the result easier to understand and verify.

## State what must not change

A request is incomplete if it describes only the new behavior. Say which existing behavior, inputs, outputs, names, formats, and interfaces must be preserved.

<div class="prompt-box">
<p class="prompt-label">Prompt: protect existing behavior</p>
<p class="prompt-text">The new requirement is [requirement]. Preserve these existing behaviors: [list]. Preserve these interfaces and formats: [list]. If the new requirement conflicts with any preserved behavior, stop and describe the conflict instead of choosing silently.</p>
</div>

This prompt helps expose a genuine requirement conflict before edits are made.

## Ask for an impact map

Before changing an unfamiliar area, ask what may depend on it and which parts could be affected.

<div class="prompt-box">
<p class="prompt-label">Prompt: map the impact</p>
<p class="prompt-text">Before proposing the modification, identify the relevant dependencies, callers, inputs, outputs, and documented assumptions. Explain which areas could be affected and which areas are unlikely to be affected. Mark anything that cannot be determined from the material provided.</p>
</div>

An impact map is a review aid, not proof that no other effects exist.

## Request a small diff

Ask the assistant to keep the change narrow and report files or sections that it would touch.

<div class="prompt-box">
<p class="prompt-label">Prompt: limit the change</p>
<p class="prompt-text">List the files or sections you intend to change and the purpose of each change. Keep the modification as small as possible. Do not apply it until I confirm that the scope is correct.</p>
</div>

If a small change requires a larger supporting change, ask the assistant to explain the dependency rather than silently expanding the scope.

## Compare behavior after modification

A modification should be checked against both the new requirement and the old behavior it was meant to preserve.

<div class="prompt-box">
<p class="prompt-label">Prompt: review a modification</p>
<p class="prompt-text">Review the proposed modification against the new requirement and the preserved behavior. List normal cases, edge cases, and failure cases that should be checked. Identify any behavior that may have changed unintentionally.</p>
</div>

## Practice: plan a small change

Choose a low-risk change to existing code. Ask for the impact map and intended scope. Compare the proposed scope with your own understanding before requesting implementation.

<div class="prompt-box">
<p class="prompt-label">Prompt: confirm scope</p>
<p class="prompt-text">Restate the requested change, the behavior to preserve, the intended scope, and the risks. Ask me to confirm the summary before making any modification.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before accepting a modification</p>
<ul>
<li>Is the new behavior specific?</li>
<li>Have I stated what must remain unchanged?</li>
<li>Has the assistant identified likely dependencies?</li>
<li>Is the proposed scope narrow enough to review?</li>
<li>Have normal, edge, and failure cases been considered?</li>
<li>Have I checked for unrelated edits?</li>
</ul>
</div>
