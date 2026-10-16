# Ask AI to Use Tools Carefully

## What you will learn

By the end of this chapter, you will be able to:

- identify the consequences of a proposed tool action;
- limit an action to an approved scope;
- require review before consequential changes; and
- plan for interruption and recovery.

## Understand the action before allowing it

A tool action may read, create, modify, transmit, or remove information. Ask what the action will affect and why it is necessary.

<div class="prompt-box">
<p class="prompt-label">Prompt: inspect a proposed action</p>
<p class="prompt-text">Before taking this action, state the tool or capability you plan to use, the information it will read or change, why it is necessary, the scope, possible consequences, and how I can review the result. Wait for my confirmation.</p>
</div>

The available controls depend on the environment. Read the relevant tool and Pi documentation, and use environment-level permissions rather than relying only on conversational instructions.

## Define a boundary

State what the assistant may inspect or change and what is outside scope. Ask it to stop if the requested task would require expanding that boundary.

<div class="prompt-box">
<p class="prompt-label">Prompt: set tool boundaries</p>
<p class="prompt-text">For this task, you may [permitted actions] within [approved scope]. Do not [prohibited actions] or access [excluded material]. If the task requires anything outside this boundary, explain why and ask before proceeding.</p>
</div>

Use the narrowest practical access and avoid exposing secrets or unrelated private information.

## Require previews and confirmations

For actions that can modify data, communicate externally, incur costs, or affect a shared system, ask for a preview and explicit confirmation before execution.

<div class="prompt-box">
<p class="prompt-label">Prompt: preview a consequential action</p>
<p class="prompt-text">Prepare a preview of the exact action and its affected items. Identify irreversible effects, external communications, costs, and failure modes. Do not execute it until I review the preview and explicitly approve the specific action.</p>
</div>

A confirmation should apply to a specific action, not be treated as blanket permission for later steps.

## Plan for interruptions and recovery

Tool tasks may fail partway through. Ask how progress will be reported and how to detect partial completion or safely recover.

<div class="prompt-box">
<p class="prompt-label">Prompt: plan for partial failure</p>
<p class="prompt-text">Before starting, explain what happens if the action is interrupted or fails partway through. State how to detect partial completion, avoid duplicate effects on retry, preserve recoverable state, and report what did and did not complete.</p>
</div>

Do not retry a consequential action until you know whether the first attempt partially succeeded.

## Review the result

After tool use, compare the actual result with the approved plan. Ask for a clear account of completed, skipped, and uncertain effects.

<div class="prompt-box">
<p class="prompt-label">Prompt: audit tool results</p>
<p class="prompt-text">Report what the tool actually did, what it did not do, any partial or uncertain effects, and how the result was checked against the approved plan. Identify changes outside the planned scope and stop if any occurred.</p>
</div>

## Practice: evaluate a proposed tool action

Use a harmless, reversible task. Ask the assistant to explain the action, preview its scope, wait for approval, and report the result. Compare the result with the original plan.

<div class="prompt-box">
<p class="prompt-label">Prompt: rehearse tool use</p>
<p class="prompt-text">For this low-risk task, proceed in stages: explain the proposed action, show a preview, wait for my specific approval, perform only the approved action, and report the verified result. Stop if the scope changes or the outcome is uncertain.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Before allowing tool use</p>
<ul>
<li>Do I understand what will be read, changed, or transmitted?</li>
<li>Is the action limited to an explicit scope?</li>
<li>Have I reviewed a preview for consequential effects?</li>
<li>Is confirmation specific to this action?</li>
<li>Is there a plan for interruption and partial completion?</li>
<li>Will I compare the result with the approved plan?</li>
</ul>
</div>
