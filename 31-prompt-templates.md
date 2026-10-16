# Prompt Templates

This appendix collects adaptable templates from the book. Replace every bracketed placeholder, remove instructions that do not apply, and add the context needed for your task. These templates are starting points, not guarantees of correctness.

## Understand a concept

<div class="prompt-box">
<p class="prompt-label">Template: learn a concept</p>
<p class="prompt-text">I understand [known background], but I am confused about [concept]. Explain it for [experience level]. Compare it with [related concept], give me a practice question without the answer first, and identify the most common misunderstanding.</p>
</div>

## Understand existing code

<div class="prompt-box">
<p class="prompt-label">Template: explain existing code</p>
<p class="prompt-text">Explain this material at a high level. State its apparent purpose, inputs, outputs, main stages, dependencies, assumptions, and boundaries. Separate observable behavior from inferred intent, and mark what cannot be determined.</p>
</div>

## Ask AI to write

<div class="prompt-box">
<p class="prompt-label">Template: plan and write</p>
<p class="prompt-text">I need [desired behavior] for [situation]. Inputs are [inputs]; expected outputs are [outputs]. Requirements are [requirements]. Preferences are [preferences]. First restate the task, identify ambiguity, propose a plan, and list verification checks. Draft only after the plan is confirmed.</p>
</div>

## Modify existing code

<div class="prompt-box">
<p class="prompt-label">Template: focused modification</p>
<p class="prompt-text">Modify the existing material to [new behavior]. Preserve [behavior, interfaces, formats, and conventions]. Do not change unrelated areas. Identify the smallest intended scope, list affected areas, and describe how to verify both the new and preserved behavior.</p>
</div>

## Improve or simplify

<div class="prompt-box">
<p class="prompt-label">Template: deliberate improvement</p>
<p class="prompt-text">I want to improve this for [goal]. Success means [observable criterion]. Assess the current issues first, compare [number] options, state trade-offs and assumptions, and recommend the smallest useful change. Include checks for preserved behavior and the intended improvement.</p>
</div>

## Diagnose an error

<div class="prompt-box">
<p class="prompt-label">Template: evidence-based debugging</p>
<p class="prompt-text">Expected behavior: [expected]. Observed behavior: [actual]. Reproduction: [steps]. Conditions: [conditions]. Evidence: [evidence]. Separate symptoms from hypotheses, rank plausible causes, propose safe diagnostic checks, and do not suggest a permanent fix until the cause is supported.</p>
</div>

## Verify an answer or change

<div class="prompt-box">
<p class="prompt-label">Template: independent review</p>
<p class="prompt-text">Review this answer or change against [requirements and preserved behavior]. Separate supported claims, inferences, and unknowns. Check normal, boundary, invalid, and failure cases. Identify side effects, unnecessary scope, and the highest-priority verification steps.</p>
</div>

## Work with files

<div class="prompt-box">
<p class="prompt-label">Template: safe file operation</p>
<p class="prompt-text">I need to [operation] items in [location] matching [precise selection rule]. Preserve [originals and metadata]. Inspect first, show a preview with conflicts and skipped items, explain recovery from interruption, and wait for explicit confirmation before making changes.</p>
</div>

## Work with data

<div class="prompt-box">
<p class="prompt-label">Template: data task</p>
<p class="prompt-text">The question is [question] for [audience]. One row represents [unit]. Fields and units are [details]. Inspect quality first, then propose transformations with assumptions and missing-value decisions. Separate observations from interpretation and provide reproducibility and verification checks.</p>
</div>

## Compare alternatives

<div class="prompt-box">
<p class="prompt-label">Template: compare solutions</p>
<p class="prompt-text">Compare these approaches for [task] using [ranked criteria] and [constraints]. Use equal assumptions. For each, state benefits, limitations, dependencies, risks, and verification effort. Recommend one conditionally and explain what evidence or constraint would change the choice.</p>
</div>

## Recover from a bad answer

<div class="prompt-box">
<p class="prompt-label">Template: reset and recover</p>
<p class="prompt-text">Stop using unsupported assumptions from the previous answer. The original goal is [goal]. Correct constraints and evidence are [details]. Separate supported observations from uncertain ideas and contradictions. Restate the task, ask necessary questions, and propose only a narrow, reversible next step.</p>
</div>

## Use tools carefully

<div class="prompt-box">
<p class="prompt-label">Template: bounded tool action</p>
<p class="prompt-text">Before using a tool, explain what it will read, change, or transmit; why it is needed; its exact scope; possible consequences; and how to review or undo it. Prepare a preview and wait for my specific approval. Report completed, skipped, partial, and uncertain effects afterward.</p>
</div>

## Template checklist

<div class="checklist-box">
<p class="checklist-label">Before reusing a template</p>
<ul>
<li>Have I replaced every relevant placeholder?</li>
<li>Is the task and desired result specific?</li>
<li>Are constraints and preserved behavior clear?</li>
<li>Have I included relevant context without exposing secrets?</li>
<li>Have I requested an appropriate output structure?</li>
<li>Can I verify the result independently?</li>
</ul>
</div>
