# The Write-and-Review Workflow

## What you will learn

By the end of this chapter, you will be able to:

- separate task planning from drafting;
- review an AI-generated result against requirements;
- request focused revisions; and
- accept work only after verification.

## Define the task before drafting

Begin with behavior, constraints, preserved behavior, and a verification method. Ask the assistant to identify ambiguity before producing a result.

<div class="prompt-box">
<p class="prompt-label">Prompt: define and plan</p>
<p class="prompt-text">My coding task is [task]. Requirements are [requirements]. Preserve [existing behavior]. Constraints are [constraints]. First restate the task, identify ambiguity, propose a short plan, and list verification checks. Do not draft yet.</p>
</div>

## Request a bounded draft

Once the plan is correct, ask for a focused result and an explanation of its decisions.

<div class="prompt-box">
<p class="prompt-label">Prompt: draft within scope</p>
<p class="prompt-text">Using the approved plan, produce the result within the agreed scope. Explain the major decisions, state assumptions, identify limitations, and distinguish confirmed behavior from what still needs verification.</p>
</div>

## Review independently

Do not ask only whether the draft is good. Ask for a review against the original requirements and likely failure cases.

<div class="prompt-box">
<p class="prompt-label">Prompt: review the draft</p>
<p class="prompt-text">Review this draft as an independent reviewer. Compare it with every requirement, preserved behavior, edge case, and constraint. Identify defects, unnecessary scope, unsupported assumptions, and missing checks. Rank findings by risk.</p>
</div>

## Revise narrowly

A broad rewrite can introduce new problems. Ask for one focused revision at a time and request a summary of the difference.

<div class="prompt-box">
<p class="prompt-label">Prompt: revise one finding</p>
<p class="prompt-text">Address finding [finding] only. Preserve the rest of the approved result. Explain the exact change, any new trade-off, and the verification check that covers it.</p>
</div>

## Verify and record

Finish by checking the result and recording what was reviewed, what passed, and what remains uncertain.

<div class="prompt-box">
<p class="prompt-label">Prompt: close the workflow</p>
<p class="prompt-text">Create a final review record with requirements, checks performed, results, unresolved risks, and the decision to accept, revise, or reject. Separate checks actually performed from checks still recommended.</p>
</div>

## Practice: review a small draft

Choose a low-risk coding task. Use the planning prompt, review the plan, and request a bounded draft. Run the reviewer prompt separately, select one finding to revise, and record which checks you actually performed. A second role in the same conversation is not an independent reviewer; obtain a separate human or independently run review when the consequences warrant it.

## Summary checklist

<div class="checklist-box">
<p class="checklist-label">Write-and-review workflow</p>
<ul>
<li>Was the task clarified before drafting?</li>
<li>Was the draft limited to approved scope?</li>
<li>Was it reviewed independently against requirements?</li>
<li>Were revisions focused?</li>
<li>Were checks performed and reported honestly?</li>
<li>Were unresolved risks recorded?</li>
</ul>
</div>
