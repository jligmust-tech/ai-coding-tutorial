# The Debugging Workflow

## What you will learn

By the end of this chapter, you will be able to:

- turn a failure into a structured investigation;
- test hypotheses in a controlled order;
- request a supported correction; and
- preserve a record of the lesson.

## Frame the failure

State expected behavior, observed behavior, reproduction steps, relevant conditions, and evidence. Avoid presenting an untested cause as fact.

<div class="prompt-box">
<p class="prompt-label">Prompt: frame the investigation</p>
<p class="prompt-text">Expected behavior: [expected]. Observed behavior: [actual]. Reproduction: [steps]. Relevant conditions: [conditions]. Evidence: [evidence]. Separate symptoms from possible causes and identify the first safe diagnostic step.</p>
</div>

## Rank and test hypotheses

Ask for a sequence in which each step produces evidence that changes the next decision.

<div class="prompt-box">
<p class="prompt-label">Prompt: investigate hypotheses</p>
<p class="prompt-text">List the most plausible causes and rank them. Create an ordered diagnostic plan with one hypothesis or variable per step, the expected observation, and the meaning of each possible result. Do not propose a permanent fix yet.</p>
</div>

## Reduce carefully

A smaller reproduction can clarify a problem, but it must preserve the failure condition.

<div class="prompt-box">
<p class="prompt-label">Prompt: reduce without losing the bug</p>
<p class="prompt-text">Help reduce this problem to the smallest reproducible case. Explain what can be removed safely, how to confirm the failure remains, and what information would be lost by each removal.</p>
</div>

## Apply and verify a focused fix

Once the evidence supports a cause, request the smallest correction and checks for regression.

<div class="prompt-box">
<p class="prompt-label">Prompt: fix and verify</p>
<p class="prompt-text">The evidence supports [cause]. Propose the smallest correction. State what it changes, what it preserves, what it does not solve, and how to check the original failure, normal behavior, and nearby edge cases.</p>
</div>

## Capture the lesson

Record the signal that would help you identify the same class of problem later.

<div class="prompt-box">
<p class="prompt-label">Prompt: record the debugging lesson</p>
<p class="prompt-text">Summarize this investigation as symptom, cause, decisive evidence, correction, verification, and reusable lesson. Mark any part that remains uncertain.</p>
</div>

## Practice: rehearse an investigation

Use a past, non-sensitive error with a known cause. Provide the symptoms without revealing the cause, request ranked hypotheses, and compare the proposed checks with your records. Do not invent execution results: say when a check is only hypothetical. Finish by checking the lesson against the known evidence.

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Debugging workflow</p>
<ul>
<li>Are expected and observed behaviors clear?</li>
<li>Is there reproducible evidence?</li>
<li>Are hypotheses separated from symptoms?</li>
<li>Does each diagnostic step test one important variable?</li>
<li>Is the fix supported by evidence?</li>
<li>Were regression checks and lessons recorded?</li>
</ul>
</div>
