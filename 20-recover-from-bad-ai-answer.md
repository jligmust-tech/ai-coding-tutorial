# Recover from a Bad AI Answer

## What you will learn

By the end of this chapter, you will be able to:

- recognize when an answer is unreliable or off-task;
- stop a conversation from compounding a mistake;
- provide corrective evidence and reset the request; and
- preserve useful work while replacing unsupported conclusions.

## Notice warning signs

An answer deserves closer review when it ignores requirements, invents details, changes unrelated behavior, contradicts supplied evidence, or claims to have run checks without evidence.

<div class="prompt-box">
<p class="prompt-label">Prompt: identify answer problems</p>
<p class="prompt-text">Review your previous answer against my request and the supplied material. Identify unsupported claims, missed constraints, contradictions, invented details, unnecessary changes, and checks you described but did not actually run. Do not defend the answer; report what should be corrected.</p>
</div>

A confident tone does not resolve a contradiction. Return to the original requirements and evidence.

## Stop before expanding the mistake

If the response is substantially wrong, do not ask it to continue building on the same assumptions. Ask for a diagnosis of the mismatch or start a fresh, focused request with the relevant facts.

<div class="prompt-box">
<p class="prompt-label">Prompt: reset the task</p>
<p class="prompt-text">Stop using the assumptions in your previous answer. Here is the original goal: [goal]. Here are the constraints and evidence: [constraints and evidence]. Restate the task, identify any remaining uncertainty, and ask necessary questions before proposing a new approach.</p>
</div>

For a complex issue, a new conversation can help avoid carrying forward a misleading explanation. Bring only the context needed to make the task clear.

## Preserve useful material cautiously

A flawed answer may contain some accurate observations. Separate those from unsupported conclusions before reusing anything.

<div class="prompt-box">
<p class="prompt-label">Prompt: salvage supported work</p>
<p class="prompt-text">Separate the previous response into: independently supported observations, plausible but unverified ideas, and claims that conflict with evidence or requirements. Recommend what, if anything, can safely be reused and what must be discarded or checked again.</p>
</div>

Do not keep an unverified change merely because it took effort to produce.

## Correct one misunderstanding at a time

State the specific mismatch and provide the evidence or requirement that resolves it. Then ask for a narrow correction rather than another broad rewrite.

<div class="prompt-box">
<p class="prompt-label">Prompt: correct a specific mismatch</p>
<p class="prompt-text">Your previous answer misunderstood [specific point]. The correct requirement or evidence is [detail]. Revise only the part affected by this correction. State what changed, what remains unchanged, and what still requires verification.</p>
</div>

If the assistant repeats the same mistake, change the context, narrow the task, or use an authoritative source rather than restating the request indefinitely.

## Recover from an incorrect change

If an AI-generated change has already been applied, first identify what changed and preserve a recoverable state. Then compare it with the last known-good version and verify the recovery.

<div class="prompt-box">
<p class="prompt-label">Prompt: plan a safe recovery</p>
<p class="prompt-text">This AI-generated change appears incorrect. Help me identify the exact affected areas, compare them with the last known-good state, and plan a reversible recovery. Do not discard unrelated work. List checks that would confirm both the recovery and preserved work.</p>
</div>

For operations that affect important data, credentials, external services, or production systems, pause and get qualified human help when the consequences are unclear.

## Practice: repair a conversation

Use a harmless example of a previous answer that missed a requirement. Identify the mismatch, reset the assumptions, and request only the narrow correction needed.

<div class="prompt-box">
<p class="prompt-label">Prompt: review the recovery</p>
<p class="prompt-text">Review this recovery conversation. Did I identify the original requirement, provide enough evidence, avoid carrying forward unsupported assumptions, and verify the correction? Suggest one improvement to my recovery process.</p>
</div>

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">When an AI answer goes wrong</p>
<ul>
<li>Have I stopped it from building on a false assumption?</li>
<li>Have I compared the answer with the original request and evidence?</li>
<li>Are useful observations separated from unsupported claims?</li>
<li>Is the correction narrow and explicit?</li>
<li>Have I preserved a recoverable state before undoing changes?</li>
<li>Have I verified the recovery and protected unrelated work?</li>
</ul>
</div>
